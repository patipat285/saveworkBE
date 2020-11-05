var mongoose = require("mongoose")

var project = mongoose.Schema({
  projectName : {type :String}
})

var projectModel = mongoose.model("project",project,"project");
module.exports = projectModel;
