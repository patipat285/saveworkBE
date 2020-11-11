var mongoose = require("mongoose")

var saveWork = mongoose.Schema({
  date : {type :Date},
  project : {type : String},
  jobType : {type :String},
  detail : {type : String},
  timeIn : {type :String},
  timeOut : {type : String}
})

var saveWorkModel = mongoose.model("saveWork",saveWork,"saveWork");
module.exports = saveWorkModel;
