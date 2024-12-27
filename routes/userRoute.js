const express = require("express");
// const userController = require("../controller/userController.js");

const {fetch, create} = require("../controller/userController");

const route = express.Router();


route.get("/fetch", fetch);
route.post("/create", create)

module.exports = route;
