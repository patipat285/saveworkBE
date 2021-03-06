const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("./config/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Allow client to access
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type, x-access-token");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


let apiProject = require("./controller/project/index");
app.use("/project", apiProject);



// let apiJobType = require("./controller/jobType/index")
// app.use("/jobType",apiJobType)



// let apiSaveWork = require("./controller/saveWork/index")
// app.use("/saveWork",apiSaveWork)




app.listen(3000, () => {
  console.log("server is running..");
});

module.exports = app;
