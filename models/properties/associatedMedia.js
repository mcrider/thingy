var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MediaObject" }
});
module.exports = mongoose.model('associatedMedia', schema);