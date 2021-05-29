const curryGetFavorites = ({ repository }) => {
  const getFavorites = async userId => {
    return repository.getFavorites(userId);
  };

  return getFavorites;
};

export default curryGetFavorites;
