const curryBroker = ({ producer }) => {
  const orderProducer = topic => {
    return producer(topic);
  };

  return Object.freeze({ orderProducer });
};

export default curryBroker;
