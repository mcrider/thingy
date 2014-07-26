var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ maxValue: { type: Schema.Types.ObjectId, ref: 'maxValue' },
  minValue: { type: Schema.Types.ObjectId, ref: 'minValue' },
  valueName: { type: Schema.Types.ObjectId, ref: 'valueName' },
  valueRequired: { type: Schema.Types.ObjectId, ref: 'valueRequired' },
  defaultValue: { type: Schema.Types.ObjectId, ref: 'defaultValue' },
  readonlyValue: { type: Schema.Types.ObjectId, ref: 'readonlyValue' },
  multipleValues: { type: Schema.Types.ObjectId, ref: 'multipleValues' },
  valueMinLength: { type: Schema.Types.ObjectId, ref: 'valueMinLength' },
  valueMaxLength: { type: Schema.Types.ObjectId, ref: 'valueMaxLength' },
  valuePattern: { type: Schema.Types.ObjectId, ref: 'valuePattern' },
  stepValue: { type: Schema.Types.ObjectId, ref: 'stepValue' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('PropertyValueSpecification', schema);