require('dotenv').config();
const express = require('express');
const cors = require('cors')
const Goblin = require('./models/Goblin');
const app = express();

app.use(cors());

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

app.get('/api/v1/goblins', (req, res, next) => {
  Goblin
    .find()
    .then(goblins => res.send(goblins))
    .catch(next)
})

app.put('/api/v1/goblins/:id', (req, res, next) => {
  Goblin
    .update(req.params.id, req.body)
    .then(goblin => res.send(goblin))
    .catch(next)
})

module.exports = app;
