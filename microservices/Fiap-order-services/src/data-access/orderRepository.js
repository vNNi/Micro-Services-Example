const orderRepository = ({ db } = {}) => {
  const createOrder = async product => {
    return db("order").insert(product);
  };

  const getOrderById = async id => {
    return db("order").where("id", id);
  };

  return Object.freeze({ createOrder, getOrderById });
};

export default orderRepository;
