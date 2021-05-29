export const up = knex =>
  knex.schema.createTable("favorite", table => {
    table.increments();
    table.integer("user_id").notNullable();
    table.integer("product_id").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

export const down = knex => knex.schema.dropTable("favorite");
