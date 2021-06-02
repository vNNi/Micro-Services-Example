const curryGetProduct = ({ searchProduct }) => {
  const getProducts = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await searchProduct(id);

      if (product?.length) {
        return res.json({ product }).status(200);
      } else {
      return res.json({ product: null }).status(404);

      }
    } catch (error) {
      return res.json({ product: null, error }).status(500);

    }
  };
  return getProducts;
};

export default curryGetProduct;
