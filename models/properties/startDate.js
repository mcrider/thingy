var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  Date
});
module.exports = mongoose.model('startDate', schema);