import { productBroker, productRepository } from "../data-access/index.js";
import parser from "../infrastructure/broker/parser.js";

import currySearchProducts from "./search-products.js";
import currySearchProduct from "./search-product.js";
import curryProductUpdate from "./update-visited-product.js";
import curryProductOrdered from "./updated-ordered-product.js";
import curryProductReported from "./update-report-open-product.js";

export const updateProductVisited = curryProductUpdate({
  db: productRepository,
  parser,
  consumer: productBroker.productConsumer(),
})();
export const updateProductOrdered = curryProductOrdered({
  db: productRepository,
  parser,
  consumer: productBroker.productConsumer(),
})();
export const updateProductReported = curryProductReported({
  db: productRepository,
  parser,
  consumer: productBroker.productConsumer(),
})();
export const searchProducts = currySearchProducts({
  db: productRepository,
});
export const searchProduct = currySearchProduct({
  parser,
  Producer: productBroker.productProducer("product-viewed"),
  db: productRepository,
});
