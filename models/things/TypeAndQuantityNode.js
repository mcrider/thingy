var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ unitCode: { type: Schema.Types.ObjectId, ref: 'unitCode' },
  typeOfGood: { type: Schema.Types.ObjectId, ref: 'typeOfGood' },
  businessFunction: { type: Schema.Types.ObjectId, ref: 'businessFunction' },
  amountOfThisGood: { type: Schema.Types.ObjectId, ref: 'amountOfThisGood' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('TypeAndQuantityNode', schema);