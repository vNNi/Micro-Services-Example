const currySearchProduct = ({ db }) => {
  const searchProducts = async ({ pageSize = 30, page = 1, filters, order }) => {
    const repo = await db().productRepo({ pageSize, page, filters, order });
    return repo;
  };
  return searchProducts;
};

export default currySearchProduct;
