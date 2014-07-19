var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'MedicalSignOrSymptom' }
});
module.exports = mongoose.model('signOrSymptom', schema);