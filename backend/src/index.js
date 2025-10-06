const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ---------------- Test route ----------------
app.get('/', (req, res) => {
  res.send('🚀 Backend is running');
});

// ---------------- Phishing Questions API ----------------
app.get('/api/questions', (req, res) => {
  const questions = [
    {
      id: 1,
      question: "Email from support@paypa1.com asking password reset. Safe or Phish?",
      options: ["Safe", "Phish"],
      correct: "Phish"
    },
    {
      id: 2,
      question: "Website has HTTPS and correct spelling. Safe or Phish?",
      options: ["Safe", "Phish"],
      correct: "Safe"
    }
  ];
  res.json(questions);
});

// ---------------- Password Strength API ----------------
app.post('/api/password-check', (req, res) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: "Password is required" });

  let strength = "Weak";
  if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
    strength = "Strong";
  } else if (password.length >= 6) {
    strength = "Medium";
  }

  res.json({ password, strength });
});

// ---------------- Save Score API ----------------
app.post('/api/save-score', (req, res) => {
  const { userId, task, score } = req.body;
  if (!userId || !task || score === undefined) {
    return res.status(400).json({ error: "userId, task, and score are required" });
  }
  res.json({ message: "Score saved successfully", userId, task, score });
});

// ---------------- Dashboard API ----------------
app.get('/api/dashboard/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({
    userId,
    totalScore: 85,
    completedTasks: ["Phishing Simulator", "Password Tester"],
    badges: ["Cyber Novice", "Strong Password Creator"]
  });
});

// ---------------- Start server ----------------
const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
