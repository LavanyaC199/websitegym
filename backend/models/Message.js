const mongoose = require("mongoose");
module.exports = mongoose.model("Message",
  new mongoose.Schema({
    senderId: mongoose.Schema.Types.ObjectId,
    receiverId: String,
    message: String
  })
);
