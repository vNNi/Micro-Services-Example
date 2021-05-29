import express from "express";
import ProductRoutes from "../../routes/product/index.js";

const { Router } = express;
const app = Router();

app.use("/products", ProductRoutes);

export default app;
