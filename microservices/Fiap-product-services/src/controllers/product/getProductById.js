const curryGetProduct = ({ searchProduct }) => {
  const getProducts = async (req, res) => {
    const { id } = req.params;
    const product = await searchProduct(id);

    if (product) {
      return res.json({ product }).status(200);
    }

    return res.json({ product: null }).status(404);
  };
  return getProducts;
};

export default curryGetProduct;
