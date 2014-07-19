var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'ProductModel' }
});
module.exports = mongoose.model('isVariantOf', schema);