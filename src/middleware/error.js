import winston from "winston";
import { STH_FAILED } from "../consts";

// Winston Error Middleware
module.exports = function(err, req, res, next) {
  winston.error(err.message, err);
  // error
  // warn
  // info
  // verbose
  // debug
  // silly
  res.status(500).send(STH_FAILED);
};
