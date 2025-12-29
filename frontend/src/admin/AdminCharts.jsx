// src/admin/AdminCharts.jsx
import { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import api from "../services/api";
import "chart.js/auto";

export default function AdminCharts() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api
      .get("/admin/stats")
      .then((res) => setStats(res.data))
      .catch(() => {
        setStats({
          users: 0,
          trainers: 0,
          payments: [],
        });
      });
  }, []);

  if (!stats) return <p className="loading-text">Loading charts...</p>;

  const payments = Array.isArray(stats.payments) ? stats.payments : [];

  return (
    <div className="chart-grid">
      {/* 👥 USERS & TRAINERS */}
      <div className="chart-card">
        <h3>👥 System Overview</h3>
        <Bar
          data={{
            labels: ["Users", "Trainers"],
            datasets: [
              {
                label: "Count",
                data: [stats.users, stats.trainers],
                backgroundColor: ["#38bdf8", "#22c55e"],
                borderRadius: 10,
              },
            ],
          }}
        />
      </div>

      {/* 💳 PAYMENTS (DOUGHNUT) */}
      <div className="chart-card">
        <h3>💳 Monthly Payments</h3>
        <Doughnut
          data={{
            labels: payments.map((p) => p.month),
            datasets: [
              {
                data: payments.map((p) => p.amount),
                backgroundColor: [
                  "#facc15",
                  "#fb7185",
                  "#60a5fa",
                  "#4ade80",
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
