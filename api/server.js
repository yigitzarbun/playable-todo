const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// routers

// server
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

server.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = server;
