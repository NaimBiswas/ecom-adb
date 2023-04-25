const GeneratorService = require("../../services/Generator.service")
const productModel = require("../../models/product/product.model")
const pdrService = new GeneratorService(productModel)
const httpStatus = require("http-status")
const ResError = require("../../utils/ResError")
class ProductController {

    constructor() {}

    async createPost (req, res, _next) {
        req.attachUser.create()
        const valQuery = {
            $or: [
                {name: req.body.name, "category.categoryId": req.body.category.categoryId},
                {name: req.body.name} 
            ]
        }
        req.valQuery = valQuery
       const createProduct = await pdrService.createPost(req)

       if(createProduct && !createProduct.error) {
            return res.status(httpStatus.CREATED).json({
                success:true,
                data: createProduct
            })
       }
       new ResError(httpStatus.BAD_REQUEST, createProduct.error, res)
    }

    async updateProduct (req, res, _next) {
        const { id } = req.params
        req.attachUser.modified()
        const updatedData = await pdrService.updateById(id, req.body)
        if (updatedData) return res.status(httpStatus.OK).json({ success: true, message: 'Product updated successfully', data: updatedData });
        new ResError(httpStatus.NOT_ACCEPTABLE, "No product found to be update", res)
    }


    async deleteProduct (req, res) {
        const {id} = req.params
        const deleteRec = await pdrService.deleteById(id)

        return res.status(httpStatus.OK).json({
            success:true,
            message: deleteRec
        })
    }

    async findProductById (req, res) {
        const {id} = req.params
        const data = await pdrService.getById(id)
        if(data && Object.keys(data).length > 0) {
            return res.status(httpStatus.OK).json({
                success:true, 
                data: data, 
            })
         }
         new ResError(httpStatus.NOT_FOUND, "No product found!", res)
    }

    async findAllProduct (req, res) {
        const allProducts = await pdrService.getAll()

        if(allProducts && allProducts.length) {
           return res.status(httpStatus.OK).json({success:true, data:allProducts, dataCount:allProducts.length})
        }
        new ResError(httpStatus.NOT_FOUND, "Product not found", res)
    }

}

module.exports = ProductController