var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "ContactPointOption" }
});
module.exports = mongoose.model('contactOption', schema);