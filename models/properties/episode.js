var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'Episode' }
});
module.exports = mongoose.model('episode', schema);