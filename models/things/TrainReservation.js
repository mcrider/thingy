var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ reservationId: { type: Schema.Types.ObjectId, ref: 'reservationId' },
  reservationStatus: { type: Schema.Types.ObjectId, ref: 'reservationStatus' },
  reservationFor: { type: Schema.Types.ObjectId, ref: 'reservationFor' },
  underName: { type: Schema.Types.ObjectId, ref: 'underName' },
  provider: { type: Schema.Types.ObjectId, ref: 'provider' },
  bookingAgent: { type: Schema.Types.ObjectId, ref: 'bookingAgent' },
  bookingTime: { type: Schema.Types.ObjectId, ref: 'bookingTime' },
  modifiedTime: { type: Schema.Types.ObjectId, ref: 'modifiedTime' },
  programMembershipUsed: { type: Schema.Types.ObjectId, ref: 'programMembershipUsed' },
  reservedTicket: { type: Schema.Types.ObjectId, ref: 'reservedTicket' },
  totalPrice: { type: Schema.Types.ObjectId, ref: 'totalPrice' },
  priceCurrency: { type: Schema.Types.ObjectId, ref: 'priceCurrency' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('TrainReservation', schema);