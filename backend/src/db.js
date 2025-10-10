const sqlite3 = require("sqlite3").verbose();

// Create or open database file
const db = new sqlite3.Database("./cyber_trainer.db", (err) => {
  if (err) {
    console.error("❌ Error opening database:", err.message);
  } else {
    console.log("✅ Connected to SQLite database");
  }
});

// Initialize tables
db.serialize(() => {
  // Scores table
  db.run(`
    CREATE TABLE IF NOT EXISTS scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT,
      task TEXT,
      score INTEGER
    )
  `);

  // Questions table
  db.run(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question TEXT,
      option1 TEXT,
      option2 TEXT,
      correct TEXT
    )
  `);

  // Insert sample questions if table empty
  db.all("SELECT COUNT(*) as count FROM questions", (err, rows) => {
    if (rows[0].count === 0) {
      const stmt = db.prepare("INSERT INTO questions (question, option1, option2, correct) VALUES (?, ?, ?, ?)");
      stmt.run("Email from support@paypa1.com asking password reset. Safe or Phish?", "Safe", "Phish", "Phish");
      stmt.run("Website has HTTPS and correct spelling. Safe or Phish?", "Safe", "Phish", "Safe");
      stmt.finalize();
      console.log("✅ Sample questions inserted");
    }
  });
});

module.exports = db;
