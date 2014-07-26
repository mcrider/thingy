var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ highPrice: { type: Schema.Types.ObjectId, ref: 'highPrice' },
  lowPrice: { type: Schema.Types.ObjectId, ref: 'lowPrice' },
  offerCount: { type: Schema.Types.ObjectId, ref: 'offerCount' },
  acceptedPaymentMethod: { type: Schema.Types.ObjectId, ref: 'acceptedPaymentMethod' },
  addOn: { type: Schema.Types.ObjectId, ref: 'addOn' },
  advanceBookingRequirement: { type: Schema.Types.ObjectId, ref: 'advanceBookingRequirement' },
  aggregateRating: { type: Schema.Types.ObjectId, ref: 'aggregateRating' },
  availability: { type: Schema.Types.ObjectId, ref: 'availability' },
  availabilityEnds: { type: Schema.Types.ObjectId, ref: 'availabilityEnds' },
  availabilityStarts: { type: Schema.Types.ObjectId, ref: 'availabilityStarts' },
  availableAtOrFrom: { type: Schema.Types.ObjectId, ref: 'availableAtOrFrom' },
  availableDeliveryMethod: { type: Schema.Types.ObjectId, ref: 'availableDeliveryMethod' },
  businessFunction: { type: Schema.Types.ObjectId, ref: 'businessFunction' },
  category: { type: Schema.Types.ObjectId, ref: 'category' },
  deliveryLeadTime: { type: Schema.Types.ObjectId, ref: 'deliveryLeadTime' },
  eligibleCustomerType: { type: Schema.Types.ObjectId, ref: 'eligibleCustomerType' },
  eligibleDuration: { type: Schema.Types.ObjectId, ref: 'eligibleDuration' },
  eligibleQuantity: { type: Schema.Types.ObjectId, ref: 'eligibleQuantity' },
  eligibleRegion: { type: Schema.Types.ObjectId, ref: 'eligibleRegion' },
  eligibleTransactionVolume: { type: Schema.Types.ObjectId, ref: 'eligibleTransactionVolume' },
  gtin13: { type: Schema.Types.ObjectId, ref: 'gtin13' },
  gtin14: { type: Schema.Types.ObjectId, ref: 'gtin14' },
  gtin8: { type: Schema.Types.ObjectId, ref: 'gtin8' },
  includesObject: { type: Schema.Types.ObjectId, ref: 'includesObject' },
  inventoryLevel: { type: Schema.Types.ObjectId, ref: 'inventoryLevel' },
  itemCondition: { type: Schema.Types.ObjectId, ref: 'itemCondition' },
  itemOffered: { type: Schema.Types.ObjectId, ref: 'itemOffered' },
  mpn: { type: Schema.Types.ObjectId, ref: 'mpn' },
  price: { type: Schema.Types.ObjectId, ref: 'price' },
  priceSpecification: { type: Schema.Types.ObjectId, ref: 'priceSpecification' },
  priceValidUntil: { type: Schema.Types.ObjectId, ref: 'priceValidUntil' },
  review: { type: Schema.Types.ObjectId, ref: 'review' },
  seller: { type: Schema.Types.ObjectId, ref: 'seller' },
  serialNumber: { type: Schema.Types.ObjectId, ref: 'serialNumber' },
  sku: { type: Schema.Types.ObjectId, ref: 'sku' },
  validFrom: { type: Schema.Types.ObjectId, ref: 'validFrom' },
  validThrough: { type: Schema.Types.ObjectId, ref: 'validThrough' },
  warranty: { type: Schema.Types.ObjectId, ref: 'warranty' },
  priceCurrency: { type: Schema.Types.ObjectId, ref: 'priceCurrency' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('AggregateOffer', schema);