import api from "../../services/api";

export default function Payments() {
  const pay = async () => {
    await api.post("/user/payment", { amount: 999 });
    alert("Payment Successful 💳");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://media.istockphoto.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.webp?a=1&b=1&s=612x612&w=0&k=20&c=GQuu-wgXULnH03BgZwedZ37_xWZrcOApnQm34vT_API=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      {/* PAYMENT CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "18px",
          padding: "30px",
          color: "#ffffff",
          boxShadow: "0 15px 45px rgba(0,0,0,0.6)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "12px",
            letterSpacing: "1px",
          }}
        >
          💳 Membership Payment
        </h2>

        <p
          style={{
            opacity: 0.85,
            marginBottom: "22px",
            fontSize: "15px",
          }}
        >
          Get full access to workouts, trainers, and premium features
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "18px",
            borderRadius: "12px",
            marginBottom: "22px",
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          ₹ 999 / Month
        </div>

        <button
          onClick={pay}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            background:
              "linear-gradient(135deg, #22c55e, #15803d)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Pay Now
        </button>

        <p
          style={{
            marginTop: "18px",
            fontSize: "13px",
            opacity: 0.7,
          }}
        >
          Secure payment • Instant activation
        </p>
      </div>
    </div>
  );
}
