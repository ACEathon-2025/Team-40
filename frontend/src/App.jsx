import { useState } from "react";
import Navbar from "./navbar.jsx";
import Dashboard from "./dashboard.jsx";
import PhishingSimulator from "./phishing.jsx";
import FakeWebsiteDetector from "./detector.jsx";
import PasswordTester from "./password_tester.jsx";
import CyberScore from "./cyberscore.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskComplete = (taskName) => {
    if (!completedTasks.includes(taskName)) {
      setCompletedTasks([...completedTasks, taskName]);
    }
  };

  return (
    <div className="app-container">
      <Navbar setActivePage={setActivePage} />
      <div className="page-content">
        {activePage === "dashboard" && <Dashboard completedTasks={completedTasks} />}
        {activePage === "phishing" && (
          <PhishingSimulator onComplete={() => handleTaskComplete("Phishing Simulator")} />
        )}
        {activePage === "fakeweb" && (
          <FakeWebsiteDetector onComplete={() => handleTaskComplete("Fake Website Detector")} />
        )}
        {activePage === "password" && (
          <PasswordTester onComplete={() => handleTaskComplete("Password Strength Tester")} />
        )}
        {activePage === "score" && <CyberScore completedTasks={completedTasks} />}
      </div>
    </div>
  );
}
