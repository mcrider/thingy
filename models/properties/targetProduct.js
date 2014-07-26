var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "SoftwareApplication" }
});
module.exports = mongoose.model('targetProduct', schema);