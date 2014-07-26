var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "BroadcastService" }
});
module.exports = mongoose.model('parentService', schema);