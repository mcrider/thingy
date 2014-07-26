var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "BlogPosting" }
});
module.exports = mongoose.model('blogPost', schema);