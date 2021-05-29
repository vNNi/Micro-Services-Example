import express from "express";
import FavoritesRoute from "../../routes/favorites/index.js";

const { Router } = express;
const app = Router();

app.use("/favorites", FavoritesRoute);

export default app;
