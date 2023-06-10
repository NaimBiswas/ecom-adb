const mongoose = require('mongoose'); // Erase if already required
const { paginate, toJSON } = require('../plugins');

// Declare the Schema of the Mongo model
var categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    isActive: String,
    createdBy: String,
    modifiedBy: String,
    createdById: String,
    modifiedById: String,
    image:String
   
}, {timestamps: true});
// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);
//Export the model
const Category =  mongoose.model('Category', categorySchema);
module.exports = Category 