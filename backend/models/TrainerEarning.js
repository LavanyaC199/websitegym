const mongoose = require("mongoose");

const trainerEarningSchema = new mongoose.Schema(
  {
    trainerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    month: {
      type: String,
      required: true,
      trim: true,
      index: true, // faster monthly queries
    },

    source: {
      type: String,
      enum: ["membership", "program", "commission"],
      default: "membership",
    },
  },
  { timestamps: true }
);

/* ✅ SAFE EXPORT (prevents OverwriteModelError) */
module.exports =
  mongoose.models.TrainerEarning ||
  mongoose.model("TrainerEarning", trainerEarningSchema);
