const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
   
   
}, {timestamps: true});

//Export the model
const Product =  mongoose.model('Product', ProductSchema);
module.exports = Product 