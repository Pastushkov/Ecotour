var express = require('express');
var router = express.Router();
var countryController = require('../controllers/countryController.js');

router.get('/countries', countryController.all);

router.get('/country/:id',function(){

});
router.route('/country/:countryId')
    .get(countryController.read)
    .put(countryController.update)
    .delete(countryController.delete);

module.exports = router;