const curryCreateTicket = ({ repository, produceMessage } = {}) => {
  const createTicket = async ({ ticket }) => {
    const created = await repository.createTicket(ticket);
    if (created?.length) {
      const { type } = ticket;
      if (type === "PRODUCT") {
        const { productId } = ticket;
        produceMessage({ productId });
      }
    }
    return created;
  };

  return createTicket;
};

export default curryCreateTicket;
