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

      stmt.run("Email from support@paypa1.com asking for your password reset link. Safe or Phish?", "Safe", "Phish", "Phish");
      stmt.run("Website URL is https://secure-bank.com/login and uses HTTPS. Safe or Phish?", "Safe", "Phish", "Safe");
      stmt.run("An unknown sender offers you a gift card if you click a short URL. Safe or Phish?", "Safe", "Phish", "Phish");
      stmt.run("An email from your boss (same domain) asks for a quick money transfer. Safe or Phish?", "Safe", "Phish", "Phish");
      stmt.run("Message from 'Microsoft Security' says your computer is infected and asks for remote access. Safe or Phish?", "Safe", "Phish", "Phish");
      stmt.run("Login link is https://accounts.google.com with Google branding. Safe or Phish?", "Safe", "Phish", "Safe");
      stmt.run("A pop-up asks you to install a free antivirus immediately. Safe or Phish?", "Safe", "Phish", "Phish");
      stmt.run("Email from your college IT admin reminding to change your password through the official portal. Safe or Phish?", "Safe", "Phish", "Safe");
      stmt.run("A text message says your bank account will be blocked unless you click a link. Safe or Phish?", "Safe", "Phish", "Phish");
      stmt.run("You receive a LinkedIn message with a job offer and a request to download a ZIP file. Safe or Phish?", "Safe", "Phish", "Phish");

      stmt.finalize();
      console.log("✅ 10 sample questions inserted successfully");
    }
  });
});

// ✅ Export database connection
module.exports = db;
