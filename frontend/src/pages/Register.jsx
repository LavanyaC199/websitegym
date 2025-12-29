// // import { useState } from "react";
// // import api from "../services/api";
// // import AuthLayout from "../layouts/AuthLayout";

// // export default function Register() {
// //   const [form, setForm] = useState({});

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     await api.post("/auth/register", form);
// //     window.location.href = "/login";
// //   };

// //   return (
// //     <AuthLayout>
// //       <div className="card fade" style={{ width: 380 }}>
// //         <h2>Create Account</h2>
// //         <p style={{ color: "#6b7280", marginBottom: 20 }}>
// //           Start your fitness journey
// //         </p>

// //         <form onSubmit={submit}>
// //           <input placeholder="Full name" onChange={e => setForm({...form,name:e.target.value})} />
// //           <input placeholder="Email" onChange={e => setForm({...form,email:e.target.value})} />
// //           <input type="password" placeholder="Password" onChange={e => setForm({...form,password:e.target.value})} />
// //           <select onChange={e => setForm({...form,role:e.target.value})}>
// //             <option value="user">User</option>
// //             <option value="trainer">Trainer</option>
// //              <option value="admin">Admin</option>
// //           </select>

// //           <button className="btn" style={{ width: "100%" }}>
// //             Create account
// //           </button>
// //         </form>
// //       </div>
// //     </AuthLayout>
// //   );
// // }



// import { useState } from "react";
// import api from "../services/api";
// import AuthLayout from "../layouts/AuthLayout";

// export default function Register() {
//   const [form, setForm] = useState({});

//   const submit = async (e) => {
//     e.preventDefault();
//     await api.post("/auth/register", form);
//     window.location.href = "/login";
//   };

//   return (
//     <AuthLayout>
//       <div className="auth-card">
//         <h2>Create Account</h2>
//         <p style={{ color: "#6b7280", marginBottom: 20 }}>
//           Start your fitness journey
//         </p>

//         <form onSubmit={submit}>
//           <input
//             placeholder="Full name"
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//           />

//           <input
//             placeholder="Email"
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) =>
//               setForm({ ...form, password: e.target.value })
//             }
//           />

//           <select
//             onChange={(e) =>
//               setForm({ ...form, role: e.target.value })
//             }
//           >
//             <option value="user">User</option>
//             <option value="trainer">Trainer</option>
//             <option value="admin">Admin</option>
//           </select>

//           <button className="btn">Create account</button>
//         </form>
//       </div>
//     </AuthLayout>
//   );
// }
import { useState } from "react";
import api from "../services/api";
import AuthLayout from "../layouts/AuthLayout";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <AuthLayout>
      <div className="auth-card">
        <h2>Create Account</h2>

        <p style={{ color: "#6b7280", marginBottom: 20 }}>
          Start your fitness journey
        </p>

        <form onSubmit={submit}>
          <input
            placeholder="Full name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <select
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="user">User</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>

          <button className="btn">Create account</button>
        </form>
      </div>
    </AuthLayout>
  );
}
