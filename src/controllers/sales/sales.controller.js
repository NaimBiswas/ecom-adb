const httpStatus = require("http-status")
const { getTodaySells, getTodayRevenue, getTotalSales, getTotalRevenue } = require("../../services/sales/sales.service")

const getSellsDetails = async (req, res) => {
    const {query}  = req.query
    if(!query){
       return res.status(httpStatus.BAD_REQUEST).json({message:"Bad request", error:"Query missing", success:false})
    }
    let queryData
    switch (query) {
        case "todaySales":
            queryData = await getTodaySells()
            break;
        case "todayRevenue":
          queryData = await  getTodayRevenue()
            break;
        case "totalSales":
          queryData = await  getTotalSales()
            break;
        case "totalRevenue": 
          queryData = await  getTotalRevenue()
            break;
        default:
            res.status(httpStatus.NOT_FOUND).json({message:"Bad request", error:`${query} Query not matched with our request`, success:false})
            break;
    }
    res.status(httpStatus.OK).json({data: queryData, success:true})
}

module.exports = {
    getSellsDetails: getSellsDetails,
}