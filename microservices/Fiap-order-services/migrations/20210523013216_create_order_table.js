export const up = knex =>
  knex.schema.createTable("order", table => {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.integer("user_id").notNullable();
    table.integer("product_id").notNullable();
    table.float("product_price").notNullable();
    table.boolean("completed").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

export const down = knex => {};
