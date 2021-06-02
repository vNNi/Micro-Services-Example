import express from "express";

import { TicketController } from "../../controllers/index.js";

const { Router } = express;
const app = Router();

app.get("/tickets", async (req, res) => {
  await TicketController.getTickets(req, res);
});

app.post("/ticket", async (req, res) => {
  await TicketController.create(req, res);
});

export default app;
