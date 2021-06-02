const curryGetTickets = ({ repository } = {}) => {
  const getTickets = async () => {
    return repository.getTickets();
  };

  return getTickets;
};

export default curryGetTickets;
