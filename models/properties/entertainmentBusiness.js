var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'EntertainmentBusiness' }
});
module.exports = mongoose.model('entertainmentBusiness', schema);