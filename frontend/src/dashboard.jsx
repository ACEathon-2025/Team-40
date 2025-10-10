import { useEffect, useState } from "react";

export default function Dashboard({ completedTasks }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/dashboard/1")
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, [completedTasks]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      {!data ? (
        <p className="dashboard-loading">Loading...</p>
      ) : (
        <div className="dashboard-data">
          <p><b>Total Score:</b> {data.totalScore}</p>
          <p><b>Completed Tasks:</b> {data.completedTasks.join(", ")}</p>
          <p><b>Badges:</b> {data.badges.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
