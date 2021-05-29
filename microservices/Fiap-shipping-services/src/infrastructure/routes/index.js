import express from "express";
import Shipping from "../../routes/shipping/index.js";

const { Router } = express;
const app = Router();

app.use("/shipping", Shipping);

export default app;
