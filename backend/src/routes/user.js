import { getUser } from "../repositories/user.js";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/login", async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: "Username é obrigatório" });
  }
  const user = await getUser(username);
  res.status(200).json({ userId: user.id, username: user.username });
});
