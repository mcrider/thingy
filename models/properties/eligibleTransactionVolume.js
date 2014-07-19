var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'PriceSpecification' }
});
module.exports = mongoose.model('eligibleTransactionVolume', schema);