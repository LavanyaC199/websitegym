const express = require("express");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const TrainerVerification = require("../models/TrainerVerification");
const WorkoutProgram = require("../models/WorkoutProgram");
const Progress = require("../models/Progress");
const TrainerEarning = require("../models/TrainerEarning");
const Feedback = require("../models/Feedback");
const Chat = require("../models/Chat");
const User = require("../models/User");

const router = express.Router();




/* ================= TRAINER CHAT ================= */

// GET all messages for trainer
router.get("/chat", auth("trainer"), async (req, res) => {
  try {
    const messages = await Chat.find({
      senderId: req.user.id,
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.error("CHAT FETCH ERROR:", err);
    res.status(500).json({ message: "Failed to load chat" });
  }
});

// SEND message from trainer
router.post("/chat", auth("trainer"), async (req, res) => {
  try {
    if (!req.body.message) {
      return res
        .status(400)
        .json({ message: "Message is required" });
    }

    const chat = await Chat.create({
      senderId: req.user.id,
      message: req.body.message,
    });

    res.status(201).json(chat);
  } catch (err) {
    console.error("CHAT SEND ERROR:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
});


/* ================= TRAINER PROFILE ================= */

// GET trainer profile
router.get("/profile", auth("trainer"), async (req, res) => {
  try {
    const trainer = await User.findById(req.user.id).select("-password");

    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    res.json(trainer);
  } catch (err) {
    console.error("GET PROFILE ERROR:", err);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
});

// UPDATE trainer profile
router.put("/profile", auth("trainer"), async (req, res) => {
  try {
    const allowedFields = {
      name: req.body.name,
      phone: req.body.phone,
      specialization: req.body.specialization,
    };

    const updatedTrainer = await User.findByIdAndUpdate(
      req.user.id,
      allowedFields,
      { new: true }
    ).select("-password");

    res.json(updatedTrainer);
  } catch (err) {
    console.error("UPDATE PROFILE ERROR:", err);
    res.status(500).json({ message: "Profile update failed" });
  }
});

/* ================= VERIFICATION UPLOAD ================= */
router.post(
  "/verification",
  auth("trainer"),
  upload.fields([
    { name: "certificate", maxCount: 1 },
    { name: "idProof", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      if (!req.files?.certificate || !req.files?.idProof) {
        return res.status(400).json({
          message: "Certificate and ID Proof are required",
        });
      }

      // prevent duplicate verification
      const exists = await TrainerVerification.findOne({
        trainerId: req.user.id,
      });

      if (exists) {
        return res
          .status(400)
          .json({ message: "Verification already submitted" });
      }

      const verification = await TrainerVerification.create({
        trainerId: req.user.id,
        certificate: req.files.certificate[0].filename,
        idProof: req.files.idProof[0].filename,
      });

      res.status(201).json(verification);
    } catch (err) {
      console.error("Verification error:", err);
      res.status(500).json({ message: "Verification upload failed" });
    }
  }
);

/* ================= WORKOUT PROGRAMS ================= */

// CREATE
router.post("/program", auth("trainer"), async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Program title required" });
    }

    const program = await WorkoutProgram.create({
      trainerId: req.user.id,
      ...req.body,
    });

    res.status(201).json(program);
  } catch (err) {
    res.status(500).json({ message: "Program creation failed" });
  }
});

// READ
router.get("/programs", auth("trainer"), async (req, res) => {
  try {
    const programs = await WorkoutProgram.find({
      trainerId: req.user.id,
    });
    res.json(programs);
  } catch {
    res.status(500).json({ message: "Failed to fetch programs" });
  }
});

// UPDATE
router.put("/program/:id", auth("trainer"), async (req, res) => {
  try {
    const program = await WorkoutProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.json(program);
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
});

// DELETE
router.delete("/program/:id", auth("trainer"), async (req, res) => {
  try {
    await WorkoutProgram.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
});

/* ================= CLIENT PROGRESS ================= */
router.post("/progress", auth("trainer"), async (req, res) => {
  try {
    if (!req.body.userId || !req.body.note) {
      return res
        .status(400)
        .json({ message: "User ID and progress note required" });
    }

    const progress = await Progress.create({
      trainerId: req.user.id,
      ...req.body,
    });

    res.status(201).json(progress);
  } catch {
    res.status(500).json({ message: "Progress update failed" });
  }
});

/* ================= CHAT ================= */

// READ
router.get("/chat", auth("trainer"), async (req, res) => {
  try {
    const chats = await Chat.find({
      $or: [{ trainerId: req.user.id }, { receiverId: req.user.id }],
    }).sort({ createdAt: 1 });

    res.json(chats);
  } catch {
    res.status(500).json({ message: "Failed to load chat" });
  }
});

// CREATE
router.post("/chat", auth("trainer"), async (req, res) => {
  try {
    if (!req.body.message || !req.body.receiverId) {
      return res
        .status(400)
        .json({ message: "Receiver and message required" });
    }

    const chat = await Chat.create({
      senderId: req.user.id,
      receiverId: req.body.receiverId,
      message: req.body.message,
    });

    res.status(201).json(chat);
  } catch {
    res.status(500).json({ message: "Message send failed" });
  }
});

/* ================= TRAINER EARNINGS ================= */
router.get("/earnings", auth("trainer"), async (req, res) => {
  try {
    const earnings = await TrainerEarning.find({
      trainerId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(earnings);
  } catch {
    res.status(500).json({ message: "Failed to fetch earnings" });
  }
});

/* ================= FEEDBACK ================= */
router.get("/feedback", auth("trainer"), async (req, res) => {
  try {
    const feedback = await Feedback.find({
      trainerId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(feedback);
  } catch {
    res.status(500).json({ message: "Failed to fetch feedback" });
  }
});

module.exports = router;
