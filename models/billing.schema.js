var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var BillingScehma = new Schema({
        city: String,
		street: String,
        house_number:Number,
		Zip: Number,
		Telephone: Number
});

module.export = BillingScehma;
