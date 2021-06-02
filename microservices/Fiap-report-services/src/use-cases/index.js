import { ticketBroker, ticketRepository } from "../data-access/index.js";
import parser from "../infrastructure/broker/parser.js";

import curryProduceMessage from "./produce-message-product-report.js";
import curryCreateTicket from "./create-ticket.js";
import curryGetTickets from "./get-tickets.js";

export const produceMessage = curryProduceMessage({
  parser,
  producer: ticketBroker().ticketProducer("product-report"),
});

export const createTicket = curryCreateTicket({
  repository: ticketRepository(),
  produceMessage,
});

export const getTickets = curryGetTickets({ repository: ticketRepository() });
