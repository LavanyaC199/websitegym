import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [receiverId, setReceiverId] = useState("");

  useEffect(() => {
    api
      .get("/user/messages")
      .then((res) =>
        setMessages(Array.isArray(res.data) ? res.data : [])
      )
      .catch(() => setMessages([]));
  }, []);

  const send = async () => {
    if (!receiverId || !text.trim()) return;

    const res = await api.post("/user/messages", {
      receiverId,
      message: text,
    });

    setMessages((prev) => [...prev, res.data]);
    setText("");
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
      {/* CHAT CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          height: "75vh",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "18px",
          padding: "20px",
          color: "#ffffff",
          boxShadow: "0 15px 45px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "14px",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          💬 Messages
        </h2>

        {/* MESSAGE LIST */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginBottom: "12px",
            paddingRight: "6px",
          }}
        >
          {messages.length === 0 && (
            <p
              style={{
                textAlign: "center",
                opacity: 0.7,
                fontSize: "14px",
              }}
            >
              No messages yet
            </p>
          )}

          {messages.map((m) => (
            <div
              key={m._id}
              style={{
                background: "rgba(255,255,255,0.15)",
                padding: "10px 12px",
                borderRadius: "12px",
                marginBottom: "8px",
                fontSize: "14px",
                maxWidth: "85%",
                alignSelf:
                  m.senderId === receiverId ? "flex-start" : "flex-end",
              }}
            >
              {m.message}
            </div>
          ))}
        </div>

        {/* INPUTS */}
        <input
          type="text"
          placeholder="Trainer ID"
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "8px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "14px",
            }}
          />

          <button
            onClick={send}
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              border: "none",
              background:
                "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
