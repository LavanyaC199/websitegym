// import { useEffect, useState } from "react";
// import api from "../../services/api";

// export default function Goals() {
//   const [goals, setGoals] = useState([]);
//   const [goal, setGoal] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const fetchGoals = async () => {
//     const res = await api.get("/user/goals");
//     setGoals(Array.isArray(res.data) ? res.data : []);
//   };

//   const addGoal = async () => {
//     if (!goal.trim()) return;
//     const res = await api.post("/user/goals", { goal });
//     setGoals([...goals, res.data]);
//     setGoal("");
//   };

//   const deleteGoal = async (id) => {
//     await api.delete(`/user/goals/${id}`);
//     setGoals(goals.filter(g => g._id !== id));
//   };

//   const startEdit = (g) => {
//     setEditId(g._id);
//     setEditText(g.goal);
//   };

//   const updateGoal = async (id) => {
//     const res = await api.put(`/user/goals/${id}`, {
//       goal: editText,
//     });

//     setGoals(goals.map(g => g._id === id ? res.data : g));
//     setEditId(null);
//     setEditText("");
//   };

//   return (
//     <div>
//       <h2>🎯 My Fitness Goals</h2>

//       {/* ADD GOAL */}
//       <input
//         value={goal}
//         onChange={e => setGoal(e.target.value)}
//         placeholder="New goal"
//       />
//       <button  className="btn"onClick={addGoal}>Add</button>

//       <hr />

//       {/* VIEW + EDIT GOALS */}
//       {goals.map(g => (
//         <div key={g._id} style={{ marginBottom: 10 }}>
//           {editId === g._id ? (
//             <>
//               <input
//                 value={editText}
//                 onChange={e => setEditText(e.target.value)}
//               />
//               <button className="btn"onClick={() => updateGoal(g._id)}>Save</button>
//               <button className="btn" onClick={() => setEditId(null)}>Cancel</button>
//             </>
//           ) : (
//             <>
//               <span>{g.goal}</span>
//               <button  className="btn" onClick={() => startEdit(g)}>✏️ Edit</button>
//               <button className="btn" onClick={() => deleteGoal(g._id)}>❌</button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    const res = await api.get("/user/goals");
    setGoals(Array.isArray(res.data) ? res.data : []);
  };

  const addGoal = async () => {
    if (!goal.trim()) return;
    const res = await api.post("/user/goals", { goal });
    setGoals([...goals, res.data]);
    setGoal("");
  };

  const deleteGoal = async (id) => {
    await api.delete(`/user/goals/${id}`);
    setGoals(goals.filter(g => g._id !== id));
  };

  const startEdit = (g) => {
    setEditId(g._id);
    setEditText(g.goal);
  };

  const updateGoal = async (id) => {
    const res = await api.put(`/user/goals/${id}`, {
      goal: editText,
    });
    setGoals(goals.map(g => g._id === id ? res.data : g));
    setEditId(null);
    setEditText("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          padding: "30px",
          borderRadius: "14px",
          width: "100%",
          maxWidth: "520px",
          color: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          🎯 My Fitness Goals
        </h2>

        {/* ADD GOAL */}
        <input
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="New goal"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "none",
          }}
        />

        <button
          className="btn"
          onClick={addGoal}
          style={{ width: "100%", marginBottom: "15px" }}
        >
          Add
        </button>

        <hr />

        {/* VIEW + EDIT GOALS */}
        {goals.map((g) => (
          <div
            key={g._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
              gap: 8,
            }}
          >
            {editId === g._id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "8px",
                    borderRadius: "6px",
                    border: "none",
                  }}
                />
                <button className="btn" onClick={() => updateGoal(g._id)}>
                  Save
                </button>
                <button className="btn" onClick={() => setEditId(null)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{g.goal}</span>
                <button className="btn" onClick={() => startEdit(g)}>
                  ✏️
                </button>
                <button className="btn" onClick={() => deleteGoal(g._id)}>
                  ❌
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
