const httpStatus = require("http-status")
const categoryService = require("../../services/category/category.service")

const createCategory  = async (req, res) => {
    req.attachUser.create()
    const createCategory = await categoryService.createCategory(req,res)

    if(createCategory) return res.status(httpStatus.CREATED).json({success:true, data: createCategory})
}

const getAllCategory = async (req, res) => {
    const cat = await categoryService.getAllCategory(req, res)
    if(cat) return res.status(httpStatus.OK).json({success:true, data: cat})
}

const getCategoryById = async (req, res) => {
    const cat = await categoryService.getCategoryById(req, res)
    if(cat) return res.status(httpStatus.OK).json({success:true, data: cat})
}
const updateCategory = async (req, res) => {
    const cat = await categoryService.updateCategory(req, res)
    if(cat) return res.status(httpStatus.OK).json({success:true,message:"Category updated successfully", data: cat})
}
const deleteCategory = async (req, res) => {
    const cat = await categoryService.deleteCategory(req, res)
    if(cat) return res.status(httpStatus.OK).json({success:true,message:"Category deleted successfully", data: cat})
}

module.exports = {createCategory, getAllCategory,getCategoryById,updateCategory, deleteCategory}