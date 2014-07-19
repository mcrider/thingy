var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'Product' }
});
module.exports = mongoose.model('itemOffered', schema);