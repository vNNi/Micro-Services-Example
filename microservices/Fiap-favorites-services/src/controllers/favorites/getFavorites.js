const curryGetFavoritesController = ({ getFavorites }) => {
  const getFavoritesController = async (req, res) => {
    const { userId } = req.params;

    const favorites = await getFavorites(userId);

    if (favorites.length) {
      res.status(200).json({ favorites });
    } else {
      res.status(404).json({ favorites: null });
    }
  };
  return getFavoritesController;
};

export default curryGetFavoritesController;
