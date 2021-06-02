import curryCreateTicket from "./createTicket.js";
import curryGetTickets from "./getTickets.js";

import { getTickets, createTicket } from "../../use-cases/index.js";

const Controller = {
  getTickets: curryGetTickets({ getTickets }),
  create: curryCreateTicket({ createTicket }),
};

export default Controller;
