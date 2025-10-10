const db = require("../db");

exports.saveScore = (req, res) => {
  const { userId, task, score } = req.body;
  if (!userId || !task || score === undefined) {
    return res.status(400).json({ error: "userId, task, and score are required" });
  }

  const sql = "INSERT INTO scores (userId, task, score) VALUES (?, ?, ?)";
  db.run(sql, [userId, task, score], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "✅ Score saved successfully", id: this.lastID });
  });
};
