var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "FoodEvent" }
});
module.exports = mongoose.model('foodEvent', schema);