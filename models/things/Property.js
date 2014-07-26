var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ domainIncludes: { type: Schema.Types.ObjectId, ref: 'domainIncludes' },
  inverseOf: { type: Schema.Types.ObjectId, ref: 'inverseOf' },
  supercededBy: { type: Schema.Types.ObjectId, ref: 'supercededBy' },
  rangeIncludes: { type: Schema.Types.ObjectId, ref: 'rangeIncludes' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('Property', schema);