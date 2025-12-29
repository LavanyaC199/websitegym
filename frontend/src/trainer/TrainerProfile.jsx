import { useEffect, useState } from "react";
import api from "../services/api";

export default function TrainerProfile() {
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    api.get("/trainer/profile").then(res => setProfile(res.data));
  }, []);

  const updateProfile = async () => {
    const res = await api.put("/trainer/profile", profile);
    setProfile(res.data);
    setEditing(false);
    alert("Profile updated ✅");
  };

  return (
    /* 🔥 CENTER WRAPPER */
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // keeps natural scroll
        width: "100%",
      }}
    >
      {/* PROFILE CARD */}
      <div
        style={{
          background: "#111827",
          padding: "24px",
          borderRadius: "16px",
          color: "#fff",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h3 style={{ marginBottom: "16px", textAlign: "center" }}>
          🧑‍🏫 Trainer Profile
        </h3>

        <input
          disabled={!editing}
          value={profile.name || ""}
          onChange={e => setProfile({ ...profile, name: e.target.value })}
          placeholder="Name"
          style={inputStyle}
        />

        <input
          disabled
          value={profile.email || ""}
          placeholder="Email"
          style={{ ...inputStyle, opacity: 0.6 }}
        />

        <input
          disabled={!editing}
          value={profile.phone || ""}
          onChange={e => setProfile({ ...profile, phone: e.target.value })}
          placeholder="Phone"
          style={inputStyle}
        />

        <input
          disabled={!editing}
          value={profile.specialization || ""}
          onChange={e =>
            setProfile({ ...profile, specialization: e.target.value })
          }
          placeholder="Specialization"
          style={inputStyle}
        />

        {!editing ? (
          <button style={btn} onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        ) : (
          <button style={btnGreen} onClick={updateProfile}>
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
};

const btn = {
  width: "100%",
  padding: "10px",
  background: "#3b82f6",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const btnGreen = {
  ...btn,
  background: "#22c55e",
};
