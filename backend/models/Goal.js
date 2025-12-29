// models/Goal.js
const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    goal: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
exports.addGoal = async (req, res) => {
  try {
    const goal = await Goal.create({
      userId: req.user.id,
      goal: req.body.goal,
    });
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ message: "Failed to add goal" });
  }
};
exports.getGoals = async (req, res) => {
  const goals = await Goal.find({ userId: req.user.id });
  res.json(goals);
};
exports.deleteGoal = async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.json({ message: "Goal deleted" });
};
