const curryCreateFavorite = ({ makeFavor }) => {
  const createFavorite = async (req, res) => {
    try {
      const { productId } = req.params;
      const { userId } = req.body;

      const favoriteId = makeFavor({ productId, userId });

      if (favoriteId) {
        res.status(201).json({ success: true, userId });
      } else {
        res.send(404).json({ favoriteId: null });
      }
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };

  return createFavorite;
};

export default curryCreateFavorite;
