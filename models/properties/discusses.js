var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "CreativeWork" }
});
module.exports = mongoose.model('discusses', schema);