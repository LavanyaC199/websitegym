// import { useEffect, useState } from "react";
// import api from "../../services/api";

// export default function Profile1() {
//   const [profile, setProfile] = useState({});

//   useEffect(() => {
//     api.get("/user/profile").then(res => setProfile(res.data));
//   }, []);

//   const updateProfile = async () => {
//     await api.put("/user/profile", profile);
//     alert("Profile Updated");
//   };

//   return (
//     <div>
//       <h2>My Profile</h2>

//       <input value={profile.name || ""} 
//         onChange={e => setProfile({ ...profile, name: e.target.value })} 
//         placeholder="Name" />

//       <input value={profile.age || ""} 
//         onChange={e => setProfile({ ...profile, age: e.target.value })} 
//         placeholder="Age" />

//       <input value={profile.height || ""} 
//         onChange={e => setProfile({ ...profile, height: e.target.value })} 
//         placeholder="Height" />

//       <input value={profile.weight || ""} 
//         onChange={e => setProfile({ ...profile, weight: e.target.value })} 
//         placeholder="Weight" />

//       <button className="btn" onClick={updateProfile}>Update</button>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Profile1() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    api.get("/user/profile").then(res => setProfile(res.data));
  }, []);

  const updateProfile = async () => {
    await api.put("/user/profile", profile);
    alert("Profile Updated");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(6px)",
          padding: "35px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "420px",
          color: "#fff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          My Profile
        </h2>

        {/* INPUTS */}
        {[
          { key: "name", label: "Name" },
          { key: "age", label: "Age" },
          { key: "height", label: "Height (cm)" },
          { key: "weight", label: "Weight (kg)" },
        ].map((f) => (
          <input
            key={f.key}
            value={profile[f.key] || ""}
            onChange={(e) =>
              setProfile({ ...profile, [f.key]: e.target.value })
            }
            placeholder={f.label}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "14px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "15px",
            }}
          />
        ))}

        <button
          className="btn"
          onClick={updateProfile}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            marginTop: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
