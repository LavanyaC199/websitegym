const mongoose = require("mongoose");
module.exports = mongoose.model("Workout",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    workout: String
  })
);
