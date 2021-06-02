const curryGetProducts = ({ searchProducts }) => {
  const getProducts = async (req, res) => {
    try {
      const { pageSize, page, category, term, genre, order: orderParam } = req.query;

      const order = orderParam?.split(",");

      const filters = { category, term, sort: genre };

      const products = await searchProducts({ pageSize, page, filters, order });

      if (products.data) {
        res.json({ products }).status(200);
      } else {
        res.json({ products: null }).status(404);
      }

    } catch (error) {
      res.json({ products: null, error }).status(500);
    }

  };
  return getProducts;
};

export default curryGetProducts;
