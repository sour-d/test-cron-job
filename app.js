import express from "express";
import fs from "fs";
import main from "./pingWebsite.js";

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
  console.log("got pinged");
  res.send("pong");
});

app.listen(port, () => {
  main();
  console.log(`Server running on port ${process.env.port || port}`);
});
