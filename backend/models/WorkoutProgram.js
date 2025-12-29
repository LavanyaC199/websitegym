const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  trainerId: mongoose.Schema.Types.ObjectId,
  clientName: String,
  title: String,
  exercises: String,
  dietPlan: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("WorkoutProgram", schema);
