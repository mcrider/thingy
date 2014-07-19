var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: 'MedicalImagingTechnique' }
});
module.exports = mongoose.model('imagingTechnique', schema);