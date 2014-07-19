var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'Muscle' }
});
module.exports = mongoose.model('nerveMotor', schema);