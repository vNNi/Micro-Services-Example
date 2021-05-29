import express from "express";

import { CreateController, TraceController } from "../../controllers/index.js";

const { Router } = express;
const app = Router();

app.get("/trace/:id", async (req, res) => {
  await TraceController.getTraceByOrderId(req, res);
});

app.post("/create", async (req, res) => {
  await CreateController.createOrder(req, res);
});

export default app;
