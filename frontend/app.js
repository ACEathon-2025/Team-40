import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PhishingSimulator from "./components/PhishingSimulator";
import FakeWebsiteDetector from "./components/FakeWebsiteDetector";
import PasswordTester from "./components/PasswordTester";
import CyberScore from "./components/CyberScore";

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskComplete = (taskName) => {
    if (!completedTasks.includes(taskName)) {
      setCompletedTasks([...completedTasks, taskName]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar setActivePage={setActivePage} />
      <div className="p-6">
        {activePage === "dashboard" && <Dashboard completedTasks={completedTasks} />}
        {activePage === "phishing" && (
          <PhishingSimulator onComplete={() => handleTaskComplete("phishing")} />
        )}
        {activePage === "fakeweb" && (
          <FakeWebsiteDetector onComplete={() => handleTaskComplete("fakeweb")} />
        )}
        {activePage === "password" && (
          <PasswordTester onComplete={() => handleTaskComplete("password")} />
        )}
        {activePage === "score" && <CyberScore completedTasks={completedTasks} />}
      </div>
    </div>
  );
}
