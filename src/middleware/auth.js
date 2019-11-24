import jwt from "jsonwebtoken";
import config from "config";
import { _AUTH_TOKEN, INVALID_TOKEN, JWT_PRIVATE_KEY } from "../consts";

// Auth Middleware
module.exports = function(req, res, next) {
  const token = req.header(X_AUTH_TOKEN);
  if (!token) return res.status(401).send(ACCESS_DENIED_TOKEN);
  try {
    const decoded = jwt.verify(token, config.get(JWT_PRIVATE_KEY));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send(INVALID_TOKEN);
  }
};
