var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'MedicalSpecialty' }
});
module.exports = mongoose.model('relevantSpecialty', schema);