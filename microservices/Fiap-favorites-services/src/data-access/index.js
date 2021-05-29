import makeFavoritesRepository from "./favoriteRepository.js";

import db from "../infrastructure/database/connect.js";

export const favoriteRepository = () => makeFavoritesRepository({ db });
