var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "Answer" }
});
module.exports = mongoose.model('suggestedAnswer', schema);