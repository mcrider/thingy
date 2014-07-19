var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ telephone: { type: Schema.Types.ObjectId, ref: 'telephone' },
  productSupported: { type: Schema.Types.ObjectId, ref: 'productSupported' },
  hoursAvailable: { type: Schema.Types.ObjectId, ref: 'hoursAvailable' },
  faxNumber: { type: Schema.Types.ObjectId, ref: 'faxNumber' },
  email: { type: Schema.Types.ObjectId, ref: 'email' },
  contactType: { type: Schema.Types.ObjectId, ref: 'contactType' },
  contactOption: { type: Schema.Types.ObjectId, ref: 'contactOption' },
  availableLanguage: { type: Schema.Types.ObjectId, ref: 'availableLanguage' },
  areaServed: { type: Schema.Types.ObjectId, ref: 'areaServed' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('ContactPoint', schema);