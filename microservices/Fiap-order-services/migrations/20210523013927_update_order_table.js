export const up = knex =>
  knex.schema.table("order", table => {
    return table.integer("shipping_estimate");
  });

export const down = knex => {};
