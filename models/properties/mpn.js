var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  String
});
module.exports = mongoose.model('mpn', schema);