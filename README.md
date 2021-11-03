# demo-04-server-goblins

## Setup

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

---

## MISC

### Create Database:

const fs = require('fs');\
pool.query(fs.readFileSync('./sql/database.sql', 'utf-8')); \
pool.end();
