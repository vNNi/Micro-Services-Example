import { getEstimate } from "../../use-cases/index.js";

import curryGetEstimate from "./estimate.js";

const Controller = {
  estimate: curryGetEstimate({ getEstimate }),
};

export default Controller;
