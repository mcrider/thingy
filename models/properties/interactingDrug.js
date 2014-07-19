var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'Drug' }
});
module.exports = mongoose.model('interactingDrug', schema);