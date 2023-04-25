const { ObjectID } = require("bson");
class Generator {
    _Model
    constructor(Model){
        this._Model = Model
    }


    async createPost (req) {
        const {body, valQuery} = req
        if(valQuery) {
            const checkTitleForSameCategory = await this._Model.find(valQuery)
            if(checkTitleForSameCategory && checkTitleForSameCategory.length) {
                return {
                    error:"Product name with same category already exists",
                }
            }
        }         
        const save = new this._Model(body);
        const savedInfo = await save.save();

        return savedInfo;
    }

    async getById (id) {
        const getData = await this._Model.findById(id)
        return getData
    }

    async updateById (id, data) {
        const updatedData = await this._Model.findByIdAndUpdate(id, { ...data }, { new: true })
        if (updatedData) return updatedData

    }

    async getAll () {
        const getAll = await this._Model.find({isActive: true})
        return getAll
    }

    async deleteById (id) {
        const data = await this._Model.update({_id:ObjectID(id)}, {$set: {
            isActive: false
        }})
        return "Deleted Successfully 🙄"
    }
}


module.exports = Generator;