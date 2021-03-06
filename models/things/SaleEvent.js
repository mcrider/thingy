var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ organizer: { type: Schema.Types.ObjectId, ref: 'organizer' },
  attendee: { type: Schema.Types.ObjectId, ref: 'attendee' },
  doorTime: { type: Schema.Types.ObjectId, ref: 'doorTime' },
  duration: { type: Schema.Types.ObjectId, ref: 'duration' },
  endDate: { type: Schema.Types.ObjectId, ref: 'endDate' },
  eventStatus: { type: Schema.Types.ObjectId, ref: 'eventStatus' },
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  offers: { type: Schema.Types.ObjectId, ref: 'offers' },
  performer: { type: Schema.Types.ObjectId, ref: 'performer' },
  previousStartDate: { type: Schema.Types.ObjectId, ref: 'previousStartDate' },
  startDate: { type: Schema.Types.ObjectId, ref: 'startDate' },
  subEvent: { type: Schema.Types.ObjectId, ref: 'subEvent' },
  superEvent: { type: Schema.Types.ObjectId, ref: 'superEvent' },
  typicalAgeRange: { type: Schema.Types.ObjectId, ref: 'typicalAgeRange' },
  workPerformed: { type: Schema.Types.ObjectId, ref: 'workPerformed' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('SaleEvent', schema);