import "../styles/main.css";

export default function UserDashboard() {
  return (
    <div className="section fade">
      <h1>Member Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: 20,
        marginTop: 30
      }}>
        <div style={{ background: "#111", padding: 20, borderRadius: 8 }}>
          Workouts Completed
          <h2>42</h2>
        </div>
        <div style={{ background: "#111", padding: 20, borderRadius: 8 }}>
          Calories Burned
          <h2>18,500</h2>
        </div>
        <div style={{ background: "#111", padding: 20, borderRadius: 8 }}>
          Membership Status
          <h2>Active</h2>
        </div>
      </div>
    </div>
  );
}
