import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState("");

  useEffect(() => {
    api
      .get("/user/workouts")
      .then((res) =>
        setWorkouts(Array.isArray(res.data) ? res.data : [])
      )
      .catch(() => setWorkouts([]));
  }, []);

  const addWorkout = async () => {
    if (!workout.trim()) return;

    const res = await api.post("/user/workouts", { workout });
    setWorkouts((prev) => [...prev, res.data]);
    setWorkout("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww')",
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
          🏋️ Workout Logs
        </h2>

        <input
          type="text"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          placeholder="Workout name"
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

        <button
          onClick={addWorkout}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "22px",
            borderRadius: "10px",
            border: "none",
            background:
              "linear-gradient(135deg, #ef4444, #b91c1c)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Add Workout
        </button>

        {workouts.length === 0 && (
          <p
            style={{
              textAlign: "center",
              opacity: 0.8,
              fontSize: "14px",
            }}
          >
            No workouts added yet
          </p>
        )}

        {workouts.map((w) => (
          <div
            key={w._id}
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "10px 12px",
              borderRadius: "8px",
              marginBottom: "10px",
              fontSize: "14px",
              letterSpacing: "0.5px",
            }}
          >
            {w.workout}
          </div>
        ))}
      </div>
    </div>
  );
}
