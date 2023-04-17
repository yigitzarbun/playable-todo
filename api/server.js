const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const fileupload = require("express-fileupload");

//const morgan = require("morgan");
// routers
const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
const tasksRouter = require("./tasks/tasks-router");
const fileUpload = require("express-fileupload");
// server
const server = express();
server.use(
  fileupload({
    createParentPath: true,
  })
);
server.use(helmet());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
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
