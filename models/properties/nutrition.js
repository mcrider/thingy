var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "NutritionInformation" }
});
module.exports = mongoose.model('nutrition', schema);