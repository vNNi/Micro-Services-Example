export const seed = knex =>
  // Deletes ALL existing entries
  knex("favorite")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("favorite").insert([
        {
          product_id: 3,
          user_id: 1,
        },
      ])
    );
