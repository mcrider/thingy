var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'DDxElement' }
});
module.exports = mongoose.model('differentialDiagnosis', schema);