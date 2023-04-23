const Order = require("../../models/order/order.model");
const Product = require("../../models/product/product.model");
const GenerateTimeSlot = require("../../utils/GenerateTimeSlot");

const getTodaySells = async () => {
    const GenerateTime = new GenerateTimeSlot()
    const {dayStart, dayEnd} = GenerateTime.getToday()

    const todayOrders = await Order.find({createdAt:{$gte:dayStart, $lte:dayEnd}}, {total:1, shippingCost:1})
    const sells = todayOrders.length ? todayOrders?.map(_odr => _odr.total + _odr.shippingCost)?.reduceRight((a, b) => a + b) : 0
    return {
        sells: sells, 
        orderCount: todayOrders.length
    }
}
const getTodayRevenue = async () => {
    let revenueCount = 0
    const GenerateTime = new GenerateTimeSlot()
    const {dayStart, dayEnd} = GenerateTime.getToday()

    const todayOrders = await Order.find({createdAt:{$gte:dayStart, $lte:dayEnd}}, {productDetails:1})
    if(todayOrders && todayOrders.length) {
        const allProductIds = todayOrders.map(_odr => _odr.productId)
        const allProducts = await Product.find({_id:{$in:allProductIds}}, {price:1, sellingPrice:1, originalPrice:1})

        allProducts.forEach(_product => {
            const {price, quantity} = todayOrders.find(_odrProduct => _odrProduct.productId === _product._id.valueOf())
            revenueCount += (price - _product.originalPrice) * quantity 
        })
    }
    return {
        sells: revenueCount, 
        orderCount: todayOrders.length
    }
}
const getTotalSales = async () => {
    const GenerateTime = new GenerateTimeSlot()
    const {startDate, endDate} = GenerateTime.getMonth()

    const todayOrders = await Order.find({createdAt:{$gte:startDate, $lte:endDate}}, {total:1, shippingCost:1})
    const sells = todayOrders.length ? todayOrders?.map(_odr => _odr.total + _odr.shippingCost)?.reduceRight((a, b) => a + b) : 0
    return {
        sells: sells, 
        orderCount: todayOrders.length
    }
}
const getTotalRevenue = async () => {
     let revenueCount = 0
    const GenerateTime = new GenerateTimeSlot()
    const { startDate, endDate } = GenerateTime.getMonth()

    const todayOrders = await Order.find({createdAt:{$gte:startDate, $lte:endDate}}, {productDetails:1})

    if(todayOrders && todayOrders.length) {
        const allProductIds = todayOrders.map(_odr => _odr.productId)
        const allProducts = await Product.find({_id:{$in:allProductIds}}, {price:1, sellingPrice:1, originalPrice:1})

        allProducts.forEach(_product => {
            const {price, quantity} = todayOrders.find(_odrProduct => _odrProduct.productId === _product._id.valueOf())
            revenueCount += (price - _product.originalPrice) * quantity 
        })
    }
    return {
        sells: revenueCount, 
        orderCount: todayOrders.length
    }
}




module.exports = {
    getTodayRevenue,
    getTodaySells,
    getTotalRevenue,
    getTotalSales
}