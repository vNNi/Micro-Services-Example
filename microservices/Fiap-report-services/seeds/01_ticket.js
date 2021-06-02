export const seed = knex =>
  // Deletes ALL existing entries
  knex("ticket")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("ticket").insert([
        {
          product_id: 1,
          user_id: 2,
          title: "Produto com preço errado",
          description:
            "Esse produto aqui está muito caro, comparado com o mercado. Creio que o preço esteja errado: http://localhost:40001/product/1",
          type: "PRODUCT",
          risk: "HIGH",
        },
      ])
    );
