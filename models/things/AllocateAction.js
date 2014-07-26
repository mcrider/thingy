var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ purpose: { type: Schema.Types.ObjectId, ref: 'purpose' },
  agent: { type: Schema.Types.ObjectId, ref: 'agent' },
  endTime: { type: Schema.Types.ObjectId, ref: 'endTime' },
  instrument: { type: Schema.Types.ObjectId, ref: 'instrument' },
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  object: { type: Schema.Types.ObjectId, ref: 'object' },
  participant: { type: Schema.Types.ObjectId, ref: 'participant' },
  result: { type: Schema.Types.ObjectId, ref: 'result' },
  startTime: { type: Schema.Types.ObjectId, ref: 'startTime' },
  actionStatus: { type: Schema.Types.ObjectId, ref: 'actionStatus' },
  target: { type: Schema.Types.ObjectId, ref: 'target' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('AllocateAction', schema);