var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MedicalDevice" }
});
module.exports = mongoose.model('usesDevice', schema);