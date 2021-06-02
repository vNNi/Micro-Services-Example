import config from "config";
import knex from "knex";

const connection = {
  host: config.get("db.host"),
  port: config.get("db.port"),
  user: config.get("db.user"),
  password: config.get("db.password"),
  database: config.get("db.databaseName"),
};

const connect = knex({
  client: "mysql",
  connection,
});

export default connect;
