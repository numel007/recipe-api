require("dotenv/config");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up database
require("./config/db-setup.js");

// Routes
const router = require("./routes/index.js");
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Recipe api listening on port ${process.env.PORT}`);
});

module.exports = app;
