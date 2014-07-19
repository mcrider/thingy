var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ valueReference: { type: Schema.Types.ObjectId, ref: 'valueReference' },
  nonEqual: { type: Schema.Types.ObjectId, ref: 'nonEqual' },
  lesserOrEqual: { type: Schema.Types.ObjectId, ref: 'lesserOrEqual' },
  lesser: { type: Schema.Types.ObjectId, ref: 'lesser' },
  greaterOrEqual: { type: Schema.Types.ObjectId, ref: 'greaterOrEqual' },
  greater: { type: Schema.Types.ObjectId, ref: 'greater' },
  equal: { type: Schema.Types.ObjectId, ref: 'equal' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('QualitativeValue', schema);