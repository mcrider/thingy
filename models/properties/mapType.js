var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MapCategoryType" }
});
module.exports = mongoose.model('mapType', schema);