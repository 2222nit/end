const express = require("express")
const route = express.Router()

const {createuser } = require("../Controller/usercontroller")


route.post("/createuser", createuser)

module.exports = route