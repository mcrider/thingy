var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "AdministrativeArea" }
});
module.exports = mongoose.model('studyLocation', schema);