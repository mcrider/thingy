var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'MedicineSystem' }
});
module.exports = mongoose.model('medicineSystem', schema);