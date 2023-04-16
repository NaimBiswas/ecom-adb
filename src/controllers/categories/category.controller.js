const httpStatus = require("http-status")
const categoryService = require("../../services/category/category.service")

const createCategory  = async (req, res) => {
    req.attachUser.create()
    const createCategory = await categoryService.createCategory(req,res)

    if(createCategory) return res.status(httpStatus.CREATED).json({success:true, details: createCategory})
}

const getAllCategory = async (req, res) => {

}

const getCategoryById = async (req, res) => {

}
const updateCategory = async (req, res) => {

}
const deleteCategory = async (req, res) => {

}

module.exports = {createCategory, getAllCategory,getCategoryById,updateCategory, deleteCategory}