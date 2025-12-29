import "../styles/main.css";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="hero"
        style={{
          height: "100vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "10%" }} className="fade">
          <h1 style={{ fontSize: "64px", maxWidth: 600 }}>
            TRANSFORM YOUR BODY
          </h1>
          <p style={{ color: "#ccc", maxWidth: 500 }}>
            Professional training • World-class equipment • Real results
          </p>
          <button
            className="btn"
            onClick={() => (window.location.href = "/register")}
          >
            Join Now
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>WHY CHOOSE US</h2>
        <p style={{ color: "#ccc", maxWidth: 700 }}>
          Elite trainers, premium facilities, and a results-driven environment.
          This is not just a gym. This is a lifestyle.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: "#111" }}>
        <h2>OUR PROGRAMS</h2>
        <ul style={{ lineHeight: 2, color: "#ccc" }}>
          <li>Strength Training</li>
          <li>Weight Loss Programs</li>
          <li>Personal Training</li>
          <li>Body Transformation</li>
        </ul>
      </section>

      {/* PRICING */}
      <Pricing />
    </>
  );
}
