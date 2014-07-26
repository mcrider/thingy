var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ itemListElement: { type: Schema.Types.ObjectId, ref: 'itemListElement' },
  itemListOrder: { type: Schema.Types.ObjectId, ref: 'itemListOrder' },
  about: { type: Schema.Types.ObjectId, ref: 'about' },
  accessibilityAPI: { type: Schema.Types.ObjectId, ref: 'accessibilityAPI' },
  accessibilityControl: { type: Schema.Types.ObjectId, ref: 'accessibilityControl' },
  accessibilityFeature: { type: Schema.Types.ObjectId, ref: 'accessibilityFeature' },
  accessibilityHazard: { type: Schema.Types.ObjectId, ref: 'accessibilityHazard' },
  accountablePerson: { type: Schema.Types.ObjectId, ref: 'accountablePerson' },
  aggregateRating: { type: Schema.Types.ObjectId, ref: 'aggregateRating' },
  alternativeHeadline: { type: Schema.Types.ObjectId, ref: 'alternativeHeadline' },
  associatedMedia: { type: Schema.Types.ObjectId, ref: 'associatedMedia' },
  audience: { type: Schema.Types.ObjectId, ref: 'audience' },
  audio: { type: Schema.Types.ObjectId, ref: 'audio' },
  author: { type: Schema.Types.ObjectId, ref: 'author' },
  award: { type: Schema.Types.ObjectId, ref: 'award' },
  citation: { type: Schema.Types.ObjectId, ref: 'citation' },
  comment: { type: Schema.Types.ObjectId, ref: 'comment' },
  contentLocation: { type: Schema.Types.ObjectId, ref: 'contentLocation' },
  contentRating: { type: Schema.Types.ObjectId, ref: 'contentRating' },
  contributor: { type: Schema.Types.ObjectId, ref: 'contributor' },
  copyrightHolder: { type: Schema.Types.ObjectId, ref: 'copyrightHolder' },
  copyrightYear: { type: Schema.Types.ObjectId, ref: 'copyrightYear' },
  creator: { type: Schema.Types.ObjectId, ref: 'creator' },
  dateCreated: { type: Schema.Types.ObjectId, ref: 'dateCreated' },
  dateModified: { type: Schema.Types.ObjectId, ref: 'dateModified' },
  datePublished: { type: Schema.Types.ObjectId, ref: 'datePublished' },
  discussionUrl: { type: Schema.Types.ObjectId, ref: 'discussionUrl' },
  editor: { type: Schema.Types.ObjectId, ref: 'editor' },
  educationalAlignment: { type: Schema.Types.ObjectId, ref: 'educationalAlignment' },
  educationalUse: { type: Schema.Types.ObjectId, ref: 'educationalUse' },
  encoding: { type: Schema.Types.ObjectId, ref: 'encoding' },
  genre: { type: Schema.Types.ObjectId, ref: 'genre' },
  headline: { type: Schema.Types.ObjectId, ref: 'headline' },
  inLanguage: { type: Schema.Types.ObjectId, ref: 'inLanguage' },
  interactionCount: { type: Schema.Types.ObjectId, ref: 'interactionCount' },
  interactivityType: { type: Schema.Types.ObjectId, ref: 'interactivityType' },
  isBasedOnUrl: { type: Schema.Types.ObjectId, ref: 'isBasedOnUrl' },
  isFamilyFriendly: { type: Schema.Types.ObjectId, ref: 'isFamilyFriendly' },
  keywords: { type: Schema.Types.ObjectId, ref: 'keywords' },
  license: { type: Schema.Types.ObjectId, ref: 'license' },
  learningResourceType: { type: Schema.Types.ObjectId, ref: 'learningResourceType' },
  mentions: { type: Schema.Types.ObjectId, ref: 'mentions' },
  offers: { type: Schema.Types.ObjectId, ref: 'offers' },
  publisher: { type: Schema.Types.ObjectId, ref: 'publisher' },
  publishingPrinciples: { type: Schema.Types.ObjectId, ref: 'publishingPrinciples' },
  review: { type: Schema.Types.ObjectId, ref: 'review' },
  sourceOrganization: { type: Schema.Types.ObjectId, ref: 'sourceOrganization' },
  text: { type: Schema.Types.ObjectId, ref: 'text' },
  thumbnailUrl: { type: Schema.Types.ObjectId, ref: 'thumbnailUrl' },
  timeRequired: { type: Schema.Types.ObjectId, ref: 'timeRequired' },
  typicalAgeRange: { type: Schema.Types.ObjectId, ref: 'typicalAgeRange' },
  version: { type: Schema.Types.ObjectId, ref: 'version' },
  video: { type: Schema.Types.ObjectId, ref: 'video' },
  provider: { type: Schema.Types.ObjectId, ref: 'provider' },
  commentCount: { type: Schema.Types.ObjectId, ref: 'commentCount' },
  additionalType: { type: Schema.Types.ObjectId, ref: 'additionalType' },
  alternateName: { type: Schema.Types.ObjectId, ref: 'alternateName' },
  description: { type: Schema.Types.ObjectId, ref: 'description' },
  image: { type: Schema.Types.ObjectId, ref: 'image' },
  name: { type: Schema.Types.ObjectId, ref: 'name' },
  sameAs: { type: Schema.Types.ObjectId, ref: 'sameAs' },
  url: { type: Schema.Types.ObjectId, ref: 'url' },
  potentialAction: { type: Schema.Types.ObjectId, ref: 'potentialAction' } });
module.exports = mongoose.model('ItemList', schema);