import { useState } from "react";

export default function PasswordTester({ onComplete }) {
  const [password, setPassword] = useState("");

  const checkStrength = (pwd) => {
    let score = 0;
    if (pwd.length > 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strength = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
  const score = checkStrength(password);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Password Strength Tester</h2>
      <input
        type="password"
        value={password}
        placeholder="Type your password..."
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <div className="mt-2 text-sm">
        Strength: <span className="font-semibold">{strength[score]}</span>
      </div>
      <div className="h-2 mt-2 rounded bg-gray-200">
        <div
          className={`h-2 rounded ${
            score <= 1 ? "bg-red-500" : score === 2 ? "bg-yellow-500" : "bg-green-500"
          }`}
          style={{ width: `${(score / 4) * 100}%` }}
        />
      </div>
      {score >= 3 && (
        <button
          className="mt-4 px-3 py-1 bg-blue-500 text-white rounded"
          onClick={onComplete}
        >
          ✅ Mark as Complete
        </button>
      )}
    </div>
  );
}
