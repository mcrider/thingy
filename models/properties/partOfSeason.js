var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "Season" }
});
module.exports = mongoose.model('partOfSeason', schema);