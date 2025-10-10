import "./navbar.css";

export default function Navbar({ setActivePage }) {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setActivePage("landing")}>
        🧠 Cyber Awareness Trainer
      </div>
      <div className="nav-links">
        <button onClick={() => setActivePage("features")}>Features</button>
        <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
      </div>
    </nav>
  );
}
