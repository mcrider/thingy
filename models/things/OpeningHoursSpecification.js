var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ validThrough: { type: Schema.Types.ObjectId, ref: 'validThrough' },
  validFrom: { type: Schema.Types.ObjectId, ref: 'validFrom' },
  opens: { type: Schema.Types.ObjectId, ref: 'opens' },
  dayOfWeek: { type: Schema.Types.ObjectId, ref: 'dayOfWeek' },
  closes: { type: Schema.Types.ObjectId, ref: 'closes' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('OpeningHoursSpecification', schema);