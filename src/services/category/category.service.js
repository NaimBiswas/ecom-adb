const httpStatus = require("http-status");
const Category = require("../../models/category/category.model");
const ResError = require("../../utils/resError");

const createCategory = async (req, res, next) => {
    const {name} = req.body
    const cat = await Category.find({name: name})
    if(cat && cat.length > 0) {
         new ResError(httpStatus.NOT_ACCEPTABLE, "Category already exists", res)
         return
    }
    return  await Category.create(category)
}


module.exports = {createCategory}