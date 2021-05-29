import { orderBroker, orderRepository } from "../data-access/index.js";
import parser from "../infrastructure/broker/parser.js";

import curryCreateOrder from "./create-order.js";
import curryGetOrderById from "./get-order-id.js";
import curryProduceMessage from "./produce-message-order-created.js";

export const produceMessage = curryProduceMessage({
  parser,
  producer: orderBroker().orderProducer("product-ordered"),
});
export const createOrder = curryCreateOrder({
  repository: orderRepository(),
  produceMessage,
});
export const getOrderById = curryGetOrderById({ repository: orderRepository() });
