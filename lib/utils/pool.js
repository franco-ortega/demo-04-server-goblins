require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.LOCALHOST_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

const fs = require('fs');

console.log('Pooling!');

pool.query(fs.readFileSync('./sql/database.sql', 'utf-8'));
pool.end();

module.exports = pool;


