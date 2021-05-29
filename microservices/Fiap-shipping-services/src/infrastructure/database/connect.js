import config from "config";
import knex from "knex";
import paginate from "knex-paginate";

const { attachPaginate } = paginate;

const connection = {
  host: config.get("db.host"),
  user: config.get("db.user"),
  password: config.get("db.password"),
  database: config.get("db.databaseName"),
};

const connect = knex({
  client: "mysql",
  connection,
});

attachPaginate();

export default connect;
