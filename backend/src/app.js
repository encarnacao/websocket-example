import express from "express";
import cors from "cors";
import { healthRouter, adminRouter, creditsRouter, userRouter } from "./routes/index.js";

export const app = express();

app
  .use(express.json())
  .use(cors())
  .use("/health", healthRouter)
  .use("/admin", adminRouter)
  .use("/credits", creditsRouter)
  .use("/user", userRouter);