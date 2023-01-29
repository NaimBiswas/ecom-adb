const express = require('express');
const isUnique = require("../../controllers/isUnique.controller")
const router = express.Router();

router.get('/:key/:value/:model', isUnique.checkIsUnique)

module.exports = router;
