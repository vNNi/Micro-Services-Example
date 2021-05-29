import { favoriteRepository } from "../data-access/index.js";

import curryMakeFavor from "./make-favor.js";
import curryGetFavorites from "./get-favorites.js";

export const getFavorites = curryGetFavorites({ repository: favoriteRepository() });
export const makeFavor = curryMakeFavor({ repository: favoriteRepository() });
