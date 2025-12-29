const express = require("express");
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");
const Trainer = require("../models/Trainer");
const Payment = require("../models/Payment");
const TrainerEarning = require("../models/TrainerEarning");
const router = express.Router();


// ================= TRAINERS (ADMIN) =================
router.get("/trainers", auth("admin"), async (req, res) => {
  try {
    const trainers = await User.find({ role: "trainer" }).select("-password");
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch trainers" });
  }
});



// ➕ UPDATE TRAINER (PUT THIS HERE 👇)
router.put("/trainer/:id", auth("admin"), async (req, res) => {
  const trainer = await Trainer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(trainer);
});

// ❌ Delete trainer
router.delete("/trainer/:id", auth("admin"), async (req, res) => {
  await Trainer.findByIdAndDelete(req.params.id);
  res.json({ message: "Trainer deleted successfully" });
});

/* ================= DASHBOARD ================= */

router.get("/dashboard", auth("admin"), (req, res) => {
  res.json({ message: "Admin Dashboard Data" });
});

/* ================= USERS ================= */

// Get all users
router.get("/users", auth("admin"), async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Add new user
router.post("/user", auth("admin"), async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: "Failed to create user" });
  }
});

// Update user
router.put("/user/:id", auth("admin"), async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
      },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: "Failed to update user" });
  }
});

// Delete user
router.delete("/user/:id", auth("admin"), async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete user" });
  }
});

/* ================= TRAINERS ================= */

router.get("/trainers", auth("admin"), async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch trainers" });
  }
});

router.post("/trainer", auth("admin"), async (req, res) => {
  try {
    const trainer = await Trainer.create(req.body);
    res.status(201).json(trainer);
  } catch (err) {
    res.status(400).json({ message: "Failed to create trainer" });
  }
});

router.delete("/trainer/:id", auth("admin"), async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.json({ message: "Trainer deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete trainer" });
  }
});
// Admin adds payment to trainer
router.post("/trainer-earning", auth("admin"), async (req, res) => {
  const earning = await TrainerEarning.create(req.body);
  res.json(earning);
});

/* ================= STATS (✅ SINGLE SOURCE OF TRUTH) ================= */

router.get("/stats", auth("admin"), async (req, res) => {
  try {
    const users = await User.countDocuments();
    const trainers = await Trainer.countDocuments();

    const payments = await Payment.find();

    const monthlyMap = {
      Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0,
      Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0,
    };

    payments.forEach((p) => {
      if (!p.createdAt) return;

      const month = new Date(p.createdAt).toLocaleString("default", {
        month: "short",
      });

      monthlyMap[month] += Number(p.amount || 0);
    });

    const monthlyPayments = Object.keys(monthlyMap).map((month) => ({
      month,
      amount: monthlyMap[month],
    }));

    res.json({
      users,
      trainers,
      payments: monthlyPayments,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to load admin stats" });
  }
});

module.exports = router;
