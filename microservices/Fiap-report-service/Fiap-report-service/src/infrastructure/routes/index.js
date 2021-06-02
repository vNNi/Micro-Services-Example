import express from "express";
import TicketRoute from "../../routes/ticket/index.js";

const { Router } = express;
const app = Router();

app.use("/report", TicketRoute);

export default app;
