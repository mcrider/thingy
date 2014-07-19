var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ seriousAdverseOutcome: { type: Schema.Types.ObjectId, ref: 'seriousAdverseOutcome' },
  indication: { type: Schema.Types.ObjectId, ref: 'indication' },
  duplicateTherapy: { type: Schema.Types.ObjectId, ref: 'duplicateTherapy' },
  contraindication: { type: Schema.Types.ObjectId, ref: 'contraindication' },
  adverseOutcome: { type: Schema.Types.ObjectId, ref: 'adverseOutcome' },
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
module.exports = mongoose.model('PsychologicalTreatment', schema);