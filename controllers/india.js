var india = require('../models/india');
// List of all india
exports.india_list = function(req, res) {
res.send('NOT IMPLEMENTED: india list');
};
// for a specific india.
exports.india_detail = function(req, res) {
res.send('NOT IMPLEMENTED: india detail: ' + req.params.id);
};
// Handle india create on POST.
exports.india_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: india create POST');
};
// Handle india delete form on DELETE.
exports.india_delete = function(req, res) {
res.send('NOT IMPLEMENTED: india delete DELETE ' + req.params.id);
};
// Handle india update form on PUT.
exports.india_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: india update PUT' + req.params.id);
};

// List of all india
exports.india_list = async function(req, res) {
    try{
    theIndia = await india.find();
    res.send(theIndia);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.india_view_all_Page = async function(req, res) {
    try{
        theIndia = await india.find();
    res.render('india', { title: 'india Search Results', results: theIndia });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };