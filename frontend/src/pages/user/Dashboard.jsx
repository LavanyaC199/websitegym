


import { Link } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm your fitness assistant. How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const dashboardStyle = {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74')",
    backgroundSize: "cover",
    padding: "40px",
  };

  const overlayStyle = {
    backgroundColor: "rgba(183, 188, 236, 0.9)",
    borderRadius: "18px",
    padding: "30px",
    maxWidth: "1000px",
    margin: "auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "22px",
  };

  const cardStyle = {
    padding: "22px",
    borderRadius: "16px",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: "600",
    color: "#0f0f0fff",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    boxShadow: "0 6px 18px rgba(224, 21, 21, 0.2)",
  };

  /* ================= CHATBOT LOGIC ================= */
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botMsg = {
      from: "bot",
      text: "💪 Stay consistent! Your workout plan is waiting.",
    };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div style={dashboardStyle}>
      <div style={overlayStyle}>
        <h1 style={{ textAlign: "center", marginBottom: 30 }}>
          User Dashboard
        </h1>

        <div style={gridStyle}>
          <Link to="/user/profile" style={cardStyle}>👤 Profile</Link>
          <Link to="/user/goals" style={cardStyle}>🎯 Goals</Link>
          <Link to="/user/workouts" style={cardStyle}>🏋️ Workouts</Link>
          <Link to="/user/appointments" style={cardStyle}>📅 Appointments</Link>
          <Link to="/user/messages" style={cardStyle}>💬 Messages</Link>
          <Link to="/user/payments" style={cardStyle}>💳 Payments</Link>
          <Link to="/user/feedback" style={cardStyle}>⭐ Feedback</Link>
        </div>
      </div>

      {/* ================= CHATBOT ================= */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        {/* Chat Button */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "none",
              background: "linear-gradient(135deg,#ff512f,#dd2476)",
              color: "#fff",
              fontSize: 26,
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            💬
          </button>
        )}

        {/* Chat Window */}
        {open && (
          <div
            style={{
              width: 320,
              height: 420,
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: 12,
                background: "linear-gradient(135deg,#667eea,#764ba2)",
                color: "#ac5959ff",
                borderRadius: "16px 16px 0 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <strong>Fitness Chatbot</strong>
              <span style={{ cursor: "pointer" }} onClick={() => setOpen(false)}>
                ❌
              </span>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                padding: 10,
                overflowY: "auto",
                fontSize: 14,
              }}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: m.from === "user" ? "right" : "left",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius: 12,
                      background:
                        m.from === "user"
                          ? "#667eea"
                          : "#f1f3f5",
                      color: m.from === "user" ? "#fff" : "#333",
                    }}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{ display: "flex", padding: 8 }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message..."
                style={{
                  flex: 1,
                  padding: 8,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  marginLeft: 6,
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "none",
                  background: "#667eea",
                  color: "#fff",
                }}
              >
                ➤
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
