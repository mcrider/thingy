var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'InfectiousAgentClass' }
});
module.exports = mongoose.model('infectiousAgentClass', schema);