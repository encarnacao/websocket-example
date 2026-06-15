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

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log(`Usuário conectado: ${userId} (socket ID: ${socket.id})`);

  socket.join(`user:${userId}`);

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

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
