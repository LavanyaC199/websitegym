import { useState } from "react";
import api from "../../services/api";

export default function Feedback() {
  const [trainerId, setTrainerId] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const submit = async () => {
    if (!trainerId || !rating || !comment) {
      alert("Please fill all fields");
      return;
    }

    await api.post("/user/feedback", {
      trainerId,
      rating,
      comment,
    });

    alert("Feedback Submitted ⭐");
    setTrainerId("");
    setRating("");
    setComment("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      {/* CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "18px",
          padding: "28px",
          color: "#ffffff",
          boxShadow: "0 15px 45px rgba(0,0,0,0.6)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "22px",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          ⭐ Trainer Feedback
        </h2>

        <input
          type="text"
          placeholder="Trainer ID"
          value={trainerId}
          onChange={(e) => setTrainerId(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "14px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "15px",
          }}
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "14px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          <option value="">Select Rating</option>
          <option value="1">⭐ 1 - Poor</option>
          <option value="2">⭐⭐ 2 - Fair</option>
          <option value="3">⭐⭐⭐ 3 - Good</option>
          <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
          <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
        </select>

        <textarea
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "15px",
            resize: "none",
          }}
        />

        <button
          onClick={submit}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background:
              "linear-gradient(135deg, #facc15, #ca8a04)",
            color: "#000",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
