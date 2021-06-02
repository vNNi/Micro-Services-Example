const curryGetTickets = ({ getTickets } = {}) => {
  const getTicketsCurried = async (req, res) => {
    try {
      const response = await getTickets();

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error })
    }

  };

  return getTicketsCurried;
};

export default curryGetTickets;
