var express = require('express');
var router = express.Router();
const newURLCtrl = require('../controller/newURL');

// Define routes for the "newURL" functionality
router.get('/new', newURLCtrl.new);
router.post('/create', newURLCtrl.create);


module.exports = router;