var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "QualitativeValue" }
});
module.exports = mongoose.model('lesser', schema);