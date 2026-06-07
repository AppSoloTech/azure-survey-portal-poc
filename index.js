const { db, pgp } = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://survey-poc.appsolotech.com",
      "https://icy-moss-0b335290f.7.azurestaticapps.net",
    ],
  }),
);

app.get("/", (req, res) => {
  res.send("Survey Portal API Running");
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await db.any(`
      SELECT users.id, users.email, roles.name AS role
      FROM users
      JOIN roles ON users.role_id = roles.id
    `);

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
