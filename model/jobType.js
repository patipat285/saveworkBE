var mongoose = require("mongoose")

var jobtype = mongoose.Schema({
  jobTypeName : {type :String},
  code : {type : String}
})

var jobtypeModel = mongoose.model("jobtype",jobtype,"jobtype");
module.exports = jobtypeModel;
