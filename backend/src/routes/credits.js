import { removeCreditsTxn, addCreditsTxn } from "../repositories/credits.js";
import { Router } from "express";
import { emitCreditUpdate } from "../main.js";

export const creditsRouter = Router();

creditsRouter.post("/", async (req, res) => {
  const { userId, amount } = req.body;
  if (!userId || !amount || isNaN(amount)) {
    return res
      .status(400)
      .json({ error: "userId e amount positivos são obrigatórios" });
  }
  if (amount > 0) {
    const txnId = await addCreditsTxn(userId, amount);
    if (txnId) {
      res
        .status(200)
        .json({ message: "Requisição de créditos enviada com sucesso", txnId });
    } else {
      res.status(500).json({ error: "Erro ao adicionar créditos" });
    }
  } else {
    const { txnId, newBalance } = await removeCreditsTxn(userId, amount);

    if (txnId && newBalance !== undefined) {
      emitCreditUpdate(userId, newBalance);
      res
        .status(200)
        .json({ message: "Créditos removidos com sucesso", txnId, newBalance });
    } else {
      res.status(500).json({ error: "Erro ao remover créditos" });
    }
  }
});
