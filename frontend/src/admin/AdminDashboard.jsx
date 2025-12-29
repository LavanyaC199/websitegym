// src/admin/AdminDashboard.jsx
import "../styles/adminDashboard.css";

import AdminCharts from "./AdminCharts";
import UserManagement from "./UserManagement";
import TrainerManagement from "./TrainerManagement";
import PaymentChart from "./PaymentChart";
export default function AdminDashboard() {
  return (
    <div className="admin-bg">
      <div className="overlay"></div>

      <div className="admin-container">
        {/* ✨ Title */}
        <h1 className="sparkle-title">⚡ Admin Dashboard</h1>

        {/* 📊 Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>👥 Users</h3>
            <p>124</p>
          </div>

          <div className="stat-card">
            <h3>🏋️ Trainers</h3>
            <p>18</p>
          </div>

          <div className="stat-card">
            <h3>💳 Payments</h3>
            <p>₹2,45,000</p>
          </div>
        </div>

        {/* 📈 Charts */}
        <div className="admin-section">
          <AdminCharts />
        </div>

        {/* 👥 Management */}
        <div className="admin-grid">
          <UserManagement />
          <TrainerManagement />
          <PaymentChart />
        </div>
      </div>
    </div>
  );
}
