const mongoose= require('mongoose'); // Erase if already required
const {Types}= require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
    name: String,
    manufacturerName: String,
    manufacturerBrand: String,
    price: Number,
    discount: Number,
    discountPrice: Number,
    category: {
        categoryId: String,
        name: String
    },
    productDescription: String,
    productImage: mongoose.Schema.Types.Mixed,
    metaTitle: String,
    metaKeys: String,
    metaDescription: String,
    originPrice:  Number,
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: String,
    modifiedBy: String
}, {timestamps: true});

//Export the model
const Product =  mongoose.model('Product', ProductSchema);
module.exports = Product 