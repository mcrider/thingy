var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  Schema.Types.Mixed
});
module.exports = mongoose.model('price', schema);