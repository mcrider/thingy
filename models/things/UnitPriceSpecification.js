var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ billingIncrement: { type: Schema.Types.ObjectId, ref: 'billingIncrement' },
  priceType: { type: Schema.Types.ObjectId, ref: 'priceType' },
  unitCode: { type: Schema.Types.ObjectId, ref: 'unitCode' },
  eligibleQuantity: { type: Schema.Types.ObjectId, ref: 'eligibleQuantity' },
  eligibleTransactionVolume: { type: Schema.Types.ObjectId, ref: 'eligibleTransactionVolume' },
  maxPrice: { type: Schema.Types.ObjectId, ref: 'maxPrice' },
  minPrice: { type: Schema.Types.ObjectId, ref: 'minPrice' },
  price: { type: Schema.Types.ObjectId, ref: 'price' },
  validFrom: { type: Schema.Types.ObjectId, ref: 'validFrom' },
  validThrough: { type: Schema.Types.ObjectId, ref: 'validThrough' },
  valueAddedTaxIncluded: { type: Schema.Types.ObjectId, ref: 'valueAddedTaxIncluded' },
  priceCurrency: { type: Schema.Types.ObjectId, ref: 'priceCurrency' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('UnitPriceSpecification', schema);