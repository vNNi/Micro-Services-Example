export const up = knex =>
  knex.schema.table("product", table => {
    table.integer("reports_open").defaultTo(0);
  });

export const down = knex => {};
