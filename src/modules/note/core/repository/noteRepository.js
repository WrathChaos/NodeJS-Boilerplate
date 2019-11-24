import { Note } from "../../models/note.model";

const NoteRepository = {
  insert: async req => {
    let note = new Note(req.body);
    await note.save();
    return note;
  },

  getAll: async () => {
    return await Note.find({});
  },

  getOne: async req => {
    return await Note.findById(req.params.id);
  },

  update: async req => {
    return await Note.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
  },
  delete: async req => {
    return await Note.findOneAndRemove({ _id: req.params.id });
  }
};

module.exports = NoteRepository;
