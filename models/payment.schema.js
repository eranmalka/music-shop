var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
var PaymentScehma = new Schema({
        method: String,
        card_name: String,
        credit_type: String,
        credit_number: Number,
        expiration_date: date,
        card_verify:Number
});

module.export = PaymentScehma;
