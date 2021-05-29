import config from "config";

export const connection = {
  host: config.get("db.host"),
  user: config.get("db.user"),
  password: config.get("db.password"),
  database: config.get("db.databaseName"),
};

const configuration = {
  development: {
    client: "mysql",
    connection,
  },
};

export const {
  development: { client },
} = configuration;
