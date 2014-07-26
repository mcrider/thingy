var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MedicalTrialDesign" }
});
module.exports = mongoose.model('trialDesign', schema);