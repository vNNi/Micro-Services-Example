export const up = knex =>
  knex.schema.createTable("ticket", table => {
    table.increments();
    table.integer("user_id").notNullable();
    table.enu("type", ["PRODUCT", "USER", "OTHER"]).notNullable().defaultTo("OTHER");
    table.integer("product_id");
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.enu("risk", ["LOW", "MEDIUM", "HIGH"]).notNullable().defaultTo("LOW");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

export const down = knex => knex.schema.dropTable("ticket");
