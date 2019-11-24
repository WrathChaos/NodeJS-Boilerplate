import { _AUTH_TOKEN } from "../consts";

module.exports = function(req, res, next) {
  // 401 Unauthorized
  // 403 Forbidden
  if (!req.user.isAdmin) return res.status(403).send(consts.ACCESS_DENIED);
  next();
};
