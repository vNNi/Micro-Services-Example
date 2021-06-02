const curryCreateTicket = ({ createTicket } = {}) => {
  const createTicketCurried = async (req, res) => {
    const { ticket } = req.body;

    const [ticketId] = await createTicket({ ticket });

    try {
      if (ticketId) {
        res.status(200).json({ ticketId, error: null });
      } else {
        res.status(203).json({ ticketId: null, error: "can not create ticket" });
      }
    } catch (e) {
      res.status(500).json({ ticketId: null, error: "unexpected error" });
    }
  };

  return createTicketCurried;
};

export default curryCreateTicket;
