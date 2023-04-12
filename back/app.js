const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("Hello 2"));

app.listen(PORT, () =>
  console.log(`L'application a demarré sur le port ${PORT}`)
);
