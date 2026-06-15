import { removeCreditsTxn, addCreditsTxn } from "../repositories/credits.js";
import { Router } from "express";

export const creditsRouter = Router();

creditsRouter.post("/add", async (req, res) => {
  const { userId, amount } = req.body;
  if (!userId || !amount || amount <= 0) {
    return res
      .status(400)
      .json({ error: "userId e amount positivos são obrigatórios" });
  }
  const txnId = await addCreditsTxn(userId, amount);
  if (txnId) {
    res
      .status(200)
      .json({ message: "Créditos adicionados com sucesso", txnId });
  } else {
    res.status(500).json({ error: "Erro ao adicionar créditos" });
  }
});

creditsRouter.post("/remove", async (req, res) => {
  const { userId, amount } = req.body;
  if (!userId || !amount || amount <= 0) {
    return res
      .status(400)
      .json({ error: "userId e amount positivos são obrigatórios" });
  }
  const txnId = await removeCreditsTxn(userId, amount);
  if (txnId) {
    res.status(200).json({ message: "Créditos removidos com sucesso", txnId });
  } else {
    res.status(500).json({ error: "Erro ao remover créditos" });
  }
});
