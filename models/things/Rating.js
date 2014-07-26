var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ bestRating: { type: Schema.Types.ObjectId, ref: 'bestRating' },
  ratingValue: { type: Schema.Types.ObjectId, ref: 'ratingValue' },
  worstRating: { type: Schema.Types.ObjectId, ref: 'worstRating' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('Rating', schema);