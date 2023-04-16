const express = require('express')
const router = express.Router()
const validate = require('../../../middlewares/validate')
const { createCategoryVal, checkIdVal } = require('../../../validations/category.validation')
const {createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory} =  require("../../../controllers/categories/category.controller")


router.post('/', validate(createCategoryVal) , createCategory)
router.get('/', getAllCategory)

router.get('/:id', validate(checkIdVal), getCategoryById)
router.patch('/:id', validate(checkIdVal), validate(createCategoryVal), updateCategory)
router.get('/:id', validate(checkIdVal), deleteCategory)




module.exports = router


