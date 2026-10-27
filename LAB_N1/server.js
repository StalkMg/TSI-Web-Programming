const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "express")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "express", "index.html"));
});

app.listen(port, function () {
  console.log("Website running at http://localhost:" + port);
});