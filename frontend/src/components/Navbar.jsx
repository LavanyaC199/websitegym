import "../styles/main.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">RHINOS GYM</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#pricing">Pricing</a>
        <a href="/trainers">Trainers</a>
        <a href="/gallery">Gallery</a>
        <a href="/register" className="nav-btn">Register</a>
        
        <a href="/login" className="nav-btn">Login</a>
        
      </div>
    </nav>
  );
}
