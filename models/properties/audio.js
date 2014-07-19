var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'AudioObject' }
});
module.exports = mongoose.model('audio', schema);