var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ carrier: { type: Schema.Types.ObjectId, ref: 'carrier' },
  deliveryAddress: { type: Schema.Types.ObjectId, ref: 'deliveryAddress' },
  deliveryStatus: { type: Schema.Types.ObjectId, ref: 'deliveryStatus' },
  expectedArrivalFrom: { type: Schema.Types.ObjectId, ref: 'expectedArrivalFrom' },
  expectedArrivalUntil: { type: Schema.Types.ObjectId, ref: 'expectedArrivalUntil' },
  hasDeliveryMethod: { type: Schema.Types.ObjectId, ref: 'hasDeliveryMethod' },
  itemShipped: { type: Schema.Types.ObjectId, ref: 'itemShipped' },
  originAddress: { type: Schema.Types.ObjectId, ref: 'originAddress' },
  partOfOrder: { type: Schema.Types.ObjectId, ref: 'partOfOrder' },
  trackingNumber: { type: Schema.Types.ObjectId, ref: 'trackingNumber' },
  trackingUrl: { type: Schema.Types.ObjectId, ref: 'trackingUrl' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('ParcelDelivery', schema);