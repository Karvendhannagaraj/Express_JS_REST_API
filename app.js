const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // For parsing application/json

app.use('/api/auth', authRoutes); // Authentication routes
// A simple test route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app;
