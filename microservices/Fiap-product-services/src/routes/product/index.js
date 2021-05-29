import express from "express";
import { ProductController } from "../../controllers/index.js";

const { Router } = express;
const app = Router();

app.get("/", async (req, res) => {
  await ProductController.getProducts(req, res);
});

app.get("/:id", async (req, res) => {
  await ProductController.getProductById(req, res);
});

export default app;
