const { ObjectID } = require("bson");
const httpStatus = require("http-status");
const Category = require("../../models/category/category.model");
const ResError = require("../../utils/ResError");

const createCategory = async (req, res, next) => {
    const { name } = req.body
    const cat = await Category.find({ name: name })
    if (cat && cat.length > 0) {
        new ResError(httpStatus.NOT_ACCEPTABLE, "Category already exists", res)
        return
    }
    const catSave = await new Category(req.body)

    return await catSave.save()
}
const getAllCategory = async (req, res) => {
    const categories = await Category.find({})
    if (categories && categories.length > 0) return categories
    new ResError(httpStatus.NOT_ACCEPTABLE, "No Category Found", res)
    return
}

const getCategoryById = async (req, res) => {
    const { id } = req.params
    const categories = await Category.findById(id)
    if (categories) return categories
    new ResError(httpStatus.NOT_ACCEPTABLE, "Category not found", res)
    return
}
const updateCategory = async (req, res) => {
    const { id } = req.params
    req.attachUser.modified()
    const categories = await Category.findByIdAndUpdate(id, { ...req.body }, { new: true })
    if (categories) return categories
    new ResError(httpStatus.NOT_ACCEPTABLE, "Category not found", res)
    return
}
const deleteCategory = async (req, res) => {
    const { id } = req.params

    req.attachUser.modified()

    const categories = await Category.findByIdAndUpdate(id, { isActive: false }, { new: true })

    if (categories) return categories

    new ResError(httpStatus.NOT_ACCEPTABLE, "Category not found", res)
    return
}

module.exports = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}