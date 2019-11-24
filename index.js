const express = require("express");
const app = express();
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// require("./startup/logging")();
require("./src/startup/routes")(app);
require("./src/startup/db")();
require("./src/startup/config")();
require("./src/startup/validation")();
require("./src/startup/prod")(app);

// app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
