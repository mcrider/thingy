var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "Seat" }
});
module.exports = mongoose.model('ticketedSeat', schema);