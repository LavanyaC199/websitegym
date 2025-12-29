// models/Trainer.js
const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  specialization: String,
  experience: Number,
  salary: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Trainer", trainerSchema);
