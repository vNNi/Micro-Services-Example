const productRepository = ({ db } = {}) => {
  const searchById = async id => db("product").where("id", id);
  const productRepo = async ({ order = [], filters = {}, pageSize, page }) => {
    const { category, term, sort } = filters;
    const [key = "created_at", value = "asc"] = order;

    return db("product")
      .where("product.category", "like", `%${category || ""}%`)
      .where("product.title", "like", `%${term || ""}%`)
      .where("product.sort", "like", `%${sort || ""}%`)
      .orderBy(key, value)
      .paginate({ perPage: pageSize, currentPage: page });
  };

  const productVisited = async ({ productId }) => {
    return db("product").where("id", productId).increment({ visited: 1 });
  };

  const productOrdered = async ({ productId }) => {
    return db("product")
      .where("id", productId)
      .update({
        stock_count: db.raw("stock_count - 1"),
        purchased: db.raw("purchased + 1"),
      });
  };

  const productReported = async ({ productId }) => {
    return db("product").where("id", productId).increment({
      reports_open: 1,
    });
  };

  return Object.freeze({
    searchById,
    productRepo,
    productVisited,
    productOrdered,
    productReported,
  });
};

export default productRepository;
