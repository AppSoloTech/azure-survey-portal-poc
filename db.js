require("dotenv").config({ quiet: true });

const pgPromise = require("pg-promise");

const pgp = pgPromise({
  capSQL: true,
});

const db = pgp({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  db,
  pgp,
};