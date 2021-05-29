import curryGetProducts from "./getProducts.js";
import curryGetProduct from "./getProductById.js";

import { searchProducts, searchProduct } from "../../use-cases/index.js";

const Controller = {
  getProducts: curryGetProducts({ searchProducts }),
  getProductById: curryGetProduct({ searchProduct }),
};

export default Controller;
