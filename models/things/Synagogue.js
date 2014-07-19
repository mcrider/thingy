var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ openingHours: { type: Schema.Types.ObjectId, ref: 'openingHours' },
  telephone: { type: Schema.Types.ObjectId, ref: 'telephone' },
  reviews: { type: Schema.Types.ObjectId, ref: 'reviews' },
  review: { type: Schema.Types.ObjectId, ref: 'review' },
  photos: { type: Schema.Types.ObjectId, ref: 'photos' },
  photo: { type: Schema.Types.ObjectId, ref: 'photo' },
  openingHoursSpecification: { type: Schema.Types.ObjectId, ref: 'openingHoursSpecification' },
  maps: { type: Schema.Types.ObjectId, ref: 'maps' },
  map: { type: Schema.Types.ObjectId, ref: 'map' },
  logo: { type: Schema.Types.ObjectId, ref: 'logo' },
  isicV4: { type: Schema.Types.ObjectId, ref: 'isicV4' },
  interactionCount: { type: Schema.Types.ObjectId, ref: 'interactionCount' },
  globalLocationNumber: { type: Schema.Types.ObjectId, ref: 'globalLocationNumber' },
  geo: { type: Schema.Types.ObjectId, ref: 'geo' },
  faxNumber: { type: Schema.Types.ObjectId, ref: 'faxNumber' },
  events: { type: Schema.Types.ObjectId, ref: 'events' },
  event: { type: Schema.Types.ObjectId, ref: 'event' },
  containedIn: { type: Schema.Types.ObjectId, ref: 'containedIn' },
  aggregateRating: { type: Schema.Types.ObjectId, ref: 'aggregateRating' },
  address: { type: Schema.Types.ObjectId, ref: 'address' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('Synagogue', schema);