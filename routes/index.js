var express = require('express');
var router = express.Router();
const indexCtrl = require('../controller/index')

/* GET home page. */
router.get('/', indexCtrl.index);

router.delete('/:id', indexCtrl.delete);

router.put('/update/:id', indexCtrl.update);

module.exports = router;


