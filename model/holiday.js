var mongoose = require("mongoose")

var holiday = mongoose.Schema({
  text : {type :String},
  startDate : {type :String}
})

var holidayModel = mongoose.model("holiday",holiday,"holiday");
module.exports = holidayModel;
