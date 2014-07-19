var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'DayOfWeek' }
});
module.exports = mongoose.model('dayOfWeek', schema);