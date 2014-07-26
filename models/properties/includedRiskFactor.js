var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MedicalRiskFactor" }
});
module.exports = mongoose.model('includedRiskFactor', schema);