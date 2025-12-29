import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Public pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Trainers from "./pages/Trainers";
import Gallery from "./pages/Gallery";

/* User pages */
import Dashboard from "./pages/user/Dashboard";
import Profile1 from "./pages/user/Profile1";
import Goals from "./pages/user/Goals";
import Workouts from "./pages/user/Workouts";
import Appointments from "./pages/user/Appointments";
import Messages from "./pages/user/Messages";
import Payments from "./pages/user/Payments";
import Feedback from "./pages/user/Feedback";

/* Trainer & Admin */
import TrainerDashboard from "./trainer/TrainerDashboard";
import AdminDashboard from "./admin/AdminDashboard";

/* Auth */
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* ================= USER ================= */}
        <Route element={<ProtectedRoute role="user" />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/profile" element={<Profile1 />} />
          <Route path="/user/goals" element={<Goals />} />
          <Route path="/user/workouts" element={<Workouts />} />
          <Route path="/user/appointments" element={<Appointments />} />
          <Route path="/user/messages" element={<Messages />} />
          <Route path="/user/payments" element={<Payments />} />
          <Route path="/user/feedback" element={<Feedback />} />

          {/* redirect /user → /user/dashboard */}
          <Route path="/user" element={<Navigate to="/user/dashboard" replace />} />
        </Route>

        {/* ================= TRAINER ================= */}
        <Route element={<ProtectedRoute role="trainer" />}>
          <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
          <Route
            path="/trainer"
            element={<Navigate to="/trainer/dashboard" replace />}
          />
        </Route>

        {/* ================= ADMIN ================= */}
        <Route element={<ProtectedRoute role="admin" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Route>

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
