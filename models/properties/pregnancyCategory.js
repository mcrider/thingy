var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "DrugPregnancyCategory" }
});
module.exports = mongoose.model('pregnancyCategory', schema);