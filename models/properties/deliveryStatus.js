var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "DeliveryEvent" }
});
module.exports = mongoose.model('deliveryStatus', schema);