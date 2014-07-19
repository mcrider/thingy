var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'BusinessEntityType' }
});
module.exports = mongoose.model('eligibleCustomerType', schema);