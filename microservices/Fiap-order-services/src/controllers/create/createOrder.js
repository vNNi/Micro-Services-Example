const curryCreateOrder = ({ createOrder } = {}) => {
  const createOrderFunc = async (req, res) => {
    try {
      const { product } = req.body;
      const created = await createOrder({ product });
      if (created?.length) {
        res.status(201).json({ product });
      } else {
        res.status(202).json({ product: null });
      }
    } catch (error) {
      res.status(500).json({ product: null, error });
    }

  };
  return createOrderFunc;
};

export default curryCreateOrder;
