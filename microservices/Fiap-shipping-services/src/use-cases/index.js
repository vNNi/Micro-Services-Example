import { ShippingRepository } from "../data-access/index.js";

import curryGetEstimate from "./get-estimate.js";

export const getEstimate = curryGetEstimate({ repository: ShippingRepository });
