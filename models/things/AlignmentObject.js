var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ targetUrl: { type: Schema.Types.ObjectId, ref: 'targetUrl' },
  targetName: { type: Schema.Types.ObjectId, ref: 'targetName' },
  targetDescription: { type: Schema.Types.ObjectId, ref: 'targetDescription' },
  educationalFramework: { type: Schema.Types.ObjectId, ref: 'educationalFramework' },
  alignmentType: { type: Schema.Types.ObjectId, ref: 'alignmentType' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('AlignmentObject', schema);