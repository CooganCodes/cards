const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simulated in-memory database
let cardList = [];

// API Endpoints

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { login, password } = req.body;

  // Dummy login credentials
  if (login === 'bob' && password === 'COP4331') {
    res.json({ id: 1, firstName: 'Bob', lastName: 'Roberts' });
  } else {
    res.status(400).json({ error: 'Invalid login' });
  }
});

// Add Card Endpoint
app.post('/api/addcard', async (req, res) => {
  const { userId, card } = req.body;

  // Add card to the in-memory list
  cardList.push({ userId, card });
  res.json({ error: '' });
});

// Search Cards Endpoint
app.post('/api/searchcards', async (req, res) => {
  const { userId, search } = req.body;

  // Filter cards by userId and search term
  const results = cardList
    .filter((c) => c.userId === userId && c.card.toLowerCase().includes(search.toLowerCase()))
    .map((c) => c.card);

  res.json({ results, error: '' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
