export default function FakeWebsiteDetector({ onComplete }) {
  const realSite = "https://secure-bank.com/login";
  const fakeSite = "http://secure-bank-login.fake-site.com";

  const checkChoice = (choice) => {
    if (choice === "real") {
      alert("✅ Correct! This is the real login page.");
      onComplete();
    } else {
      alert("❌ This was a phishing site!");
    }
  };

  return (
    <div className="fwd-container">
      <h2 className="fwd-title">🕵️‍♂️ Fake Website Detector</h2>

      <div className="fwd-grid">
        {/* Website A */}
        <div className="fwd-card">
          <h3 className="fwd-card-title">Website A</h3>
          <p className="fwd-card-url">{realSite}</p>
          <button onClick={() => checkChoice("real")} className="fwd-btn-green">
            ✅ Select
          </button>
        </div>

        {/* Website B */}
        <div className="fwd-card">
          <h3 className="fwd-card-title">Website B</h3>
          <p className="fwd-card-url">{fakeSite}</p>
          <button onClick={() => checkChoice("fake")} className="fwd-btn-red">
            ❌ Select
          </button>
        </div>
      </div>

      <p className="fwd-footer">
        Identify which site is real and avoid phishing traps!
      </p>
    </div>
  );
}
