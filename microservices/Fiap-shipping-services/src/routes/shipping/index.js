import express from "express";

import { ShippingController } from "../../controllers/index.js";

const { Router } = express;
const app = Router();

app.post("/estimate/:zipCode", async (req, res) => {
  await ShippingController.estimate(req, res);
});

export default app;
