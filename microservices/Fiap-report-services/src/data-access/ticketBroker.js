const curryBroker = ({ producer }) => {
  const ticketProducer = topic => {
    return producer(topic);
  };

  return Object.freeze({ ticketProducer });
};

export default curryBroker;
