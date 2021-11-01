require('dotenv').config();
const express = require('express');
const Goblin = require('./models/Goblin');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(
    `
    <body>
      <h1>Welcome to the Goblin database</h1>
      <p>* * * Coming soon * * *</p>
    </body>
    `
  );
});

app.post('/api/v1/goblins', (req, res, next) => {
  Goblin
    .insert(req.body)
    .then(goblin => res.send(goblin))
    .catch(next)
})

module.exports = app;
