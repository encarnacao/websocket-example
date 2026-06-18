import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import {
  healthRouter,
  adminRouter,
  creditsRouter,
  userRouter,
} from "./routes/index.js";
import { getUserCredits } from "./repositories/credits.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", async (socket) => {
  const userId = socket.handshake.query.userId;
  console.log(`Usuário conectado: ${userId} (socket ID: ${socket.id})`);
  socket.join(`user:${userId}`);
  const userCredits = await getUserCredits(userId);
  socket.emit("creditUpdate", { amount: userCredits || 1000 });

  socket.on("ping", (data) => {
    console.log(
      `Ping recebido do usuário ${userId} com timestamp: ${data.timestamp}`,
    );
    socket.emit("pong", { timestamp: data.timestamp });
  });
  socket.on("disconnect", () => {
    console.log(`Usuário desconectado: ${userId} (socket ID: ${socket.id})`);
  });
});

export function emitCreditUpdate(userId, amount) {
  io.to(`user:${userId}`).emit("creditUpdate", { amount });
}

app
  .use(express.json())
  .use(cors())
  .use("/health", healthRouter)
  .use("/admin", adminRouter)
  .use("/credits", creditsRouter)
  .use("/user", userRouter);

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
