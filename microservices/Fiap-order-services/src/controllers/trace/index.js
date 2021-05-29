import curryGetTraceById from "./getTraceById.js";
import { getOrderById } from "../../use-cases/index.js";

const Controller = {
  getTraceByOrderId: curryGetTraceById({ getOrderById }),
};

export default Controller;
