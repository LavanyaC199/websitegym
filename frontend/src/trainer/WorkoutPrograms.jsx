import { useEffect, useState } from "react";
import api from "../services/api";

export default function WorkoutPrograms() {
  const [programs, setPrograms] = useState([]);
  const [form, setForm] = useState({
    clientName: "",
    title: "",
    exercises: "",
    dietPlan: "",
  });

  useEffect(() => {
    api.get("/trainer/programs").then(res => setPrograms(res.data));
  }, []);

  const create = async () => {
    const res = await api.post("/trainer/program", form);
    setPrograms([...programs, res.data]);
  };

  const remove = async (id) => {
    await api.delete(`/trainer/program/${id}`);
    setPrograms(programs.filter(p => p._id !== id));
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
      {/* PROGRAM CARD */}
      <div className="trainer-card" style={{ maxWidth: "600px", width: "100%" }}>
        <h3>🏋️ Workout Programs</h3>

        <input
          placeholder="Client Name"
          onChange={e =>
            setForm({ ...form, clientName: e.target.value })
          }
        />
        <input
          placeholder="Title"
          onChange={e =>
            setForm({ ...form, title: e.target.value })
          }
        />
        <input
          placeholder="Exercises"
          onChange={e =>
            setForm({ ...form, exercises: e.target.value })
          }
        />
        <input
          placeholder="Diet Plan"
          onChange={e =>
            setForm({ ...form, dietPlan: e.target.value })
          }
        />

        <button className="btn btn-create" onClick={create}>
          Create Program
        </button>

        {programs.map(p => (
          <div
            key={p._id}
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <b>{p.title}</b> ({p.clientName})
            <button
              className="btn btn-delete"
              onClick={() => remove(p._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
