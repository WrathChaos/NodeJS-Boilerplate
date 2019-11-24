import _ from "lodash";
import express from "express";
import noteService from "../service/noteService";

const router = express.Router();

// Get All note
router.get("/", async (req, res) => {
  const note = await noteService.getAll();
  res.send(note);
});

// Get One note by given ID
router.get("/:id", async (req, res) => {
  const note = await noteService.getOne(req);
  res.send(note);
});

// Create a new note
router.post("/", async (req, res) => {
  const note = await noteService.insert(req);
  res.send(note);
});

// Update the note by given ID
router.put("/:id", async (req, res) => {
  const note = await noteService.update(req, res);
  res.send(note);
});

// Delete the note by given ID
router.delete("/:id", async (req, res) => {
  const note = await noteService.delete(req, res);
  res.send(note);
});

module.exports = router;
