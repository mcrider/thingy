var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'WebPageElement' }
});
module.exports = mongoose.model('mainContentOfPage', schema);