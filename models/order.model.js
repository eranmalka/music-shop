var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var billingSchema = require('./billing.schema');
var paymentSchema = require('./payment.schema');

var OrderScehma = new Schema({
    User:  {type: Schema.Types.ObjectId, required: true},
    Albums: [
        Album:Schema.Types.ObjectId,
        Quantity: Number
        ],
    Billing_information: [billingSchema],
    Payment_method: String, 
    Payment_information : [paymentSchema]
});

var order = mongoose.model('order', OrderScehma);

module.export = order;
