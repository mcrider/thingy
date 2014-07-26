var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ areaServed: { type: Schema.Types.ObjectId, ref: 'areaServed' },
  availableLanguage: { type: Schema.Types.ObjectId, ref: 'availableLanguage' },
  contactOption: { type: Schema.Types.ObjectId, ref: 'contactOption' },
  contactType: { type: Schema.Types.ObjectId, ref: 'contactType' },
  email: { type: Schema.Types.ObjectId, ref: 'email' },
  faxNumber: { type: Schema.Types.ObjectId, ref: 'faxNumber' },
  hoursAvailable: { type: Schema.Types.ObjectId, ref: 'hoursAvailable' },
  productSupported: { type: Schema.Types.ObjectId, ref: 'productSupported' },
  telephone: { type: Schema.Types.ObjectId, ref: 'telephone' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('ContactPoint', schema);