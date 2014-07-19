var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'PaymentMethod' }
});
module.exports = mongoose.model('acceptedPaymentMethod', schema);