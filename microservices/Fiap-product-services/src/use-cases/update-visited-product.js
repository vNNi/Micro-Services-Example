const curryProductUpdate =
  ({ db, consumer, parser }) =>
  () => {
    consumer
      .on("ready", () => {
        consumer.subscribe(["product-viewed"]);
        consumer.consume();
      })
      .on("data", function (data) {
        const { productId } = parser.fromBuffer(data.value);

        db().productVisited({ productId });
      });
  };

export default curryProductUpdate;
