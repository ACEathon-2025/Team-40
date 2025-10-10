const express = require("express");
const cors = require("cors");
const app = express();

// initialize DB (creates file & tables)
require("./db");

const questionsRoutes = require("./routes/questions");
const passwordRoutes = require("./routes/password");
const scoreRoutes = require("./routes/score");
const dashboardRoutes = require("./routes/dashboard");

app.use(cors());
app.use(express.json());

// health
app.get("/", (req, res) => res.send("🚀 Backend is running"));

// mount routes
app.use("/api/questions", questionsRoutes);       // GET
app.use("/api/password-check", passwordRoutes);  // POST
app.use("/api/save-score", scoreRoutes);         // POST
app.use("/api/dashboard", dashboardRoutes);      // GET /:userId

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
