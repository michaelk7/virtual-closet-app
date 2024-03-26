// backend/server.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Your backend routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, '../client/build')));

// Route for all other requests to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
