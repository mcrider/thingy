var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'MedicalIndication' }
});
module.exports = mongoose.model('indication', schema);