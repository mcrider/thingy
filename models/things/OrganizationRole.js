var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ namedPosition: { type: Schema.Types.ObjectId, ref: 'namedPosition' },
  endDate: { type: Schema.Types.ObjectId, ref: 'endDate' },
  startDate: { type: Schema.Types.ObjectId, ref: 'startDate' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('OrganizationRole', schema);