const curryCreateOrder = ({ repository, produceMessage } = {}) => {
  const createOrder = async ({ product }) => {
    const created = await repository.createOrder(product);
    if (created?.length) {
      const { product_id: productId } = product;
      produceMessage({ productId });
    }
    return created;
  };

  return createOrder;
};

export default curryCreateOrder;
