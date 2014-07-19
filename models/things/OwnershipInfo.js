var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ typeOfGood: { type: Schema.Types.ObjectId, ref: 'typeOfGood' },
  ownedThrough: { type: Schema.Types.ObjectId, ref: 'ownedThrough' },
  ownedFrom: { type: Schema.Types.ObjectId, ref: 'ownedFrom' },
  acquiredFrom: { type: Schema.Types.ObjectId, ref: 'acquiredFrom' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('OwnershipInfo', schema);