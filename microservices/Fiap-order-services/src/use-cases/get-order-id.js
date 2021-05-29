const curryGetOrderById = ({ repository } = {}) => {
  const createOrder = async id => {
    return repository.getOrderById(id);
  };

  return createOrder;
};

export default curryGetOrderById;
