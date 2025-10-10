import { useState } from "react";
import Navbar from "./navbar.jsx";
import LandingPage from "./LandingPage.jsx";
import Features from "./Features.jsx";
import Dashboard from "./dashboard.jsx";
import PhishingSimulator from "./phishing.jsx";
import FakeWebsiteDetector from "./detector.jsx";
import PasswordTester from "./password_tester.jsx";
import CyberScore from "./cyberscore.jsx";
import "./index.css";

export default function App() {
  const [activePage, setActivePage] = useState("landing");
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskComplete = (taskName) => {
    if (!completedTasks.includes(taskName)) {
      setCompletedTasks([...completedTasks, taskName]);
    }
  };

  if (activePage === "landing") {
    return (
      <>
        <Navbar setActivePage={setActivePage} />
        <LandingPage onStart={() => setActivePage("features")} />
      </>
    );
  }

  if (activePage === "features") {
    return (
      <>
        <Navbar setActivePage={setActivePage} />
        <Features onSelect={(page) => setActivePage(page)} />
      </>
    );
  }

  return (
    <div className="app-body">
      <Navbar setActivePage={setActivePage} />
      <div className="content">
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
