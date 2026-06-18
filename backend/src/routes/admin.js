import { Router } from "express";
import {
  getPendingTransactions,
  updateCredits,
} from "../repositories/credits.js";
import { emitCreditUpdate } from "../websocket.js";

export const adminRouter = Router();

adminRouter.get("/pending-transactions", async (req, res) => {
  const transactions = await getPendingTransactions();
  res.status(200).json({ transactions });
});

adminRouter.put("/pending-transaction", async (req, res) => {
  const { txnId, approved } = req.body;
  if (!txnId || typeof approved !== "boolean") {
    return res.status(400).json({ error: "txnId e approved são obrigatórios" });
  }
  const { newBalance, userId } = await updateCredits(txnId, approved);
  if (!approved) {
    res.status(200).json({ message: "Transação rejeitada com sucesso" });
  } else if (newBalance && userId && approved) {
    emitCreditUpdate(userId, newBalance);
    res.status(200).json({ message: "Transação atualizada com sucesso" });
  } else {
    res.status(500).json({ error: "Erro ao atualizar transação" });
  }
});
