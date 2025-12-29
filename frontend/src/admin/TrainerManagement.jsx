import { useEffect, useState } from "react";
import api from "../services/api";

export default function TrainerManagement() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    api.get("/admin/trainers")
      .then((res) => setTrainers(res.data))
      .catch(() => alert("Failed to load trainers"));
  }, []);

  return (
    <div className="admin-card">
      <h2 className="sparkle-title">🏋️ Trainer Details</h2>

      {trainers.length === 0 ? (
        <p className="empty-text">No trainers found</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined On</th>
            </tr>
          </thead>

          <tbody>
            {trainers.map((t) => (
              <tr key={t._id}>
                <td>{t.name}</td>
                <td>{t.email}</td>
                <td>
                  <span className="role-badge trainer">Trainer</span>
                </td>
                <td>{new Date(t.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
