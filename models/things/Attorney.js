var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ priceRange: { type: Schema.Types.ObjectId, ref: 'priceRange' },
  paymentAccepted: { type: Schema.Types.ObjectId, ref: 'paymentAccepted' },
  openingHours: { type: Schema.Types.ObjectId, ref: 'openingHours' },
  currenciesAccepted: { type: Schema.Types.ObjectId, ref: 'currenciesAccepted' },
  branchOf: { type: Schema.Types.ObjectId, ref: 'branchOf' },
  vatID: { type: Schema.Types.ObjectId, ref: 'vatID' },
  taxID: { type: Schema.Types.ObjectId, ref: 'taxID' },
  subOrganization: { type: Schema.Types.ObjectId, ref: 'subOrganization' },
  seeks: { type: Schema.Types.ObjectId, ref: 'seeks' },
  owns: { type: Schema.Types.ObjectId, ref: 'owns' },
  naics: { type: Schema.Types.ObjectId, ref: 'naics' },
  members: { type: Schema.Types.ObjectId, ref: 'members' },
  member: { type: Schema.Types.ObjectId, ref: 'member' },
  makesOffer: { type: Schema.Types.ObjectId, ref: 'makesOffer' },
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  legalName: { type: Schema.Types.ObjectId, ref: 'legalName' },
  hasPOS: { type: Schema.Types.ObjectId, ref: 'hasPOS' },
  foundingDate: { type: Schema.Types.ObjectId, ref: 'foundingDate' },
  founders: { type: Schema.Types.ObjectId, ref: 'founders' },
  founder: { type: Schema.Types.ObjectId, ref: 'founder' },
  employees: { type: Schema.Types.ObjectId, ref: 'employees' },
  employee: { type: Schema.Types.ObjectId, ref: 'employee' },
  email: { type: Schema.Types.ObjectId, ref: 'email' },
  duns: { type: Schema.Types.ObjectId, ref: 'duns' },
  department: { type: Schema.Types.ObjectId, ref: 'department' },
  contactPoints: { type: Schema.Types.ObjectId, ref: 'contactPoints' },
  contactPoint: { type: Schema.Types.ObjectId, ref: 'contactPoint' },
  brand: { type: Schema.Types.ObjectId, ref: 'brand' },
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
module.exports = mongoose.model('Attorney', schema);