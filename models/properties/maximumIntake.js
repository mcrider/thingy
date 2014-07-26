var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MaximumDoseSchedule" }
});
module.exports = mongoose.model('maximumIntake', schema);