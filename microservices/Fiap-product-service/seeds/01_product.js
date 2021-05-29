export const seed = knex =>
  // Deletes ALL existing entries
  knex("product")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("product").insert([
        {
          id: 1,
          title: "Geladeira brastemp frost free",
          description:
            "Geladeira Brastemp Frost Free Evox - Inverse 540,6L Ative BRO80 AK com as melhores condições você encontra no site do Magalu. Confira!",
          sort: "eletrodoméstico",
          price: 5496.0,
          category: "ED",
          visited: 0,
        },
        {
          id: 2,
          title: "iPhone XR Apple 64GB Preto",
          description:
            "iPhone XR Apple 64GB Preto 6,1” 12MP iOS com as melhores condições você encontra no site do Magalu. Confira!",
          sort: "celulares",
          price: 3719.07,
          category: "TE",
          visited: 0,
        },
        {
          id: 3,
          title: "Bicicleta Aro 29 Mountain Bike Caloi",
          description:
            "Bicicleta Aro 29 Mountain Bike Caloi - Velox Freio V-Brake 21 Marchas com as melhores condições você encontra no site do Magalu. Confira!",
          sort: "esporte",
          price: 1044.91,
          category: "ES",
          visited: 0,
        },
      ])
    );
