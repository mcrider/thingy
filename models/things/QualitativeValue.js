var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ equal: { type: Schema.Types.ObjectId, ref: 'equal' },
  greater: { type: Schema.Types.ObjectId, ref: 'greater' },
  greaterOrEqual: { type: Schema.Types.ObjectId, ref: 'greaterOrEqual' },
  lesser: { type: Schema.Types.ObjectId, ref: 'lesser' },
  lesserOrEqual: { type: Schema.Types.ObjectId, ref: 'lesserOrEqual' },
  nonEqual: { type: Schema.Types.ObjectId, ref: 'nonEqual' },
  valueReference: { type: Schema.Types.ObjectId, ref: 'valueReference' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('QualitativeValue', schema);