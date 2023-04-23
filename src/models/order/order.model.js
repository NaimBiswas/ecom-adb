const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var OrderSchema = new mongoose.Schema({
    customer:{
        name: String,
        country: String,
        status: Boolean,
        userId: String,
        paymentAddress: String,
        ShippingAddress: String
    },
    paymentMethod: String,
    ShippingMethod: String,
    OrderId:Number,
    OrderDate:Date,
    productDetails:[
        {
            name: String,
            quantity: Number,
            price:Number,
            total:Number,
            productId:String,
        }
    ],
    subTotal:Number,
    shippingCost:Number,
    total:Number,
    orderComment:String,
    OrderHistory:[
        {
            dateAdded:Date,
            status:String,
            comment:String,
        }
    ]

   
}, {timestamps: true});

//Export the model
const Order =  mongoose.model('Order', OrderSchema);
module.exports = Order 