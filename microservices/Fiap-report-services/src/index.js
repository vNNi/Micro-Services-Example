import config from "config";
import App from "./infrastructure/server/index.js";

const serverPort = config.get("server.PORT");

App.listen(serverPort, () => {
  console.log("server listen on port", serverPort);
});
