var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'ContactPoint' }
});
module.exports = mongoose.model('serviceSmsNumber', schema);