var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "OpeningHoursSpecification" }
});
module.exports = mongoose.model('hoursAvailable', schema);