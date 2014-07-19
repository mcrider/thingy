var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ appliesToPaymentMethod: { type: Schema.Types.ObjectId, ref: 'appliesToPaymentMethod' },
  appliesToDeliveryMethod: { type: Schema.Types.ObjectId, ref: 'appliesToDeliveryMethod' },
  valueAddedTaxIncluded: { type: Schema.Types.ObjectId, ref: 'valueAddedTaxIncluded' },
  validThrough: { type: Schema.Types.ObjectId, ref: 'validThrough' },
  validFrom: { type: Schema.Types.ObjectId, ref: 'validFrom' },
  priceCurrency: { type: Schema.Types.ObjectId, ref: 'priceCurrency' },
  price: { type: Schema.Types.ObjectId, ref: 'price' },
  minPrice: { type: Schema.Types.ObjectId, ref: 'minPrice' },
  maxPrice: { type: Schema.Types.ObjectId, ref: 'maxPrice' },
  eligibleTransactionVolume: { type: Schema.Types.ObjectId, ref: 'eligibleTransactionVolume' },
  eligibleQuantity: { type: Schema.Types.ObjectId, ref: 'eligibleQuantity' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('PaymentChargeSpecification', schema);