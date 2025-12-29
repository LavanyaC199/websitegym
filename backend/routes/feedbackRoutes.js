const express = require("express");
const auth = require("../middleware/authMiddleware");
const Feedback = require("../models/Feedback");

const router = express.Router();

/* ================= USER CREATES FEEDBACK ================= */
router.post("/", auth("user"), async (req, res) => {
  const feedback = await Feedback.create({
    trainerId: req.body.trainerId,
    userId: req.user.id,
    rating: req.body.rating,
    comment: req.body.comment,
  });

  res.json(feedback);
});

/* ================= TRAINER VIEWS FEEDBACK ================= */
router.get("/trainer", auth("trainer"), async (req, res) => {
  const feedback = await Feedback.find({
    trainerId: req.user.id,
  }).sort({ createdAt: -1 });

  res.json(feedback);
});

module.exports = router;
