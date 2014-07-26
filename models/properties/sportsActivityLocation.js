var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "SportsActivityLocation" }
});
module.exports = mongoose.model('sportsActivityLocation', schema);