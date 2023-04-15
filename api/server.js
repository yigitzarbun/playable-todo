const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// routers
const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
const tasksRouter = require("./tasks/tasks-router");
// server
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

// server.use routers
server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);
server.use("/api/tasks", tasksRouter);
server.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = server;
