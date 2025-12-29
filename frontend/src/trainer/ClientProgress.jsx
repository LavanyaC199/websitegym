import api from "../services/api";

export default function ClientProgress() {
  const submit = async () => {
    await api.post("/trainer/progress", {
      clientName: "Client A",
      weight: 70,
      notes: "Good improvement",
    });
    alert("Progress saved ✅");
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
      {/* PROGRESS CARD */}
      <div className="trainer-card" style={{ maxWidth: "600px", width: "100%" }}>
        <h3>📊 Client Progress</h3>

        <p style={{ opacity: 0.85, marginBottom: "12px" }}>
          Client can view the progress here
        </p>

        <button className="btn btn-update" onClick={submit}>
          Update Progress
        </button>
      </div>
    </div>
  );
}
