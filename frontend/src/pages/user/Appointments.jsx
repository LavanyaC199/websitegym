import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [trainerId, setTrainerId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    api
      .get("/user/appointments")
      .then((res) =>
        setAppointments(Array.isArray(res.data) ? res.data : [])
      )
      .catch(() => setAppointments([]));
  }, []);

  const book = async () => {
    if (!trainerId || !date) return;

    const res = await api.post("/user/appointments", {
      trainerId,
      date,
    });

    setAppointments((prev) => [...prev, res.data]);
    setTrainerId("");
    setDate("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')",
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
          📅 Book Appointment
        </h2>

        <input
          type="text"
          value={trainerId}
          placeholder="Trainer ID"
          onChange={(e) => setTrainerId(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 14px",
            marginBottom: "14px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "15px",
          }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 14px",
            marginBottom: "16px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "15px",
          }}
        />

        <button
          onClick={book}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "22px",
            borderRadius: "10px",
            border: "none",
            background:
              "linear-gradient(135deg, #22c55e, #15803d)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Book Appointment
        </button>

        {appointments.length === 0 && (
          <p
            style={{
              textAlign: "center",
              opacity: 0.8,
              fontSize: "14px",
            }}
          >
            No appointments booked yet
          </p>
        )}

        {appointments.map((a) => (
          <div
            key={a._id}
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "10px 12px",
              borderRadius: "8px",
              marginBottom: "10px",
              fontSize: "14px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{new Date(a.date).toLocaleDateString()}</span>
            <span style={{ opacity: 0.85 }}>
              {a.status || "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
