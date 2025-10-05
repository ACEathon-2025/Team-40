const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
// Test route
app.get('/', (req, res) => {
  res.send('🚀 Backend is running');
});
// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

