import Joi from "joi";
// JOI Validation
module.exports = function() {
  Joi.objectId = require("joi-objectid")(Joi);
};
