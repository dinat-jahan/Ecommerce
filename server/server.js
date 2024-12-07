// backend/server.js
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const db_connection = require('./config/db_config');
const app = express();
const port = 5000;

db_connection();

app.use(cors());  // Enable CORS
app.use(express.json());  // Middleware for JSON requests

app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
