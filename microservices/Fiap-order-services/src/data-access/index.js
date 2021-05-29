import makeOrderRepository from "./orderRepository.js";
import makeOrderBroker from "./orderBroker.js";

import db from "../infrastructure/database/connect.js";
import { producer } from "../infrastructure/broker/connect.js";

export const orderBroker = () => makeOrderBroker({ producer });
export const orderRepository = () => makeOrderRepository({ db });
