var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ serviceType: { type: Schema.Types.ObjectId, ref: 'serviceType' },
  serviceAudience: { type: Schema.Types.ObjectId, ref: 'serviceAudience' },
  serviceArea: { type: Schema.Types.ObjectId, ref: 'serviceArea' },
  provider: { type: Schema.Types.ObjectId, ref: 'provider' },
  produces: { type: Schema.Types.ObjectId, ref: 'produces' },
  availableChannel: { type: Schema.Types.ObjectId, ref: 'availableChannel' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('Service', schema);