import { useEffect, useState } from "react";
import api from "../services/api";

export default function TrainerFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    const res = await api.get("/trainer/feedback"); // ✅ FIXED
    setFeedbacks(res.data);

    if (res.data.length > 0) {
      const avg =
        res.data.reduce((sum, f) => sum + f.rating, 0) /
        res.data.length;
      setAvgRating(avg.toFixed(1));
    }
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
      {/* FEEDBACK CARD */}
      <div
        className="trainer-card"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h3>⭐ Client Feedback</h3>

        {/* Average Rating */}
        <div className="rating-summary">
          <strong>Average Rating:</strong>{" "}
          <span className="rating">{avgRating} / 5</span>
        </div>

        {/* Feedback List */}
        {feedbacks.length === 0 && (
          <p className="muted">No feedback yet</p>
        )}

        {feedbacks.map((f) => (
          <div key={f._id} className="feedback-item">
            <div className="stars">
              {"⭐".repeat(f.rating)}
            </div>
            <p className="comment">"{f.comment}"</p>
            <span className="date">
              {new Date(f.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
