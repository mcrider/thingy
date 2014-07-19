var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ educationalRole: { type: Schema.Types.ObjectId, ref: 'educationalRole' },
  geographicArea: { type: Schema.Types.ObjectId, ref: 'geographicArea' },
  audienceType: { type: Schema.Types.ObjectId, ref: 'audienceType' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('EducationalAudience', schema);