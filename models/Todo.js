const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  note: {
    type: String,
    lowercase: false
  },
  status: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true
  }
})

module.exports = mongoose.model("Project", ProjectSchema);