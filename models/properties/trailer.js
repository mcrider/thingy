var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'VideoObject' }
});
module.exports = mongoose.model('trailer', schema);