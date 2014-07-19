var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'OfferItemCondition' }
});
module.exports = mongoose.model('itemCondition', schema);