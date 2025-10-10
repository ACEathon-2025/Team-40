import "./Features.css";

const features = [
  { key: "phishing", title: "Phishing Simulator", desc: "Spot phishing emails safely in a simulated environment." },
  { key: "fakeweb", title: "Fake Website Detector", desc: "Learn to distinguish between fake and real websites." },
  { key: "password", title: "Password Strength Tester", desc: "Check how strong and secure your passwords are." },
  { key: "score", title: "Cyber Score Dashboard", desc: "Track your learning progress and achievements." }
];

export default function Features({ onSelect }) {
  return (
    <div className="features-container">
      <h2 className="features-heading">Explore Our Modules</h2>
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.key} className="feature-card" onClick={() => onSelect(f.key)}>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            <button className="feature-btn">Try Now →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
