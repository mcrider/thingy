var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'EducationalOrganization' }
});
module.exports = mongoose.model('alumniOf', schema);