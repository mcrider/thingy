var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  Boolean
});
module.exports = mongoose.model('valueAddedTaxIncluded', schema);