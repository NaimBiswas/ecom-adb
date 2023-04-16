const Joi = require("joi");

const createCategoryVal = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        image: Joi.any(),
        isActive: Joi.boolean().required().default(true),
    })
}

module.exports = {
    createCategoryVal,
}