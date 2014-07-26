var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ address: { type: Schema.Types.ObjectId, ref: 'address' },
  aggregateRating: { type: Schema.Types.ObjectId, ref: 'aggregateRating' },
  brand: { type: Schema.Types.ObjectId, ref: 'brand' },
  contactPoint: { type: Schema.Types.ObjectId, ref: 'contactPoint' },
  department: { type: Schema.Types.ObjectId, ref: 'department' },
  duns: { type: Schema.Types.ObjectId, ref: 'duns' },
  email: { type: Schema.Types.ObjectId, ref: 'email' },
  employee: { type: Schema.Types.ObjectId, ref: 'employee' },
  event: { type: Schema.Types.ObjectId, ref: 'event' },
  faxNumber: { type: Schema.Types.ObjectId, ref: 'faxNumber' },
  founder: { type: Schema.Types.ObjectId, ref: 'founder' },
  dissolutionDate: { type: Schema.Types.ObjectId, ref: 'dissolutionDate' },
  foundingDate: { type: Schema.Types.ObjectId, ref: 'foundingDate' },
  globalLocationNumber: { type: Schema.Types.ObjectId, ref: 'globalLocationNumber' },
  hasPOS: { type: Schema.Types.ObjectId, ref: 'hasPOS' },
  interactionCount: { type: Schema.Types.ObjectId, ref: 'interactionCount' },
  isicV4: { type: Schema.Types.ObjectId, ref: 'isicV4' },
  legalName: { type: Schema.Types.ObjectId, ref: 'legalName' },
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  logo: { type: Schema.Types.ObjectId, ref: 'logo' },
  makesOffer: { type: Schema.Types.ObjectId, ref: 'makesOffer' },
  member: { type: Schema.Types.ObjectId, ref: 'member' },
  memberOf: { type: Schema.Types.ObjectId, ref: 'memberOf' },
  naics: { type: Schema.Types.ObjectId, ref: 'naics' },
  owns: { type: Schema.Types.ObjectId, ref: 'owns' },
  review: { type: Schema.Types.ObjectId, ref: 'review' },
  seeks: { type: Schema.Types.ObjectId, ref: 'seeks' },
  subOrganization: { type: Schema.Types.ObjectId, ref: 'subOrganization' },
  taxID: { type: Schema.Types.ObjectId, ref: 'taxID' },
  telephone: { type: Schema.Types.ObjectId, ref: 'telephone' },
  vatID: { type: Schema.Types.ObjectId, ref: 'vatID' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('PerformingGroup', schema);