const express = require("express");
const PORT = 3004;
const app = express();

app.get("/", (req, res) => {
  res.send("New Mongo");
});

app.listen(PORT, (req, res) => {
  console.log("app connected to: http://localhost:3004");
});
