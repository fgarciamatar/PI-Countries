const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes");
const cors = require('cors');

const server = express();
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());


server.use(mainRouter);

module.exports = server;
