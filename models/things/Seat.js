var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ seatNumber: { type: Schema.Types.ObjectId, ref: 'seatNumber' },
  seatRow: { type: Schema.Types.ObjectId, ref: 'seatRow' },
  seatSection: { type: Schema.Types.ObjectId, ref: 'seatSection' },
  seatingType: { type: Schema.Types.ObjectId, ref: 'seatingType' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('Seat', schema);