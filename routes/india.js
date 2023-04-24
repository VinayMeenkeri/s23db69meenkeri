var express = require('express');
const india_controlers= require('../controllers/india');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET india */
router.get('/', india_controlers.india_view_all_Page);
/* GET detail india page */
router.get('/detail', india_controlers.india_view_one_Page);
/* GET create india page */
router.get('/create', india_controlers.india_create_Page);
/* GET create update page */
router.get('/update', secured, india_controlers.india_update_Page);
/* GET delete india page */
router.get('/delete', india_controlers.india_delete_Page);
module.exports = router;