class AttachUser {
    _req;
    constructor(req){ this._req = req };

    create() {
        this._req.body =  {...this._req.body, ...{createdBy: this._req.user.firstName +" "+ this._req.user.lastName, modifiedBy: this._req.user.firstName +" "+ this._req.user.lastName, createdById: this._req.user._id, modifiedById: this._req.user._id}}
    }
    modified() {
        delete this._req.body.createdAt
        delete this._req.body.updatedAt
        this._req.body =  {...this._req.body, ...{modifiedBy: this._req.user.firstName +" "+ this._req.user.lastName, modifiedById: this._req.user._id}}
    }

} 

module.exports = AttachUser