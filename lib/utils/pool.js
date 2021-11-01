require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.LOCALHOST_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

module.exports = pool;


