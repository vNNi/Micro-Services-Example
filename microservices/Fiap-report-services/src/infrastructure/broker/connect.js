import Kafka from "node-rdkafka";
import config from "config";

const host = config.get("kafka.host");
const groupId = config.get("kafka.groupId");

export const Consumer = new Kafka.KafkaConsumer(
  {
    "group.id": groupId || "kafka",
    "metadata.broker.list": host || "localhost:9092",
  },
  {}
);

export const producer = (topic = "product-ordered") => {
  return Kafka.Producer.createWriteStream(
    {
      "metadata.broker.list": host || "localhost:9092",
    },
    {},
    {
      topic,
    }
  );
};
