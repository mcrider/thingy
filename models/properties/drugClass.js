var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "DrugClass" }
});
module.exports = mongoose.model('drugClass', schema);