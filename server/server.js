const express = require("express");
const app = express();
const port = 8000;
const projects = require("./data/projects.json");
app.get("/", (req, res) => {
  res.send("Backend server is working");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/projects", (req, res) => {
  return res.status(200).json({ status: 200, data: projects });
});
