import { makeFavor, getFavorites } from "../../use-cases/index.js";
import curryGetFavorites from "./getFavorites.js";
import curryCreateFavorite from "./createFavorite.js";

const Controller = {
  getFavorites: curryGetFavorites({ getFavorites }),
  createFavorite: curryCreateFavorite({ makeFavor }),
};

export default Controller;
