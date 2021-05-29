const curryGetEstimate = ({ repository }) => {
  const getEstimate = async ({ zipCode, product }) => {
    return repository.getShipping({ zipCode, product });
  };

  return getEstimate;
};

export default curryGetEstimate;
