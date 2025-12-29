const mongoose = require("mongoose");
module.exports = mongoose.model("Appointment",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    trainerId: String,
    date: String,
    status: { type: String, default: "Booked" }
  })
);
