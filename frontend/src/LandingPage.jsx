import "./LandingPage.css";

export default function LandingPage({ onStart }) {
  return (
    <div className="landing-wrap">
      <div className="landing-content">
        <h1 className="landing-title">Cyber Awareness Trainer</h1>
        <p className="landing-sub">
          Learn cybersecurity through fun, interactive simulations and mini-games.
        </p>
        <button className="landing-btn" onClick={onStart}>Start Learning 🚀</button>
      </div>
    </div>
  );
}
