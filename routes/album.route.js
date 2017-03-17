var express = require('express');
var controller = require('../controllers/albums.controller');
var app = express();
var router = express.Router();

router.get('/', function(req, res) {
    console.log('im in albums get method');
    res.end('');
});

router.post('/', function(req, res) {
    console.log('im in albums post method');
    res.end('');
});

router.delete('/:id', function(req, res) {
    console.log('im in albums delete method');
    res.end('');
});

router.put('/:id', function(req, res) {
    console.log('im in albums update method');
    res.end('');
});

/*router.params('id', controller.load);*/

module.exports = router;