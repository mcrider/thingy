var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'Vessel' }
});
module.exports = mongoose.model('drainsTo', schema);