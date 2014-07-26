var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ maxValue: { type: Schema.Types.ObjectId, ref: 'maxValue' },
  minValue: { type: Schema.Types.ObjectId, ref: 'minValue' },
  unitCode: { type: Schema.Types.ObjectId, ref: 'unitCode' },
  value: { type: Schema.Types.ObjectId, ref: 'value' },
  valueReference: { type: Schema.Types.ObjectId, ref: 'valueReference' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('QuantitativeValue', schema);