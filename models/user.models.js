var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var billingSchema = require('./billing.schema');
var paymentSchema = require('./payment.schema');

var userScehma = new Schema({
   first_name: {type: String, required: true},
   last_name: {type: String, required: true},
   email: String,
   password: String,
   wishlist: [Schema.Types.ObjectId],
   orders: Number,
   billing_information: [billingSchema],
   payment_information:[paymentSchema]
});

var user = mongoose.model('user', userScehma);

module.export = user;


