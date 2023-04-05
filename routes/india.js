var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('india', { title: 'Search Results india' });
});

module.exports = router;
