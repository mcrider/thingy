var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'MedicalEvidenceLevel' }
});
module.exports = mongoose.model('evidenceLevel', schema);