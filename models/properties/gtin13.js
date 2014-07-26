var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  String
});
module.exports = mongoose.model('gtin13', schema);