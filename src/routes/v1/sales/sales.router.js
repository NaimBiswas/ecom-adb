const express = require('express')
const { getSellsDetails } = require('../../../controllers/sales/sales.controller')

const Router = express.Router()

Router.get("/", getSellsDetails)

module.exports = Router