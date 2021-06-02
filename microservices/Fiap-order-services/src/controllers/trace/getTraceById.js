const curryGetTraceById = ({ getOrderById } = {}) => {
  const getTraceByProductId = async (req, res) => {
    try {
      const { id } = req.params;

      const trace = await getOrderById(id);
      if(trace?.length){
       res.status(200).json({ orders: trace });
      } else {
        res.status(404).json({ orders: [], error: 'NOT FOUND TRACE' })
      }
    } catch (error) {
      res.status(500).json({ orders: [], error })
    }

  };

  return getTraceByProductId;
};

export default curryGetTraceById;
