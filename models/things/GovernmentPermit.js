var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ issuedThrough: { type: Schema.Types.ObjectId, ref: 'issuedThrough' },
  permitAudience: { type: Schema.Types.ObjectId, ref: 'permitAudience' },
  validFor: { type: Schema.Types.ObjectId, ref: 'validFor' },
  validFrom: { type: Schema.Types.ObjectId, ref: 'validFrom' },
  validIn: { type: Schema.Types.ObjectId, ref: 'validIn' },
  validUntil: { type: Schema.Types.ObjectId, ref: 'validUntil' },
  issuedBy: { type: Schema.Types.ObjectId, ref: 'issuedBy' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('GovernmentPermit', schema);