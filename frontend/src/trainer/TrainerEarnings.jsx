import { useEffect, useState } from "react";
import api from "../services/api";

export default function TrainerEarnings() {
  const [earnings, setEarnings] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadEarnings();
  }, []);

  const loadEarnings = async () => {
    const res = await api.get("/trainer/earnings");
    setEarnings(res.data);

    const sum = res.data.reduce((acc, e) => acc + e.amount, 0);
    setTotal(sum);
  };

  return (
    /* 🔥 CENTER WRAPPER */
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* EARNINGS CARD */}
      <div className="trainer-card" style={{ maxWidth: "600px", width: "100%" }}>
        <h3>💰 Trainer Earnings</h3>

        {/* Total */}
        <div className="earning-total">
          Total Earnings: <span>₹{total}</span>
        </div>

        {/* List */}
        {earnings.length === 0 && (
          <p className="muted">No earnings recorded</p>
        )}

        {earnings.map((e) => (
          <div key={e._id} className="earning-item">
            <span>{e.month}</span>
            <strong>₹{e.amount}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
