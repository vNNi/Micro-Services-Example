export const up = (knex) => knex.schema.createTable("product", (table) => {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("sort");
    table.float("price").notNullable();
    table.string("category").notNullable();
    table.integer("visited").defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

export const down = (knex) => {
};
