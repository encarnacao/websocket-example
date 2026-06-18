import { Server } from "socket.io";
import { getUserCredits } from "./repositories/credits.js";
import {
  getPendingTransactions,
  updateCredits,
} from "./repositories/credits.js";

export let io;

export function initWebsocket(server) {
  io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", async (socket) => {
    const userId = socket.handshake.query?.userId;
    const admin = socket.handshake.query?.admin;

    if (admin) {
      console.log(`Admin conectado: ${socket.id}`);
      socket.join("admin");
      const pendingTransactions = await getPendingTransactions();
      socket.emit("adminUpdate", { transactions: pendingTransactions });
      socket.on("adminResponse", async (data) => {
        const { txnId, approved } = data;
        const { newBalance, userId } = await updateCredits(txnId, approved);
        if (!approved) {
          console.log(`Admin ${socket.id} rejeitou a transação ${txnId}`);
        } else if (newBalance && userId && approved) {
          console.log(
            `Admin ${socket.id} aprovou a transação ${txnId} para o usuário ${userId}`,
          );
          emitCreditUpdate(userId, newBalance);
        }
        emitAdminUpdate();
      });
    } else {
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
    }
    socket.on("disconnect", () => {
      console.log(`Socket desconectado: ${socket.id}`);
    });
  });
}

export function emitCreditUpdate(userId, amount) {
  io.to(`user:${userId}`).emit("creditUpdate", { amount });
}

export async function emitAdminUpdate() {
  const transactions = await getPendingTransactions();
  io.to("admin").emit("adminUpdate", { transactions });
}
