var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ reviewCount: { type: Schema.Types.ObjectId, ref: 'reviewCount' },
  ratingCount: { type: Schema.Types.ObjectId, ref: 'ratingCount' },
  itemReviewed: { type: Schema.Types.ObjectId, ref: 'itemReviewed' },
  worstRating: { type: Schema.Types.ObjectId, ref: 'worstRating' },
  ratingValue: { type: Schema.Types.ObjectId, ref: 'ratingValue' },
  bestRating: { type: Schema.Types.ObjectId, ref: 'bestRating' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('AggregateRating', schema);