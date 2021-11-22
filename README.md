# Goblin Den - Server

## Author

[Franco Ortega](https://github.com/franco-ortega)

---

## Tech Stack

Client (frontend): [React](https://reactjs.org/docs/getting-started.html)

Server (backend): [Node](https://nodejs.org/en/), [Express](http://expressjs.com/), [PostgreSQL](https://www.postgresql.org/)

---

Goblin Den is a full stack app where users create goblins with names, hit points, armor class, and a customized list of items. The hit points and armor class can be increased by spending points from a shared pool. The goblins are stored in a database.

Visit the live site here: [Goblin Den](https://goblins.netlify.app/)

The server consists of a RESTful API and relational database.

### Goblin Endpoints

1.  GET and POST requests:

    [https://goblin-database.herokuapp.com/api/v1/goblins](https://goblin-database.herokuapp.com/api/v1/goblins)

1.  PUT requests:

    https://goblin-database.herokuapp.com/api/v1/goblins/:id

    If you want to post to the database, such as by using Postman, this is the shape of the data that you need to send and the data types of the values (followed by an example with actual values):

           {
              goblinName: "string",
              hitPoints: number,
              armorClass: number,
              items: ["string", "string", "string"]
           }

          JSON example with actual values:
          {
             "goblinName": "Veruth",
             "hitPoints": 10,
             "armorClass": 10,
             "items": ["cake", "rope", "pipe"]
          }

- Hit points have a minimum value of 5 and armor class has a minimum value of 10. The user is provided a pool of 5 additional points that can be used to increased one or both stats. Therefore, a goblin could max out at 10 hp and 10 AC, or 7 hp and 13 AC, or 5 hp and 15 AC, and so on. The two stats can add up to no higher than 20. However, this limit is handled on the client side. Therefore, for the time being, you could technically provide any number for the hit points and armor class by making a POST or PUT request directly to the database.

---

## Getting Started

If you would like to try out this project locally, the first step will be to clone the repo for the server (backend):

### Server

[GitHub repo - server](https://github.com/franco-ortega/demo-04-server-goblins)

1. Clone the server repo: <code>git clone https://github.com/franco-ortega/demo-04-server-goblins.git
   </code>

1. Move into the repo directory with the command <code>cd demo-04-server-goblins</code>

1. Install dependencies by running <code>npm i</code>.

1. Create a server-side <code>.env</code> file with the variable <code>LOCALHOST_URL</code> pointing to your localhost database. This line of code might look something like this in your .env file: <code>LOCALHOST_URL=postgres://postgres:password@localhost:5432/postgres</code>. You can use the .env-example file in this repo as a reference, but be sure to replace "password" with your own password.

1. Start the server. If you use [Nodemon](https://www.npmjs.com/package/nodemon), type the command <code>nodemon</code> in the terminal/command line to start the server. Otherwise, type the command <code>node server.js</code> to start the server. This server runs on [PORT 4200](http://localhost:4200/api/v1/goblins).

1. You may run the command <code>npm test</code> to run the tests, which will also populate the database with three goblins. However, if you run this command again, it will reset the database, so any additional goblins that you created will be lost.

---

### Frontend (client)

You can read about the client (website) at this repo:

[GitHub repo - client](https://github.com/franco-ortega/demo-04-client-goblins)

---

## Setup

This is a list of how I install dependencies and modified files for setup.

### Server

1. npm init -y
1. npm install eslint --save-dev
1. npx eslint --init
1. add "node": true to eslint
1. add eslint rules
1. npm i express
1. npm i dotenv
1. change "main" in package.json to "server.js"
1. Files/folders
   1. ./lib
      1. app.js
   1. server.js
   1. .env

### Database

1. npm install pg
1. heroku login
1. heroku create goblin-database
   1. https://goblin-database.herokuapp.com/ | https://git.heroku.com/goblin-database.git
1. git push heroku main
1. heroku addons:create heroku-postgresql:hobby-dev
1. heroku config (to view database URL)
1. add DATABASE_URL to .env
1. add LOCALHOST_URL to .env
1. Connect to PostgreSQL (localhost and live URL)
1. Files/folders
   1. ./sql
      1. database.sql
   1. .lib/utils
      1. pool.js
         1. add "require('dotenv').config();" to top of file

### API

1. Configure Heroku to deploy from GitHub from main branch
1. npm install jest --save-dev
   1. Update test script in package.json to use jest
1. npm install supertest --save-dev
1. Add "module": true to eslint
1. Files/folders

   1. ./_ tests _
   1. ./lib/models
      1. Goblin.js

1. npm i cors

---

## MISC

### Create Database:

Added to test file:

1. const fs = require('fs');
1. beforeEach(() => pool.query(fs.readFileSync('./sql/database.sql', 'utf-8')));
1. afterAll(() => pool.end());
