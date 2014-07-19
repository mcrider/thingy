var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'BrainStructure' }
});
module.exports = mongoose.model('sourcedFrom', schema);