// src/App.js

import React from 'react';
// 1. Import your main styling file
import './App.css'; 
// 2. Import the Header component you'll create next
import Header from './components/Header'; 

import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PhishingSimulator from "./components/PhishingSimulator";
import FakeWebsiteDetector from "./components/FakeWebsiteDetector";
import PasswordTester from "./components/PasswordTester";
import CyberScore from "./components/CyberScore";

function App() {
  return (
    <div className="App-container">
      {/* 3. Use the Header component */}
      <Header /> 

      <main className="main-content">
        <h2>Welcome to the Home Page!</h2>
        <p>This is where your main website content goes.</p>
        <p>
          In React, we use components (like the Header above) to break down our website into reusable parts.
        </p>
        <button>Click Me</button>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My React Website</p>
      </footer>
    </div>
  );
}

export default App;