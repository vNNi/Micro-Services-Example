const curryGetProducts = ({ searchProducts }) => {
  const getProducts = async (req, res) => {
    const { pageSize, page, category, term, genre, order: orderParam } = req.query;

    const order = orderParam?.split(",");

    const filters = { category, term, sort: genre };

    const products = await searchProducts({ pageSize, page, filters, order });

    if (products.data) {
      return res.json({ products }).status(200);
    }

    return res.json({ products: null }).status(404);
  };
  return getProducts;
};

export default curryGetProducts;
