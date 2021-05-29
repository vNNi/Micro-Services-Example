const curryCreateOrder = ({ createOrder } = {}) => {
  const createOrderFunc = async (req, res) => {
    const { product } = req.body;
    const created = await createOrder({ product });
    if (created?.length) {
      res.status(201).json({ product });
    } else {
      res.status(202).json({ product: null });
    }
  };
  return createOrderFunc;
};

export default curryCreateOrder;
