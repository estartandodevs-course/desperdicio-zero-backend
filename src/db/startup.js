const { Pool } = require('pg');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = 'despzerobe';
const DB_PORT = 5432;
const DB_PASSWORD = 'despzero#12';
const DB_NAME = 'postgres';

const pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

module.exports = pool;