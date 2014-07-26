var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var schema = new Schema({
  value:  { type: Schema.Types.ObjectId, ref: "Reservation" }
});
module.exports = mongoose.model('subReservation', schema);