var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ elevation: { type: Schema.Types.ObjectId, ref: 'elevation' },
  latitude: { type: Schema.Types.ObjectId, ref: 'latitude' },
  longitude: { type: Schema.Types.ObjectId, ref: 'longitude' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('GeoCoordinates', schema);