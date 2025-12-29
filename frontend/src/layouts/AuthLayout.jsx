// import "../styles/main.css";

// export default function AuthLayout({ children }) {
//   return (
//     <div style={{
//       minHeight: "100vh",
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr"
//     }}>
//       {/* LEFT IMAGE */}
//       <div style={{
//         backgroundImage:
//           "url(https://images.unsplash.com/photo-1599058917212-d750089bc07c)",
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//       }} />

//       {/* RIGHT FORM */}
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//         {children}
//       </div>
//     </div>
//   );
// }



import "../styles/main.css";

export default function AuthLayout({ children }) {
  return (
    <div className="auth-bg-animated">
      {/* Floating Dumbbells */}
      <span className="dumbbell d1">🏋️</span>
      <span className="dumbbell d2">🏋️</span>
      <span className="dumbbell d3">🏋️</span>
      <span className="dumbbell d1">🏋️</span>
      <span className="dumbbell d2">🏋️</span>
      <span className="dumbbell d3">🏋️</span>

      {/* Right Form */}
      <div className="auth-form-area">
        {children}
      </div>
    </div>
  );
}

