const express           = require('express');
const UserRoute         = express();
const userController    = require("../Controller/userController")

UserRoute.use(express.json());
UserRoute.use(express.urlencoded({ extended: true }))


UserRoute.get('/homeDetails',userController.getDetails )
module.exports = UserRoute