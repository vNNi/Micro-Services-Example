import makeTicketRepository from "./ticketRepository.js";
import makeTicketBroker from "./ticketBroker.js";

import db from "../infrastructure/database/connect.js";
import { producer } from "../infrastructure/broker/connect.js";

export const ticketBroker = () => makeTicketBroker({ producer });
export const ticketRepository = () => makeTicketRepository({ db });
