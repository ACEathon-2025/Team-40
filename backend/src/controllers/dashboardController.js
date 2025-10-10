const db = require("../db");

exports.getDashboard = (req, res) => {
  const { userId } = req.params;

  db.all("SELECT task, score FROM scores WHERE userId = ?", [userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const totalScore = rows.reduce((acc, r) => acc + r.score, 0);
    const completedTasks = rows.map(r => r.task);

    res.json({
      userId,
      totalScore,
      completedTasks,
      badges: totalScore >= 50 ? ["Cyber Novice", "Strong Password Creator"] : ["Cyber Novice"]
    });
  });
};
