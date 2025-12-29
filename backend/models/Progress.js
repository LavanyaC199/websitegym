const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  trainerId: mongoose.Schema.Types.ObjectId,
  clientName: String,
  weight: Number,
  notes: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Progress", schema);
