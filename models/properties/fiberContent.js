var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "Mass" }
});
module.exports = mongoose.model('fiberContent', schema);