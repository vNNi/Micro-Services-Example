import express from "express";

import { FavoritesController } from "../../controllers/index.js";

const { Router } = express;
const app = Router();

app.post("/:productId", async (req, res) => {
  await FavoritesController.createFavorite(req, res);
});

app.get("/user/:userId", async (req, res) => {
  await FavoritesController.getFavorites(req, res);
});

export default app;
