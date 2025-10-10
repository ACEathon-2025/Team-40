export default function Navbar({ setActivePage }) {
  return (
    <div className="navbar-container">
      <button onClick={() => setActivePage("dashboard")} className="navbar-btn">Dashboard</button>
      <button onClick={() => setActivePage("phishing")} className="navbar-btn">Phishing</button>
      <button onClick={() => setActivePage("fakeweb")} className="navbar-btn">Fake Site</button>
      <button onClick={() => setActivePage("password")} className="navbar-btn">Password</button>
      <button onClick={() => setActivePage("score")} className="navbar-btn">Score</button>
    </div>
  );
}
