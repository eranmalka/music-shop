var express = require('express');
var albumsRoute = require('./album.route');
var categoryRoute = require('./category.route');

var router = express.Router();

router.use('/albums', albumsRoute);
router.use('/categories', categoryRoute);


module.exports = router;

