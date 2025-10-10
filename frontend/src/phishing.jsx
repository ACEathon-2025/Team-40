import { useEffect, useState } from "react";

export default function PhishingSimulator({ onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/questions")
      .then((res) => res.json())
      .then(setQuestions)
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  const checkAnswer = (q, choice) => {
    if (choice === q.correct) {
      setFeedback("✅ Correct! That was the right choice.");
      onComplete();
    } else {
      setFeedback(`❌ Wrong! The correct answer was: ${q.correct}`);
    }
  };

  return (
    <div className="ps-container">
      <h2 className="ps-title">Phishing Simulator</h2>

      {questions.length === 0 ? (
        <p className="ps-loading">Loading...</p>
      ) : (
        questions.map((q) => (
          <div key={q.id} className="ps-question-card">
            <h3 className="ps-question">{q.question}</h3>
            <div className="ps-options">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => checkAnswer(q, opt)}
                  className="ps-btn"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))
      )}

      {feedback && (
        <p className={`ps-feedback ${feedback.includes("Correct") ? "ps-correct" : "ps-wrong"}`}>
          {feedback}
        </p>
      )}
    </div>
  );
}
