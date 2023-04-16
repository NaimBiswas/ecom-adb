const express = require('express')
const router = express.Router()
const validate = require('../../../middlewares/validate')
const { createCategoryVal } = require('../../../validations/category.validation')
const {createCategory} =  require("../../../controllers/categories/category.controller")


router.post('/', validate(createCategoryVal) , createCategory)





module.exports = router


