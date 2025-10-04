import { useEffect, useState } from "react";

export default function CyberScore({ completedTasks }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(completedTasks.length * 33); // 3 tasks ~ 100%
  }, [completedTasks]);

  const rank = score < 40 ? "Cyber Rookie" :
               score < 80 ? "Cyber Defender" : "Cyber Expert";

  return (
    <div className="p-6 bg-blue-50 rounded-xl shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Your Cyber Hygiene Score</h2>
      <p className="text-lg">{score} / 100</p>
      <div className="mt-3">
        <p className="font-semibold">{rank}</p>
      </div>
      <progress className="w-full mt-2" value={score} max="100" />
    </div>
  );
}
