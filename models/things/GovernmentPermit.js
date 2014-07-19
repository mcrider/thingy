var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ validUntil: { type: Schema.Types.ObjectId, ref: 'validUntil' },
  validIn: { type: Schema.Types.ObjectId, ref: 'validIn' },
  validFrom: { type: Schema.Types.ObjectId, ref: 'validFrom' },
  validFor: { type: Schema.Types.ObjectId, ref: 'validFor' },
  permitAudience: { type: Schema.Types.ObjectId, ref: 'permitAudience' },
  issuedThrough: { type: Schema.Types.ObjectId, ref: 'issuedThrough' },
  issuedBy: { type: Schema.Types.ObjectId, ref: 'issuedBy' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('GovernmentPermit', schema);