const User = require("../models/User");
const Goal = require("../models/Goal");
const Workout = require("../models/Workout");
const Appointment = require("../models/Appointment");
const Message = require("../models/Message");
const Payment = require("../models/Payment");
const Feedback = require("../models/Feedback");

/* PROFILE */
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  try {
    const data = {};

    // ✅ Only allow valid values
    if (req.body.name) data.name = req.body.name;

    if (req.body.age !== undefined) {
      const age = Number(req.body.age);
      if (!isNaN(age)) data.age = age;
    }

    if (req.body.height !== undefined) {
      const height = Number(req.body.height);
      if (!isNaN(height)) data.height = height;
    }

    if (req.body.weight !== undefined) {
      const weight = Number(req.body.weight);
      if (!isNaN(weight)) data.weight = weight;
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      data,
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error("PROFILE UPDATE ERROR:", err);
    res.status(400).json({
      message: "Invalid profile data",
    });
  }
};

/* GOALS */
exports.addGoal = async (req, res) => {
  const goal = await Goal.create({ userId: req.user.id, goal: req.body.goal });
  res.json(goal);
};

exports.getGoals = async (req, res) => {
  const goals = await Goal.find({ userId: req.user.id });
  res.json(goals);
};

exports.updateGoal = async (req, res) => {
  const goal = await Goal.findByIdAndUpdate(
    req.params.id,
    { goal: req.body.goal },
    { new: true }
  );
  res.json(goal);
};

exports.deleteGoal = async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

/* WORKOUTS */
exports.addWorkout = async (req, res) => {
  const workout = await Workout.create({
    userId: req.user.id,
    workout: req.body.workout,
  });
  res.json(workout);
};

exports.getWorkouts = async (req, res) => {
  const workouts = await Workout.find({ userId: req.user.id });
  res.json(workouts);
};

exports.updateWorkout = async (req, res) => {
  const workout = await Workout.findByIdAndUpdate(
    req.params.id,
    { workout: req.body.workout },
    { new: true }
  );
  res.json(workout);
};

exports.deleteWorkout = async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

/* APPOINTMENTS */
exports.bookAppointment = async (req, res) => {
  const appt = await Appointment.create({
    userId: req.user.id,
    trainerId: req.body.trainerId,
    date: req.body.date,
  });
  res.json(appt);
};

exports.getAppointments = async (req, res) => {
  const appts = await Appointment.find({ userId: req.user.id });
  res.json(appts);
};

/* MESSAGES */
exports.sendMessage = async (req, res) => {
  const msg = await Message.create({
    senderId: req.user.id,
    receiverId: req.body.receiverId,
    message: req.body.message,
  });
  res.json(msg);
};

exports.getMessages = async (req, res) => {
  const msgs = await Message.find({
    $or: [{ senderId: req.user.id }, { receiverId: req.user.id }],
  });
  res.json(msgs);
};

/* PAYMENT */
exports.makePayment = async (req, res) => {
  const payment = await Payment.create({
    userId: req.user.id,
    amount: req.body.amount,
    status: "Success",
  });
  res.json(payment);
};

/* FEEDBACK */
exports.addFeedback = async (req, res) => {
  const fb = await Feedback.create({
    userId: req.user.id,
    trainerId: req.body.trainerId,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  res.json(fb);
};
