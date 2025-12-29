const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    // 👤 Profile fields (from first schema)
    age: {
      type: Number,
      min: 1,
    },

    height: {
      type: Number, // cm
    },

    weight: {
      type: Number, // kg
    },

    // 🔐 Role handling (from second schema)
    role: {
      type: String,
      enum: ["user", "trainer", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, // createdAt & updatedAt (best practice)
  }
);

module.exports = mongoose.model("User", UserSchema);
