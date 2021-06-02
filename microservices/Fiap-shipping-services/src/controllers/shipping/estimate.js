const curryGetEstimate = ({ getEstimate }) => {
  const controller = async (req, res) => {
    try {
      const { zipCode } = req.params;
      const { product } = req.body;

      const [estimate] = await getEstimate({ zipCode, product });

      if (estimate.Erro === "0") {
        res.status(200).json({ estimate });
      } else {
        res.status(404).json({ estimate: null });
      }
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };

  return controller;
};

export default curryGetEstimate;
