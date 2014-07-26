var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ availableChannel: { type: Schema.Types.ObjectId, ref: 'availableChannel' },
  produces: { type: Schema.Types.ObjectId, ref: 'produces' },
  serviceArea: { type: Schema.Types.ObjectId, ref: 'serviceArea' },
  serviceAudience: { type: Schema.Types.ObjectId, ref: 'serviceAudience' },
  serviceType: { type: Schema.Types.ObjectId, ref: 'serviceType' },
  provider: { type: Schema.Types.ObjectId, ref: 'provider' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('Taxi', schema);