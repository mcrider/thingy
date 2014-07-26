var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  Number
});
module.exports = mongoose.model('value', schema);