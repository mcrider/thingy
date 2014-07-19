var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ yearsInOperation: { type: Schema.Types.ObjectId, ref: 'yearsInOperation' },
  yearlyRevenue: { type: Schema.Types.ObjectId, ref: 'yearlyRevenue' },
  numberofEmployees: { type: Schema.Types.ObjectId, ref: 'numberofEmployees' },
  geographicArea: { type: Schema.Types.ObjectId, ref: 'geographicArea' },
  audienceType: { type: Schema.Types.ObjectId, ref: 'audienceType' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('BusinessAudience', schema);