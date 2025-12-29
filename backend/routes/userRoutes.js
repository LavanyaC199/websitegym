const express = require("express");
const auth = require("../middleware/authMiddleware");
const c = require("../controllers/userController");

const router = express.Router();

/* PROFILE */
router.get("/profile", auth("user"), c.getProfile);
router.put("/profile", auth("user"), c.updateProfile);

/* GOALS */
router.post("/goals", auth("user"), c.addGoal);
router.get("/goals", auth("user"), c.getGoals);
router.put("/goals/:id", auth("user"), c.updateGoal);
router.delete("/goals/:id", auth("user"), c.deleteGoal);

/* WORKOUTS */
router.post("/workouts", auth("user"), c.addWorkout);
router.get("/workouts", auth("user"), c.getWorkouts);
router.put("/workouts/:id", auth("user"), c.updateWorkout);
router.delete("/workouts/:id", auth("user"), c.deleteWorkout);

/* APPOINTMENTS */
router.post("/appointments", auth("user"), c.bookAppointment);
router.get("/appointments", auth("user"), c.getAppointments);

/* MESSAGES */
router.post("/messages", auth("user"), c.sendMessage);
router.get("/messages", auth("user"), c.getMessages);

/* PAYMENT */
router.post("/payment", auth("user"), c.makePayment);

/* FEEDBACK */
router.post("/feedback", auth("user"), c.addFeedback);

module.exports = router;
