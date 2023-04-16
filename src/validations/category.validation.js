const Joi = require("joi");

const createCategoryVal = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        image: Joi.any(),
        isActive: Joi.boolean().required().default(true),
    })
}
const checkIdVal = {
    params: Joi.object().keys({
        id: Joi.string().required()
    })
}

module.exports = {
    createCategoryVal,
    checkIdVal
}