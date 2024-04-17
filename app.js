const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  if (!fs.existsSync("file.txt")) {
    fs.writeFileSync("file.txt", "");
  }
  fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
      res.send("Error reading file");
    } else {
      res.send(data);
    }
  });
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Server running on port ${process.env.port || port}`);
});
