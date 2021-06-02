const curryProductUpdate =
  ({ db, consumer, parser }) =>
  () => {
    consumer
      .on("ready", () => {
        consumer.subscribe(["report-product"]);
        consumer.consume();
      })
      .on("data", function (data) {
        const { productId } = parser.fromBuffer(data.value);

        db().productReported({ productId });
      });
  };

export default curryProductUpdate;
