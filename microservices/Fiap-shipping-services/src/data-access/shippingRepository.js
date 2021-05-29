const makeShippingRepository = ({ service } = {}) => {
  const getShipping = async ({ zipCode, product }) => {
    const response = await service.estimate({ zipCode, product });
    return response;
  };
  return Object.freeze({ getShipping });
};

export default makeShippingRepository;
