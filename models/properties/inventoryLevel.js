var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'QuantitativeValue' }
});
module.exports = mongoose.model('inventoryLevel', schema);