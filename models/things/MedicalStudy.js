var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ outcome: { type: Schema.Types.ObjectId, ref: 'outcome' },
  population: { type: Schema.Types.ObjectId, ref: 'population' },
  sponsor: { type: Schema.Types.ObjectId, ref: 'sponsor' },
  status: { type: Schema.Types.ObjectId, ref: 'status' },
  studyLocation: { type: Schema.Types.ObjectId, ref: 'studyLocation' },
  studySubject: { type: Schema.Types.ObjectId, ref: 'studySubject' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  code: { type: Schema.Types.ObjectId, ref: 'code' },
  guideline: { type: Schema.Types.ObjectId, ref: 'guideline' },
  medicineSystem: { type: Schema.Types.ObjectId, ref: 'medicineSystem' },
  recognizingAuthority: { type: Schema.Types.ObjectId, ref: 'recognizingAuthority' },
  relevantSpecialty: { type: Schema.Types.ObjectId, ref: 'relevantSpecialty' },
  study: { type: Schema.Types.ObjectId, ref: 'study' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('MedicalStudy', schema);