const express = require("express");
const sequelize = require('./src/db/sequelize')

const app = express();
const PORT = 6000;

sequelize.initDb()


app.listen(PORT, () =>
  console.log(`L'application a demarré sur le port ${PORT}`)
);
