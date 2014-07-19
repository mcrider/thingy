var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'RealEstateAgent' }
});
module.exports = mongoose.model('realEstateAgent', schema);