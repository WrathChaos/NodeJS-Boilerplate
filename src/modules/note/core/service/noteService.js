import { Note } from "../../models/note.model";
import noteRepository from "../repository/noteRepository";

const NoteService = {
  insert: async req => {
    return await noteRepository.insert(req);
  },
  getAll: async () => {
    return await noteRepository.getAll();
  },
  getOne: async req => {
    return await noteRepository.getOne(req);
  },
  update: async (req, res) => {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(400).send("Non Exist");
    return await noteRepository.update(req);
  },
  delete: async (req, res) => {
    return await noteRepository.delete(req);
  }
};

module.exports = NoteService;
