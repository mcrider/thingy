var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MedicalEntity" }
});
module.exports = mongoose.model('causeOf', schema);