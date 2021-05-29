import makeProductRepository from "./productRepository.js";

import makeProductBroker from "./broker.js";

import { Consumer, producer } from "../infrastructure/broker/connect.js";
import db from "../infrastructure/database/connect.js";

export const productRepository = () => makeProductRepository({ db });
export const productBroker = makeProductBroker({ Consumer, producer });
