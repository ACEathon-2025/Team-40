import React from "react";

export default function App() {
  return (
    <div style={{fontFamily: "sans-serif", minHeight: "100vh", background: "#f9fafb"}}>
      {/* Header */}
      <header style={{
        background: "#212529",
        color: "#fff",
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{fontWeight: "bold", fontSize: "1.5rem"}}>CyberAware</div>
        <nav>
          <a href="#features" style={{color: "#fff", margin: "0 1em", textDecoration: "none"}}>Features</a>
          <a href="#impact" style={{color: "#fff", margin: "0 1em", textDecoration: "none"}}>Impact</a>
          <a href="#get-started" style={{color: "#fff", margin: "0 1em", textDecoration: "none", fontWeight: "bold"}}>Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: "4rem 2rem 2rem 2rem",
        background: "linear-gradient(90deg, #134e5e 0%, #71b280 100%)",
        color: "#fff",
        textAlign: "center"
      }}>
        <h1 style={{fontSize: "2.4rem", marginBottom: "1rem"}}>Become Cyber-Aware<br />The Interactive Way</h1>
        <p style={{fontSize: "1.2rem", marginBottom: "1.5rem", maxWidth: 600, margin: "0 auto"}}>
          Learn how to spot phishing scams, fake websites, and weak passwords through hands-on, realistic simulations.
        </p>
        <a
          href="#get-started"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#134e5e",
            padding: "0.75em 2em",
            borderRadius: "25px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.2rem"
          }}
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" style={{padding: "3rem 2rem"}}>
        <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Core Features</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          maxWidth: 900,
          margin: "0 auto"
        }}>
          <FeatureBox
            title="Phishing Simulator"
            desc="Identify red flags in fake emails—practice real-world scenarios."
          />
          <FeatureBox
            title="Fake Website Detector"
            desc="Choose the real vs. fake login page side by side."
          />
          <FeatureBox
            title="Password Strength Tester"
            desc="Check if your password is weak or unsafe in real-time."
          />
          <FeatureBox
            title="Cyber Hygiene Score"
            desc="Get a personalized security score & tips after every session."
          />
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" style={{
        background: "#eef6f9",
        padding: "2rem 2rem 3rem 2rem",
        marginTop: "2rem",
        textAlign: "center"
      }}>
        <h2>Why CyberAware?</h2>
        <p style={{maxWidth: 600, margin: "1rem auto"}}>
          Students and employees build vital cyber defenses and SMEs can easily track team readiness. Everyone becomes safer online, one simulation at a time.
        </p>
      </section>

      {/* Footer / Call to action */}
      <footer id="get-started" style={{
        background: "#212529",
        color: "#fff",
        textAlign: "center",
        padding: "2.5rem 1rem"
      }}>
        <h2 style={{marginBottom: "1rem"}}>Ready to start?</h2>
        <a href="#" style={{
          background: "#71b280",
          color: "#fff",
          padding: "0.75em 2em",
          borderRadius: "25px",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "1rem"
        }}>
          Sign Up Free
        </a>
        <p style={{marginTop: "2rem", fontSize: "0.9rem", color: "#95a5a6"}}>© 2025 CyberAware</p>
      </footer>
    </div>
  );
}

function FeatureBox({ title, desc }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #d3dbde",
      boxShadow: "0 2px 8px rgba(31, 61, 75, 0.05)",
      borderRadius: "15px",
      padding: "2rem 1.5rem",
      width: "220px",
      minHeight: "160px"
    }}>
      <h3 style={{fontSize: "1.15rem", marginBottom: "0.5rem", color: "#134e5e"}}>{title}</h3>
      <p style={{color:"#222"}}>{desc}</p>
    </div>
  );
}
