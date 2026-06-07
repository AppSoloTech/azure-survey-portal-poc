const { db, pgp } = require("./db");
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  async function test_conn() {
    const result = await db.any("SELECT * FROM users JOIN roles ON users.role_id = roles.id");
    return result;
  }
  let data = await test_conn();
  res.send(data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
