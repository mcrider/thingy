var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "ActionStatusType" }
});
module.exports = mongoose.model('actionStatus', schema);