var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ suggestedMinAge: { type: Schema.Types.ObjectId, ref: 'suggestedMinAge' },
  suggestedMaxAge: { type: Schema.Types.ObjectId, ref: 'suggestedMaxAge' },
  suggestedGender: { type: Schema.Types.ObjectId, ref: 'suggestedGender' },
  requiredMinAge: { type: Schema.Types.ObjectId, ref: 'requiredMinAge' },
  requiredMaxAge: { type: Schema.Types.ObjectId, ref: 'requiredMaxAge' },
  requiredGender: { type: Schema.Types.ObjectId, ref: 'requiredGender' },
  healthCondition: { type: Schema.Types.ObjectId, ref: 'healthCondition' },
  geographicArea: { type: Schema.Types.ObjectId, ref: 'geographicArea' },
  audienceType: { type: Schema.Types.ObjectId, ref: 'audienceType' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('PeopleAudience', schema);