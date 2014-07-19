var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'MusicGroup' }
});
module.exports = mongoose.model('byArtist', schema);