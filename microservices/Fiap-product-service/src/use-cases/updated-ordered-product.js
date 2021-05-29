const curryProductUpdateOrdered =
  ({ db, consumer, parser }) =>
  () => {
    consumer
      .on("ready", () => {
        consumer.subscribe(["product-ordered"]);
        consumer.consume();
      })
      .on("data", function (data) {
        const { productId } = parser.fromBuffer(data.value);
        db().productOrdered({ productId });
      });
  };

export default curryProductUpdateOrdered;
