const curryBroker = ({ Consumer, producer }) => {
  const productConsumer = () => {
    Consumer.connect();
    return Consumer;
  };

  const productProducer = topic => {
    return producer(topic);
  };

  return Object.freeze({ productConsumer, productProducer });
};

export default curryBroker;
