const makeFavoritesRepository = ({ db } = {}) => {
  const makeFavor = async ({ productId, userId }) => {
    const result = await db("favorite").insert({
      product_id: productId,
      user_id: userId,
    });
    return result;
  };

  const getFavorites = async userId => {
    const result = await db("favorite").where("user_id", userId);
    return result;
  };

  return Object.freeze({ makeFavor, getFavorites });
};

export default makeFavoritesRepository;
