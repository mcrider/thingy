var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'DrugPrescriptionStatus' }
});
module.exports = mongoose.model('prescriptionStatus', schema);