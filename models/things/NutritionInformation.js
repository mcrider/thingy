var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ calories: { type: Schema.Types.ObjectId, ref: 'calories' },
  carbohydrateContent: { type: Schema.Types.ObjectId, ref: 'carbohydrateContent' },
  cholesterolContent: { type: Schema.Types.ObjectId, ref: 'cholesterolContent' },
  fatContent: { type: Schema.Types.ObjectId, ref: 'fatContent' },
  fiberContent: { type: Schema.Types.ObjectId, ref: 'fiberContent' },
  proteinContent: { type: Schema.Types.ObjectId, ref: 'proteinContent' },
  saturatedFatContent: { type: Schema.Types.ObjectId, ref: 'saturatedFatContent' },
  servingSize: { type: Schema.Types.ObjectId, ref: 'servingSize' },
  sodiumContent: { type: Schema.Types.ObjectId, ref: 'sodiumContent' },
  sugarContent: { type: Schema.Types.ObjectId, ref: 'sugarContent' },
  transFatContent: { type: Schema.Types.ObjectId, ref: 'transFatContent' },
  unsaturatedFatContent: { type: Schema.Types.ObjectId, ref: 'unsaturatedFatContent' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('NutritionInformation', schema);