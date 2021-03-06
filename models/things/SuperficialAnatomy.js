var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ associatedPathophysiology: { type: Schema.Types.ObjectId, ref: 'associatedPathophysiology' },
  relatedAnatomy: { type: Schema.Types.ObjectId, ref: 'relatedAnatomy' },
  relatedCondition: { type: Schema.Types.ObjectId, ref: 'relatedCondition' },
  relatedTherapy: { type: Schema.Types.ObjectId, ref: 'relatedTherapy' },
  significance: { type: Schema.Types.ObjectId, ref: 'significance' },
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
module.exports = mongoose.model('SuperficialAnatomy', schema);