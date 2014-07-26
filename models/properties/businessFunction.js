var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "BusinessFunction" }
});
module.exports = mongoose.model('businessFunction', schema);