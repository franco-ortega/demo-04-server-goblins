require('dotenv').config();
const express = require('express');
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

app.get('/coming', (req, res) => {
  res.send(
    `
    <body>
      <h1>Welcome to the Goblin database</h1>
      <p>* * * Coming soon * * *</p>
    </body>
    `
  );
});

app.get('/text', (req, res) => {
  res.send('Welcome to the Goblin database. \n * * * coming soon * * *');
});

module.exports = app;
