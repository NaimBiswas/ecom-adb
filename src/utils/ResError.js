class ResError  {
    constructor(statusCode, message, res){
      return res.status(statusCode).json({success:false, error:message})
    }
}

module.exports = ResError;