var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategoryScehma = new Schema({
    name: String
});

var category = mongoose.model('category', CategoryScehma);

module.export = category;
