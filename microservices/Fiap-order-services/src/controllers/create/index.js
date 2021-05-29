import curryCreateOrder from "./createOrder.js";
import { createOrder } from "../../use-cases/index.js";

const Controller = {
  createOrder: curryCreateOrder({ createOrder }),
};

export default Controller;
