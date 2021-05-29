export const up = knex =>
  knex.schema.table("product", table => {
    table.integer("purchased").defaultTo(0);
    table.integer("stock_count").defaultTo(10);
  });

export const down = knex => {};
