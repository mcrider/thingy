var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MedicalStudy" }
});
module.exports = mongoose.model('study', schema);