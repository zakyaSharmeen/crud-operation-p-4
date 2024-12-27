const express = require("express");
// const userController = require("../controller/userController.js");

const {fetch, create, update, deleteUser} = require("../controller/userController");

const route = express.Router();


route.get("/getAllUsers", fetch);
route.post("/create", create)
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);



module.exports = route;
