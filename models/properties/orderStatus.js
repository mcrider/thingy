var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'OrderStatus' }
});
module.exports = mongoose.model('orderStatus', schema);