var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ aggregateRating: { type: Schema.Types.ObjectId, ref: 'aggregateRating' },
  audience: { type: Schema.Types.ObjectId, ref: 'audience' },
  brand: { type: Schema.Types.ObjectId, ref: 'brand' },
  color: { type: Schema.Types.ObjectId, ref: 'color' },
  depth: { type: Schema.Types.ObjectId, ref: 'depth' },
  gtin13: { type: Schema.Types.ObjectId, ref: 'gtin13' },
  gtin14: { type: Schema.Types.ObjectId, ref: 'gtin14' },
  gtin8: { type: Schema.Types.ObjectId, ref: 'gtin8' },
  height: { type: Schema.Types.ObjectId, ref: 'height' },
  isAccessoryOrSparePartFor: { type: Schema.Types.ObjectId, ref: 'isAccessoryOrSparePartFor' },
  isConsumableFor: { type: Schema.Types.ObjectId, ref: 'isConsumableFor' },
  isRelatedTo: { type: Schema.Types.ObjectId, ref: 'isRelatedTo' },
  isSimilarTo: { type: Schema.Types.ObjectId, ref: 'isSimilarTo' },
  itemCondition: { type: Schema.Types.ObjectId, ref: 'itemCondition' },
  logo: { type: Schema.Types.ObjectId, ref: 'logo' },
  manufacturer: { type: Schema.Types.ObjectId, ref: 'manufacturer' },
  model: { type: Schema.Types.ObjectId, ref: 'model' },
  mpn: { type: Schema.Types.ObjectId, ref: 'mpn' },
  offers: { type: Schema.Types.ObjectId, ref: 'offers' },
  productID: { type: Schema.Types.ObjectId, ref: 'productID' },
  releaseDate: { type: Schema.Types.ObjectId, ref: 'releaseDate' },
  review: { type: Schema.Types.ObjectId, ref: 'review' },
  sku: { type: Schema.Types.ObjectId, ref: 'sku' },
  weight: { type: Schema.Types.ObjectId, ref: 'weight' },
  width: { type: Schema.Types.ObjectId, ref: 'width' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('Vehicle', schema);