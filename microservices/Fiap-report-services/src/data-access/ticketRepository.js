const ticketRepository = ({ db } = {}) => {
  const createTicket = async ticket => {
    return db("ticket").insert(ticket);
  };

  const getTicketById = async id => {
    return db("ticket").where("id", id);
  };

  const getTickets = async () => {
    return db("ticket");
  };

  return Object.freeze({ createTicket, getTicketById, getTickets });
};

export default ticketRepository;
