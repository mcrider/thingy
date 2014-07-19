var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'ImageObject' }
});
module.exports = mongoose.model('thumbnail', schema);