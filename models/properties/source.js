var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'AnatomicalStructure' }
});
module.exports = mongoose.model('source', schema);