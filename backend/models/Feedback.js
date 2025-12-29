const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    // 👤 User who gave feedback
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🧑‍🏫 Trainer receiving feedback
    trainerId: {
      // supports both ObjectId & String (from both schemas)
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    // ⭐ Rating
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    // 💬 Comment
    comment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // safely replaces manual createdAt
  }
);

/* ✅ SAFE EXPORT (prevents overwrite errors) */
module.exports =
  mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema);
