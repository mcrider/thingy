var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ borrower: { type: Schema.Types.ObjectId, ref: 'borrower' },
  toLocation: { type: Schema.Types.ObjectId, ref: 'toLocation' },
  fromLocation: { type: Schema.Types.ObjectId, ref: 'fromLocation' },
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
module.exports = mongoose.model('LendAction', schema);