var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ associatedPathophysiology: { type: Schema.Types.ObjectId, ref: 'associatedPathophysiology' },
  comprisedOf: { type: Schema.Types.ObjectId, ref: 'comprisedOf' },
  relatedCondition: { type: Schema.Types.ObjectId, ref: 'relatedCondition' },
  relatedStructure: { type: Schema.Types.ObjectId, ref: 'relatedStructure' },
  relatedTherapy: { type: Schema.Types.ObjectId, ref: 'relatedTherapy' },
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
module.exports = mongoose.model('AnatomicalSystem', schema);