var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ associatedPathophysiology: { type: Schema.Types.ObjectId, ref: 'associatedPathophysiology' },
  bodyLocation: { type: Schema.Types.ObjectId, ref: 'bodyLocation' },
  connectedTo: { type: Schema.Types.ObjectId, ref: 'connectedTo' },
  diagram: { type: Schema.Types.ObjectId, ref: 'diagram' },
  function: { type: Schema.Types.ObjectId, ref: 'function' },
  partOfSystem: { type: Schema.Types.ObjectId, ref: 'partOfSystem' },
  relatedCondition: { type: Schema.Types.ObjectId, ref: 'relatedCondition' },
  relatedTherapy: { type: Schema.Types.ObjectId, ref: 'relatedTherapy' },
  subStructure: { type: Schema.Types.ObjectId, ref: 'subStructure' },
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
module.exports = mongoose.model('BrainStructure', schema);