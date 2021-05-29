const currySearchProduct = ({ db, Producer, parser }) => {
  const searchProduct = async id => {
    const repo = await db().searchById(id);
    const event = { productId: id };
    Producer.write(parser.toBuffer(event));

    return repo;
  };
  return searchProduct;
};

export default currySearchProduct;
