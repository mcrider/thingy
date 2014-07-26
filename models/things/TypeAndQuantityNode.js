var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ amountOfThisGood: { type: Schema.Types.ObjectId, ref: 'amountOfThisGood' },
  businessFunction: { type: Schema.Types.ObjectId, ref: 'businessFunction' },
  typeOfGood: { type: Schema.Types.ObjectId, ref: 'typeOfGood' },
  unitCode: { type: Schema.Types.ObjectId, ref: 'unitCode' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('TypeAndQuantityNode', schema);