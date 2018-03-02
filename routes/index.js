var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
/* GET contries page. */
router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'countries' });
});
/* GET prices page. */
router.get('/prices', function(req, res, next) {
    res.render('prices', { title: 'Prices' });
});
/* GET contacts page. */
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Contacts' });
});

module.exports = router;