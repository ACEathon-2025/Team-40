const db = require("../db");

exports.getQuestions = (req, res) => {
  db.all("SELECT * FROM questions", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    // Format rows into same shape as before
    const questions = rows.map(q => ({
      id: q.id,
      question: q.question,
      options: [q.option1, q.option2],
      correct: q.correct
    }));

    res.json(questions);
  });
};
