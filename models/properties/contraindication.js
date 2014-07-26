var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "MedicalContraindication" }
});
module.exports = mongoose.model('contraindication', schema);