import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "../../../swagger.json";
import routes from "../routes/index.js";

const app = express();

app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/healthCheck", (req, res) => {
  res.json({ hello: "world" }).status(200);
});

export default app;
