import mongoose from "mongoose";
const noteSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true
  },
  isChecked: {
    type: Boolean,
    required: true,
    default: false
  },
  priority: {
    type: String,
    default: "low"
  },
  date: {
    type: Date
  }
});

const Note = mongoose.model("Note", noteSchema);

exports.Note = Note;
