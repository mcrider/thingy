var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "Nerve" }
});
module.exports = mongoose.model('nerve', schema);