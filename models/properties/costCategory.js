var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'DrugCostCategory' }
});
module.exports = mongoose.model('costCategory', schema);