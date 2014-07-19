var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ typicalAgeRange: { type: Schema.Types.ObjectId, ref: 'typicalAgeRange' },
  superEvent: { type: Schema.Types.ObjectId, ref: 'superEvent' },
  subEvents: { type: Schema.Types.ObjectId, ref: 'subEvents' },
  subEvent: { type: Schema.Types.ObjectId, ref: 'subEvent' },
  startDate: { type: Schema.Types.ObjectId, ref: 'startDate' },
  previousStartDate: { type: Schema.Types.ObjectId, ref: 'previousStartDate' },
  performers: { type: Schema.Types.ObjectId, ref: 'performers' },
  performer: { type: Schema.Types.ObjectId, ref: 'performer' },
  offers: { type: Schema.Types.ObjectId, ref: 'offers' },
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  eventStatus: { type: Schema.Types.ObjectId, ref: 'eventStatus' },
  endDate: { type: Schema.Types.ObjectId, ref: 'endDate' },
  duration: { type: Schema.Types.ObjectId, ref: 'duration' },
  doorTime: { type: Schema.Types.ObjectId, ref: 'doorTime' },
  attendees: { type: Schema.Types.ObjectId, ref: 'attendees' },
  attendee: { type: Schema.Types.ObjectId, ref: 'attendee' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('ComedyEvent', schema);