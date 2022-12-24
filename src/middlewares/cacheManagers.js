const httpStatus = require("http-status");
const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 });

const setCache = async (key, value, time)  =>{
   storeCache =  myCache.set(key, value, time)
   return storeCache
}
const msetCache = async (value)  =>{
   storeCache =  myCache.mset(value)
   return storeCache
}
const getCacheVal = async (key)  =>{
   storeCache =  myCache.key(key)
   return storeCache
}

const checkIsValToSend = async (req,res, next)  => {
    const {key}  = req.headers
    const cacheVal = await getCacheVal(key)
    if(cacheVal) {
        return res.status(httpStatus[200]).json({
            success:true, 
            data: cacheVal
        })
    }
    next()
} 