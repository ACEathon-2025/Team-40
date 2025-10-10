import { useState } from "react";

export default function PasswordTester({ onComplete }) {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const checkPassword = async () => {
    const res = await fetch("http://localhost:4000/api/password-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    setResult(`Strength: ${data.strength}`);
    if (data.strength === "Strong") onComplete();
  };

  return (
    <div className="pt-container">
      <h2 className="pt-title">Password Strength Tester</h2>
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="pt-input"
      />
      <button onClick={checkPassword} className="pt-btn">
        Check
      </button>
      {result && (
        <p className="pt-result">
          {result.includes("Strong") ? (
            <span className="pt-strong">{result}</span>
          ) : result.includes("Weak") ? (
            <span className="pt-weak">{result}</span>
          ) : (
            result
          )}
        </p>
      )}
    </div>
  );
}
