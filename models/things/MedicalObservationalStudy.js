var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ studyDesign: { type: Schema.Types.ObjectId, ref: 'studyDesign' },
  studySubject: { type: Schema.Types.ObjectId, ref: 'studySubject' },
  studyLocation: { type: Schema.Types.ObjectId, ref: 'studyLocation' },
  status: { type: Schema.Types.ObjectId, ref: 'status' },
  sponsor: { type: Schema.Types.ObjectId, ref: 'sponsor' },
  population: { type: Schema.Types.ObjectId, ref: 'population' },
  outcome: { type: Schema.Types.ObjectId, ref: 'outcome' },
  study: { type: Schema.Types.ObjectId, ref: 'study' },
  relevantSpecialty: { type: Schema.Types.ObjectId, ref: 'relevantSpecialty' },
  recognizingAuthority: { type: Schema.Types.ObjectId, ref: 'recognizingAuthority' },
  medicineSystem: { type: Schema.Types.ObjectId, ref: 'medicineSystem' },
  guideline: { type: Schema.Types.ObjectId, ref: 'guideline' },
  code: { type: Schema.Types.ObjectId, ref: 'code' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('MedicalObservationalStudy', schema);