var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ trackingUrl: { type: Schema.Types.ObjectId, ref: 'trackingUrl' },
  trackingNumber: { type: Schema.Types.ObjectId, ref: 'trackingNumber' },
  partOfOrder: { type: Schema.Types.ObjectId, ref: 'partOfOrder' },
  originAddress: { type: Schema.Types.ObjectId, ref: 'originAddress' },
  itemShipped: { type: Schema.Types.ObjectId, ref: 'itemShipped' },
  hasDeliveryMethod: { type: Schema.Types.ObjectId, ref: 'hasDeliveryMethod' },
  expectedArrivalUntil: { type: Schema.Types.ObjectId, ref: 'expectedArrivalUntil' },
  expectedArrivalFrom: { type: Schema.Types.ObjectId, ref: 'expectedArrivalFrom' },
  deliveryStatus: { type: Schema.Types.ObjectId, ref: 'deliveryStatus' },
  deliveryAddress: { type: Schema.Types.ObjectId, ref: 'deliveryAddress' },
  carrier: { type: Schema.Types.ObjectId, ref: 'carrier' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('ParcelDelivery', schema);