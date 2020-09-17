const express = require("express");
const Animals = require("./animals-model.js");
const server = express();
server.use(express.json());