// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const connectDB = require("./config/db");
// const path = require("path");

// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use("/auth", require("./routes/authRoutes"));
// app.use("/user", require("./routes/userRoutes"));
// app.use("/trainer", require("./routes/trainerRoutes"));
// app.use("/admin", require("./routes/adminRoutes"));
// app.use("/feedback", require("./routes/feedbackRoutes"));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// app.get("/", (req, res) => {
//   res.send("🔥 Gym Backend Running");
// });

// app.listen(process.env.PORT, () =>
//   console.log(`🚀 Server running on port ${process.env.PORT}`)
// );


const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

/* ================= DATABASE ================= */
connectDB();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ROUTES ================= */
app.use("/auth", require("./routes/authRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/trainer", require("./routes/trainerRoutes"));
app.use("/admin", require("./routes/adminRoutes"));
app.use("/feedback", require("./routes/feedbackRoutes"));

/* ================= STATIC FILES ================= */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("🔥 Gym Backend Running");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
