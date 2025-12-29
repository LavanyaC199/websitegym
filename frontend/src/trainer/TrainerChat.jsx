import { useEffect, useState } from "react";
import api from "../services/api";

export default function TrainerChat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  /* ================= LOAD CHAT ================= */
  useEffect(() => {
    api.get("/trainer/chat").then(res => setMessages(res.data));
  }, []);

  /* ================= SEND MESSAGE ================= */
  const sendMessage = async () => {
    if (!text.trim()) return;

    const res = await api.post("/trainer/chat", {
      message: text,
    });

    setMessages(prev => [...prev, res.data]);
    setText("");
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
      {/* CHAT CARD */}
      <div
        className="trainer-card chat-card"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h3>💬 Client Communication</h3>

        <div className="chat-box">
          {messages.length === 0 && (
            <p className="chat-empty">No messages yet</p>
          )}

          {messages.map((m, i) => (
            <div key={i} className="chat-message trainer">
              <span>{m.message}</span>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            placeholder="Type your message..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className="btn btn-create" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
