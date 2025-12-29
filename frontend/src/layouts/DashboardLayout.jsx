import "../styles/main.css";

export default function DashboardLayout({ title, children }) {
  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ marginBottom: 24 }}>{title}</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: 20
      }}>
        {children}
      </div>
    </div>
  );
}
