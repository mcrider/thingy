var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "DoseSchedule" }
});
module.exports = mongoose.model('doseSchedule', schema);