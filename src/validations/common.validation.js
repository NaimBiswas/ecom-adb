const Joi = require("joi");

class CommonValidation {
    constructor() {}



   static checkIdVal = {
        params: Joi.object().keys({
            id: Joi.string().required()
        })
    }
}

module.exports = {checkIdVal:CommonValidation.checkIdVal};