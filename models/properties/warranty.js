var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'WarrantyPromise' }
});
module.exports = mongoose.model('warranty', schema);