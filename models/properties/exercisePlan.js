var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'ExercisePlan' }
});
module.exports = mongoose.model('exercisePlan', schema);