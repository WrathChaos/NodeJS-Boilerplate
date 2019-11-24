import helmet from "helmet";
import compression from "compression";
// Use this middleware to configure production level
module.exports = function(app) {
  app.use(helmet());
  app.use(compression());
};
