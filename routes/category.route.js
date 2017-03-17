var express = require('express');
var controller = require('../controllers/category.controller');
var validator = require('../validation/category.validation');
var expressValidator = require('express-validator');
var app = express();
var router = express.Router();

console.log(validator);

router.get('/', function(req, res) {
    console.log('im in category get method');
    res.end('');
});

router.post('/', validator.post , function(req, res) {
    console.log('im in category post method');
    res.end('');
});

router.delete('/:id', function(req, res) {
    console.log('im in category delete method');
    res.end('');
});

router.put('/:id', function(req, res) {
    console.log('im in category update method');
    res.end('');
});

/*router.params('id', controller.load);*/

module.exports = router;