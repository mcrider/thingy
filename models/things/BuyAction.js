var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ warrantyPromise: { type: Schema.Types.ObjectId, ref: 'warrantyPromise' },
  vendor: { type: Schema.Types.ObjectId, ref: 'vendor' },
  price: { type: Schema.Types.ObjectId, ref: 'price' },
  startTime: { type: Schema.Types.ObjectId, ref: 'startTime' },
  result: { type: Schema.Types.ObjectId, ref: 'result' },
  participant: { type: Schema.Types.ObjectId, ref: 'participant' },
  object: { type: Schema.Types.ObjectId, ref: 'object' },
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  instrument: { type: Schema.Types.ObjectId, ref: 'instrument' },
  endTime: { type: Schema.Types.ObjectId, ref: 'endTime' },
  agent: { type: Schema.Types.ObjectId, ref: 'agent' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('BuyAction', schema);