var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "Dataset" }
});
module.exports = mongoose.model('dataset', schema);