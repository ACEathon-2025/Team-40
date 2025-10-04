import { useState } from "react";

const sampleEmails = [
  {
    subject: "Reset your bank password immediately!",
    body: "Click here to verify your account: http://fakebank-login.com",
    redFlag: "fakebank-login.com"
  },
  {
    subject: "Your invoice is attached",
    body: "Please see the attached PDF for details (malware.exe)",
    redFlag: "malware.exe"
  }
];

export default function PhishingSimulator({ onComplete }) {
  const [feedback, setFeedback] = useState("");

  const checkEmail = (guess, redFlag) => {
    if (guess.includes(redFlag)) {
      setFeedback("✅ Correct! You spotted the phishing attempt.");
      onComplete();
    } else {
      setFeedback("❌ Missed it! The red flag was: " + redFlag);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-3">Phishing Simulator</h2>
      {sampleEmails.map((email, idx) => (
        <div key={idx} className="border p-3 my-2 rounded">
          <h3 className="font-semibold">Subject: {email.subject}</h3>
          <p>{email.body}</p>
          <button
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => checkEmail(email.body, email.redFlag)}
          >
            Report Phish
          </button>
        </div>
      ))}
      {feedback && <div className="mt-3 text-sm font-semibold">{feedback}</div>}
    </div>
  );
}
