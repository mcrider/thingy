var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "AnatomicalSystem" }
});
module.exports = mongoose.model('partOfSystem', schema);