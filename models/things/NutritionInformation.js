var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ unsaturatedFatContent: { type: Schema.Types.ObjectId, ref: 'unsaturatedFatContent' },
  transFatContent: { type: Schema.Types.ObjectId, ref: 'transFatContent' },
  sugarContent: { type: Schema.Types.ObjectId, ref: 'sugarContent' },
  sodiumContent: { type: Schema.Types.ObjectId, ref: 'sodiumContent' },
  servingSize: { type: Schema.Types.ObjectId, ref: 'servingSize' },
  saturatedFatContent: { type: Schema.Types.ObjectId, ref: 'saturatedFatContent' },
  proteinContent: { type: Schema.Types.ObjectId, ref: 'proteinContent' },
  fiberContent: { type: Schema.Types.ObjectId, ref: 'fiberContent' },
  fatContent: { type: Schema.Types.ObjectId, ref: 'fatContent' },
  cholesterolContent: { type: Schema.Types.ObjectId, ref: 'cholesterolContent' },
  carbohydrateContent: { type: Schema.Types.ObjectId, ref: 'carbohydrateContent' },
  calories: { type: Schema.Types.ObjectId, ref: 'calories' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('NutritionInformation', schema);