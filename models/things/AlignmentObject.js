var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ alignmentType: { type: Schema.Types.ObjectId, ref: 'alignmentType' },
  educationalFramework: { type: Schema.Types.ObjectId, ref: 'educationalFramework' },
  targetDescription: { type: Schema.Types.ObjectId, ref: 'targetDescription' },
  targetName: { type: Schema.Types.ObjectId, ref: 'targetName' },
  targetUrl: { type: Schema.Types.ObjectId, ref: 'targetUrl' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('AlignmentObject', schema);