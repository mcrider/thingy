var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'Specialty' }
});
module.exports = mongoose.model('specialty', schema);