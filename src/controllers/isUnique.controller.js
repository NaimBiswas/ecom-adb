const { Mongoose } = require("mongoose")
const { Db }  =  require("mongodb");
const User = require("../models/user.model");

async function checkIsUnique(req, res) {
    const {key, value, model} = req.params
    var data
    switch (model) {
        case 'user':
             data = await User.find({[key]:value})
            break;
        default:
            break;
    }
    if(data && data.length) {
      return  res.status(400).json({
            success:false, 
            message:   `${key} must be unique`
        })
    }
    return res.status(200).send({success:true})
}

module.exports = {checkIsUnique}