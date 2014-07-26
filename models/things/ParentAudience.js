var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ childMaxAge: { type: Schema.Types.ObjectId, ref: 'childMaxAge' },
  childMinAge: { type: Schema.Types.ObjectId, ref: 'childMinAge' },
  healthCondition: { type: Schema.Types.ObjectId, ref: 'healthCondition' },
  requiredGender: { type: Schema.Types.ObjectId, ref: 'requiredGender' },
  requiredMaxAge: { type: Schema.Types.ObjectId, ref: 'requiredMaxAge' },
  requiredMinAge: { type: Schema.Types.ObjectId, ref: 'requiredMinAge' },
  suggestedGender: { type: Schema.Types.ObjectId, ref: 'suggestedGender' },
  suggestedMaxAge: { type: Schema.Types.ObjectId, ref: 'suggestedMaxAge' },
  suggestedMinAge: { type: Schema.Types.ObjectId, ref: 'suggestedMinAge' },
  audienceType: { type: Schema.Types.ObjectId, ref: 'audienceType' },
  geographicArea: { type: Schema.Types.ObjectId, ref: 'geographicArea' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('ParentAudience', schema);