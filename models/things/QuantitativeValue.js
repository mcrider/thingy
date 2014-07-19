var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ valueReference: { type: Schema.Types.ObjectId, ref: 'valueReference' },
  value: { type: Schema.Types.ObjectId, ref: 'value' },
  unitCode: { type: Schema.Types.ObjectId, ref: 'unitCode' },
  minValue: { type: Schema.Types.ObjectId, ref: 'minValue' },
  maxValue: { type: Schema.Types.ObjectId, ref: 'maxValue' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('QuantitativeValue', schema);