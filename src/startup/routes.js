import cors from "cors";
import express from "express";
import error from "../middleware/error";
import noteRoute from "../routes/noteRoute";

module.exports = function(app) {
  app.use(cors());
  app.use(error);
  app.use(express.json());
  // Routes
  app.use("/api/v1/note", noteRoute);
};
