var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ serviceUrl: { type: Schema.Types.ObjectId, ref: 'serviceUrl' },
  serviceSmsNumber: { type: Schema.Types.ObjectId, ref: 'serviceSmsNumber' },
  servicePostalAddress: { type: Schema.Types.ObjectId, ref: 'servicePostalAddress' },
  servicePhone: { type: Schema.Types.ObjectId, ref: 'servicePhone' },
  serviceLocation: { type: Schema.Types.ObjectId, ref: 'serviceLocation' },
  providesService: { type: Schema.Types.ObjectId, ref: 'providesService' },
  processingTime: { type: Schema.Types.ObjectId, ref: 'processingTime' },
  availableLanguage: { type: Schema.Types.ObjectId, ref: 'availableLanguage' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('ServiceChannel', schema);