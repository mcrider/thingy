var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ availableLanguage: { type: Schema.Types.ObjectId, ref: 'availableLanguage' },
  processingTime: { type: Schema.Types.ObjectId, ref: 'processingTime' },
  providesService: { type: Schema.Types.ObjectId, ref: 'providesService' },
  serviceLocation: { type: Schema.Types.ObjectId, ref: 'serviceLocation' },
  servicePhone: { type: Schema.Types.ObjectId, ref: 'servicePhone' },
  servicePostalAddress: { type: Schema.Types.ObjectId, ref: 'servicePostalAddress' },
  serviceSmsNumber: { type: Schema.Types.ObjectId, ref: 'serviceSmsNumber' },
  serviceUrl: { type: Schema.Types.ObjectId, ref: 'serviceUrl' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('ServiceChannel', schema);