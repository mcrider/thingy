var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ openingHours: { type: Schema.Types.ObjectId, ref: 'openingHours' },
  address: { type: Schema.Types.ObjectId, ref: 'address' },
  aggregateRating: { type: Schema.Types.ObjectId, ref: 'aggregateRating' },
  containedIn: { type: Schema.Types.ObjectId, ref: 'containedIn' },
  event: { type: Schema.Types.ObjectId, ref: 'event' },
  faxNumber: { type: Schema.Types.ObjectId, ref: 'faxNumber' },
  geo: { type: Schema.Types.ObjectId, ref: 'geo' },
  globalLocationNumber: { type: Schema.Types.ObjectId, ref: 'globalLocationNumber' },
  interactionCount: { type: Schema.Types.ObjectId, ref: 'interactionCount' },
  isicV4: { type: Schema.Types.ObjectId, ref: 'isicV4' },
  logo: { type: Schema.Types.ObjectId, ref: 'logo' },
  hasMap: { type: Schema.Types.ObjectId, ref: 'hasMap' },
  openingHoursSpecification: { type: Schema.Types.ObjectId, ref: 'openingHoursSpecification' },
  photo: { type: Schema.Types.ObjectId, ref: 'photo' },
  review: { type: Schema.Types.ObjectId, ref: 'review' },
  telephone: { type: Schema.Types.ObjectId, ref: 'telephone' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('Cemetery', schema);