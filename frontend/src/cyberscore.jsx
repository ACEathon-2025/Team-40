export default function CyberScore({ completedTasks }) {
  const score = completedTasks.length * 10;

  return (
    <div className="cyberscore-card">
      <h2 className="cyberscore-title">Cyber Score</h2>
      <p className="cyberscore-text">
        You have completed{' '}
        <span className="cyberscore-count">{completedTasks.length}</span> tasks
      </p>
      <p className="cyberscore-text">
        Your score: 
        <span className="cyberscore-score">{score}</span>
      </p>
    </div>
  );
}
