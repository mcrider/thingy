var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "WarrantyScope" }
});
module.exports = mongoose.model('warrantyScope', schema);