var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'MedicalSign' }
});
module.exports = mongoose.model('signDetected', schema);