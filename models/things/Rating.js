var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ worstRating: { type: Schema.Types.ObjectId, ref: 'worstRating' },
  ratingValue: { type: Schema.Types.ObjectId, ref: 'ratingValue' },
  bestRating: { type: Schema.Types.ObjectId, ref: 'bestRating' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('Rating', schema);