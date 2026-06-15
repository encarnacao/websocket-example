import { Router } from "express";
import { getDatabaseStatsActivity } from "../repositories/health.js";
export const healthRouter = Router();

healthRouter.get("/", async (req, res) => {
  const databaseStats = await getDatabaseStatsActivity();
  res.status(200).json({ status: "ok", database: databaseStats });
});
