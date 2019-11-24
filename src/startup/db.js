import config from "config";
import mongoose from "mongoose";
// Connection to the database from MONGO_URI environment
module.exports = function() {
  const db = process.env.MONGO_URI || config.get("db");
  console.log("DB: ", db);
  console.log("Mongo URI: ", db);
  var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
  };
  mongoose
    .connect(db, options)
    .then(() => console.log(`Connected to ${db}...`));
};
