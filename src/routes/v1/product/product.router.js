const express = require('express')
const ProductController = require('../../../controllers/product/product.controller')
const validate = require('../../../middlewares/validate')
const ProductValidation = require('../../../validations/product.validation')
const Router = express.Router()
const prdController = new ProductController()
const prdValidation = new ProductValidation
const { checkIdVal } = require('../../../validations/common.validation')

Router.get("/", prdController.findAllProduct)
Router.post("/", validate(prdValidation.createProductValidation), prdController.createPost)

Router.get("/:id", validate(checkIdVal), prdController.findProductById)
Router.delete("/:id", validate(checkIdVal), prdController.deleteProduct)
Router.patch("/:id", validate(checkIdVal,prdValidation.createProductValidation), prdController.updateProduct)




module.exports = Router