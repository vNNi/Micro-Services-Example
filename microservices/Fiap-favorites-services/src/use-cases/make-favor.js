const curryMakeFavor = ({ repository }) => {
  const makeFavor = async ({ productId, userId }) => {
    return repository.makeFavor({ productId, userId });
  };
  return makeFavor;
};

export default curryMakeFavor;
