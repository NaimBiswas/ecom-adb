class ResError  {
    constructor(statusCode, message, res){
       res.status(statusCode).json({success:false, error:message})
    }
}

module.exports = ResError;