var express = require('express');
var controller = require('../controllers/category.controller');
var validator = require('../validation/category.validation');
var expressValidator = require('express-validator');
var app = express();
var router = express.Router();

console.log(validator);

router.get('/', controller.getCategories);

router.post('/', validator.post , controller.createCategory);

router.delete('/:id', validator.load, controller.deleteCategory);

router.put('/:id', validator.load, validator.put, controller.updateCategory);

router.param('id', controller.load);

module.exports = router;