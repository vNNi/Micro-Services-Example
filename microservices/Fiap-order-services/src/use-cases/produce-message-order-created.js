const curryProduceMessage = ({ producer, parser }) => {
  const produceMessage = ({ productId }) => {
    const event = { productId: String(productId) };
    producer.write(parser.toBuffer(event));
  };

  return produceMessage;
};

export default curryProduceMessage;
