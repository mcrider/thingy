var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ supplyTo: { type: Schema.Types.ObjectId, ref: 'supplyTo' },
  source: { type: Schema.Types.ObjectId, ref: 'source' },
  arterialBranch: { type: Schema.Types.ObjectId, ref: 'arterialBranch' },
  subStructure: { type: Schema.Types.ObjectId, ref: 'subStructure' },
  relatedTherapy: { type: Schema.Types.ObjectId, ref: 'relatedTherapy' },
  relatedCondition: { type: Schema.Types.ObjectId, ref: 'relatedCondition' },
  partOfSystem: { type: Schema.Types.ObjectId, ref: 'partOfSystem' },
  function: { type: Schema.Types.ObjectId, ref: 'function' },
  diagram: { type: Schema.Types.ObjectId, ref: 'diagram' },
  connectedTo: { type: Schema.Types.ObjectId, ref: 'connectedTo' },
  bodyLocation: { type: Schema.Types.ObjectId, ref: 'bodyLocation' },
  associatedPathophysiology: { type: Schema.Types.ObjectId, ref: 'associatedPathophysiology' },
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
module.exports = mongoose.model('Artery', schema);