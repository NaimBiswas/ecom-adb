class AttachUser {
    _req;
    constructor(req){ this._req = req };

    create() {
        this._req.body =  {...this._req.body, ...{createdBy: this._req.user.name, modifiedBy: this._req.user.name, createdById: this._req.user._id, modifiedById: this._req.user._id}}
    }
    modified() {
        this._req.body =  {...this._req.body, ...{modifiedBy: this._req.user.name, modifiedById: this._req.user._id}}
    }

} 

module.exports = AttachUser