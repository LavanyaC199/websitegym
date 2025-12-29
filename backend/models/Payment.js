const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    // 👤 User reference (from both schemas)
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // (kept for backward compatibility if already used)
    user: {
      type: String,
    },

    // 💰 Payment amount
    amount: {
      type: Number,
      required: true,
    },

    // 📅 Membership month (from first schema)
    month: {
      type: String,
    },

    // ✅ Payment status (from second schema)
    status: {
      type: String,
      enum: ["Success", "Pending", "Failed"],
      default: "Success",
    },
  },
  {
    timestamps: true, // replaces manual createdAt safely
  }
);

module.exports = mongoose.model("Payment", PaymentSchema);
