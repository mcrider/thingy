var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'BookFormatType' }
});
module.exports = mongoose.model('bookFormat', schema);