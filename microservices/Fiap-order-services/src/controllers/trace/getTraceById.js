// eslint-disable-next-line no-unused-vars
const curryGetTraceById = ({ getOrderById } = {}) => {
  const getTraceByProductId = async (req, res) => {
    const { id } = req.params;

    const trace = await getOrderById(id);

    res.status(200).json(trace);
  };

  return getTraceByProductId;
};

export default curryGetTraceById;
