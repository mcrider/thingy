var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ polygon: { type: Schema.Types.ObjectId, ref: 'polygon' },
  line: { type: Schema.Types.ObjectId, ref: 'line' },
  elevation: { type: Schema.Types.ObjectId, ref: 'elevation' },
  circle: { type: Schema.Types.ObjectId, ref: 'circle' },
  box: { type: Schema.Types.ObjectId, ref: 'box' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('GeoShape', schema);