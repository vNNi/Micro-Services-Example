export const seed = knex =>
  // Deletes ALL existing entries
  knex("order")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("order").insert([
        {
          id: 1,
          product_id: 3,
          user_id: 1,
          title: "Geladeira brastemp frost free",
          description:
            "Geladeira Brastemp Frost Free Evox - Inverse 540,6L Ative BRO80 AK com as melhores condições você encontra no site do Magalu. Confira!",
          shipping_estimate: 30,
          product_price: 5496.0,
          completed: false,
        },
      ])
    );
