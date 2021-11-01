# demo-04-server-goblins

## Setup

### Server

1. npm init -y
1. npm install eslint --save-dev
1. npx eslint --init
1. add eslint rules
1. npm i express
1. npm i dotenv
1. add "node": true to eslint
1. Files/folders
   1. ./lib
      1. app.js
   1. server.js
   1. .env

### Database

1. heroku login
1. heroku create goblin-database
   1. https://goblin-database.herokuapp.com/ | https://git.heroku.com/goblin-database.git
1. git push heroku main
1. heroku addons:create heroku-postgresql:hobby-dev
1. heroku config (to view database URL)
1. add DATABASE_URL to .env
1. add LOCALHOST_URL to .env
1. Files/folders
   1. ./sql
      1. database.sql
