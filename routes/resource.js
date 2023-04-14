var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var india_controller = require('../controllers/india');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// india ROUTES ///
// POST request for creating a india.
router.post('/india', india_controller.india_create_post);
// DELETE request to delete india.
router.delete('/india/:id', india_controller.india_delete);
// PUT request to update india.
router.put('/india/:id', india_controller.india_update_put);
// GET request for one india.
router.get('/india/:id', india_controller.india_detail);
// GET request for list of all india items.
router.get('/india', india_controller.india_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"india", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};