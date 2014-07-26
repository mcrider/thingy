var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "ProgramMembership" }
});
module.exports = mongoose.model('programMembershipUsed', schema);