var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ tracks: { type: Schema.Types.ObjectId, ref: 'tracks' },
  track: { type: Schema.Types.ObjectId, ref: 'track' },
  musicGroupMember: { type: Schema.Types.ObjectId, ref: 'musicGroupMember' },
  albums: { type: Schema.Types.ObjectId, ref: 'albums' },
  album: { type: Schema.Types.ObjectId, ref: 'album' },
  vatID: { type: Schema.Types.ObjectId, ref: 'vatID' },
  telephone: { type: Schema.Types.ObjectId, ref: 'telephone' },
  taxID: { type: Schema.Types.ObjectId, ref: 'taxID' },
  subOrganization: { type: Schema.Types.ObjectId, ref: 'subOrganization' },
  seeks: { type: Schema.Types.ObjectId, ref: 'seeks' },
  reviews: { type: Schema.Types.ObjectId, ref: 'reviews' },
  review: { type: Schema.Types.ObjectId, ref: 'review' },
  owns: { type: Schema.Types.ObjectId, ref: 'owns' },
  naics: { type: Schema.Types.ObjectId, ref: 'naics' },
  members: { type: Schema.Types.ObjectId, ref: 'members' },
  member: { type: Schema.Types.ObjectId, ref: 'member' },
  makesOffer: { type: Schema.Types.ObjectId, ref: 'makesOffer' },
  logo: { type: Schema.Types.ObjectId, ref: 'logo' },
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  legalName: { type: Schema.Types.ObjectId, ref: 'legalName' },
  isicV4: { type: Schema.Types.ObjectId, ref: 'isicV4' },
  interactionCount: { type: Schema.Types.ObjectId, ref: 'interactionCount' },
  hasPOS: { type: Schema.Types.ObjectId, ref: 'hasPOS' },
  globalLocationNumber: { type: Schema.Types.ObjectId, ref: 'globalLocationNumber' },
  foundingDate: { type: Schema.Types.ObjectId, ref: 'foundingDate' },
  founders: { type: Schema.Types.ObjectId, ref: 'founders' },
  founder: { type: Schema.Types.ObjectId, ref: 'founder' },
  faxNumber: { type: Schema.Types.ObjectId, ref: 'faxNumber' },
  events: { type: Schema.Types.ObjectId, ref: 'events' },
  event: { type: Schema.Types.ObjectId, ref: 'event' },
  employees: { type: Schema.Types.ObjectId, ref: 'employees' },
  employee: { type: Schema.Types.ObjectId, ref: 'employee' },
  email: { type: Schema.Types.ObjectId, ref: 'email' },
  duns: { type: Schema.Types.ObjectId, ref: 'duns' },
  department: { type: Schema.Types.ObjectId, ref: 'department' },
  contactPoints: { type: Schema.Types.ObjectId, ref: 'contactPoints' },
  contactPoint: { type: Schema.Types.ObjectId, ref: 'contactPoint' },
  brand: { type: Schema.Types.ObjectId, ref: 'brand' },
  aggregateRating: { type: Schema.Types.ObjectId, ref: 'aggregateRating' },
  address: { type: Schema.Types.ObjectId, ref: 'address' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('MusicGroup', schema);