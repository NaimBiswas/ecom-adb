const Joi = require("joi")

class ProductValidation  {
    rString = Joi.string().required();
    rNumber = Joi.number().required();
    constructor(){}

    createProductValidation = {
        body: Joi.object().keys({
            name: this.rString.max(70).min(3),
            manufacturerName: this.rString,
            manufacturerBrand: this.rString,
            price: this.rNumber,
            discount: this.rNumber,
            discountPrice: this.rNumber,
            category: Joi.object().keys({
                categoryId: this.rString,
                name: this.rString
            }).required(),
            productDescription: this.rString.max(500).min(10),
            productImage: Joi.any().required(),
            metaTitle: this.rString.max(70),
            metaKeys: this.rString.max(100),
            metaDescription: this.rString.max(500).min(10),
            originPrice:  this.rNumber,
            isActive: Joi.boolean().required(),
        })
    }
} 

module.exports = ProductValidation