var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ totalTime: { type: Schema.Types.ObjectId, ref: 'totalTime' },
  recipeYield: { type: Schema.Types.ObjectId, ref: 'recipeYield' },
  recipeInstructions: { type: Schema.Types.ObjectId, ref: 'recipeInstructions' },
  recipeCuisine: { type: Schema.Types.ObjectId, ref: 'recipeCuisine' },
  recipeCategory: { type: Schema.Types.ObjectId, ref: 'recipeCategory' },
  prepTime: { type: Schema.Types.ObjectId, ref: 'prepTime' },
  nutrition: { type: Schema.Types.ObjectId, ref: 'nutrition' },
  ingredients: { type: Schema.Types.ObjectId, ref: 'ingredients' },
  cookTime: { type: Schema.Types.ObjectId, ref: 'cookTime' },
  cookingMethod: { type: Schema.Types.ObjectId, ref: 'cookingMethod' },
  video: { type: Schema.Types.ObjectId, ref: 'video' },
  version: { type: Schema.Types.ObjectId, ref: 'version' },
  typicalAgeRange: { type: Schema.Types.ObjectId, ref: 'typicalAgeRange' },
  timeRequired: { type: Schema.Types.ObjectId, ref: 'timeRequired' },
  thumbnailUrl: { type: Schema.Types.ObjectId, ref: 'thumbnailUrl' },
  text: { type: Schema.Types.ObjectId, ref: 'text' },
  sourceOrganization: { type: Schema.Types.ObjectId, ref: 'sourceOrganization' },
  reviews: { type: Schema.Types.ObjectId, ref: 'reviews' },
  review: { type: Schema.Types.ObjectId, ref: 'review' },
  publishingPrinciples: { type: Schema.Types.ObjectId, ref: 'publishingPrinciples' },
  publisher: { type: Schema.Types.ObjectId, ref: 'publisher' },
  provider: { type: Schema.Types.ObjectId, ref: 'provider' },
  offers: { type: Schema.Types.ObjectId, ref: 'offers' },
  mentions: { type: Schema.Types.ObjectId, ref: 'mentions' },
  learningResourceType: { type: Schema.Types.ObjectId, ref: 'learningResourceType' },
  keywords: { type: Schema.Types.ObjectId, ref: 'keywords' },
  isFamilyFriendly: { type: Schema.Types.ObjectId, ref: 'isFamilyFriendly' },
  isBasedOnUrl: { type: Schema.Types.ObjectId, ref: 'isBasedOnUrl' },
  interactivityType: { type: Schema.Types.ObjectId, ref: 'interactivityType' },
  interactionCount: { type: Schema.Types.ObjectId, ref: 'interactionCount' },
  inLanguage: { type: Schema.Types.ObjectId, ref: 'inLanguage' },
  headline: { type: Schema.Types.ObjectId, ref: 'headline' },
  genre: { type: Schema.Types.ObjectId, ref: 'genre' },
  encodings: { type: Schema.Types.ObjectId, ref: 'encodings' },
  encoding: { type: Schema.Types.ObjectId, ref: 'encoding' },
  educationalUse: { type: Schema.Types.ObjectId, ref: 'educationalUse' },
  educationalAlignment: { type: Schema.Types.ObjectId, ref: 'educationalAlignment' },
  editor: { type: Schema.Types.ObjectId, ref: 'editor' },
  discussionUrl: { type: Schema.Types.ObjectId, ref: 'discussionUrl' },
  datePublished: { type: Schema.Types.ObjectId, ref: 'datePublished' },
  dateModified: { type: Schema.Types.ObjectId, ref: 'dateModified' },
  dateCreated: { type: Schema.Types.ObjectId, ref: 'dateCreated' },
  creator: { type: Schema.Types.ObjectId, ref: 'creator' },
  copyrightYear: { type: Schema.Types.ObjectId, ref: 'copyrightYear' },
  copyrightHolder: { type: Schema.Types.ObjectId, ref: 'copyrightHolder' },
  contributor: { type: Schema.Types.ObjectId, ref: 'contributor' },
  contentRating: { type: Schema.Types.ObjectId, ref: 'contentRating' },
  contentLocation: { type: Schema.Types.ObjectId, ref: 'contentLocation' },
  comment: { type: Schema.Types.ObjectId, ref: 'comment' },
  citation: { type: Schema.Types.ObjectId, ref: 'citation' },
  awards: { type: Schema.Types.ObjectId, ref: 'awards' },
  award: { type: Schema.Types.ObjectId, ref: 'award' },
  author: { type: Schema.Types.ObjectId, ref: 'author' },
  audio: { type: Schema.Types.ObjectId, ref: 'audio' },
  audience: { type: Schema.Types.ObjectId, ref: 'audience' },
  associatedMedia: { type: Schema.Types.ObjectId, ref: 'associatedMedia' },
  alternativeHeadline: { type: Schema.Types.ObjectId, ref: 'alternativeHeadline' },
  aggregateRating: { type: Schema.Types.ObjectId, ref: 'aggregateRating' },
  accountablePerson: { type: Schema.Types.ObjectId, ref: 'accountablePerson' },
  accessibilityHazard: { type: Schema.Types.ObjectId, ref: 'accessibilityHazard' },
  accessibilityFeature: { type: Schema.Types.ObjectId, ref: 'accessibilityFeature' },
  accessibilityControl: { type: Schema.Types.ObjectId, ref: 'accessibilityControl' },
  accessibilityAPI: { type: Schema.Types.ObjectId, ref: 'accessibilityAPI' },
  about: { type: Schema.Types.ObjectId, ref: 'about' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' } });
module.exports = mongoose.model('Recipe', schema);