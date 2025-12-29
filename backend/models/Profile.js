const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  age: Number,
  height: Number,
  weight: Number,
});

module.exports = mongoose.model("Profile", profileSchema);
