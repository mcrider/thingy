var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "PostalAddress" }
});
module.exports = mongoose.model('servicePostalAddress', schema);