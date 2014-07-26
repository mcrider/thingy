var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "Place" }
});
module.exports = mongoose.model('dropoffLocation', schema);