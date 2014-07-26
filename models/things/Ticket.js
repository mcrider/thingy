var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ underName: { type: Schema.Types.ObjectId, ref: 'underName' },
  totalPrice: { type: Schema.Types.ObjectId, ref: 'totalPrice' },
  priceCurrency: { type: Schema.Types.ObjectId, ref: 'priceCurrency' },
  issuedBy: { type: Schema.Types.ObjectId, ref: 'issuedBy' },
  dateIssued: { type: Schema.Types.ObjectId, ref: 'dateIssued' },
  ticketedSeat: { type: Schema.Types.ObjectId, ref: 'ticketedSeat' },
  ticketNumber: { type: Schema.Types.ObjectId, ref: 'ticketNumber' },
  ticketToken: { type: Schema.Types.ObjectId, ref: 'ticketToken' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('Ticket', schema);