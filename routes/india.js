var express = require('express');
const india_controlers= require('../controllers/india');
var router = express.Router();

/* GET india */
router.get('/', india_controlers.india_view_all_Page);
module.exports = router;