import express from "express";
import TraceRoute from "../../routes/trace/index.js";

const { Router } = express;
const app = Router();

app.use("/order", TraceRoute);

export default app;
