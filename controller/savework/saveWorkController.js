const express = require("express");
const router = express.Router();
const workModel = require("../../model/saveWork");



router.get("/getDataWork", (req, res) => {
  workModel.find(req.body, (err, data) => {
    if (err) {
      res.send({
        result: "failed"
      });
    } else {
      res.send(data);
    }
  });
});


router.get("/getDataWorkforupdate/:_id", (req, res) => {
  console.log("req.params._id", req.params._id)
  workModel.findById(req.params._id, (err, data) => {
    if (err) {
      res.send({
        result: "failed"
      });
    } else {
      res.send(data);
    }
  });
});



router.put("/updateWork/:_id", (req,res)=>{
  let dataWork = {
    date :req.body.date,
    detail : req.body.detail,
    jobType : req.body.jobType,
    project : req.body.project,
    timeIn : req.body.timeIn,
    timeOut : req.body.timeOut
   };

   workModel.findByIdAndUpdate(
     req.params._id,{ $set : dataWork }, {new: true}, (err,data) =>{
     if(err){
       res.send({
         result: "failed"
       });
     }else {
       res.send({
        result : "success",
        dataWork : data

        });
     }
   })
 })



router.post("/createWork", (req, res) => {
console.log("req", req.body)
    let date = req.body.date;
    let detail = req.body.detail;
    let jobType = req.body.jobType;
    let project = req.body.project;
    let timeIn = req.body.timeIn;
    let timeOut = req.body.timeOut;
    workModel.create(req.body, (err, doc) => {
      if (err) {
        res.send({
          result: "failed"
        });
      }
      res.send({
        result: "success",
        date: date,
        detail: detail,
        jobType: jobType,
        project: project,
        timeIn: timeIn,
        timeOut: timeOut,
      });
    });
  });




router.delete("/deleteDataWork/:_id", (req, res) => {
  workModel.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) {
      res.send({
        result: "failed"
      });
    } else {
      res.send({
        result : "success",
        });
    }
  });
});


router.post("/searchListWork", async (req, res) => {
console.log("req", req.body)
  try {
    let data = {};
    if(req.body.searchFromDateFrom) {
      data.date =  new RegExp (req.body.searchFromDateFrom,"i")
    }

    // if(req.body.searchFromDateTo) {
    //   data.date =  new RegExp (req.body.searchFromDateTo,"i")
    // }

    if(req.body.searchFromProject) {
      data.project =  new RegExp (req.body.searchFromProject,"i")
    }

    if(req.body.searchFromJobType) {
      data.jobType =  new RegExp (req.body.searchFromJobType,"i")
    }


    console.log("data", data)
    workModel.find(data,(err , data) =>{
    res.send(data)
    });

  } catch (error) {
    console.log("error", error)
    res.send('error')
  }

});




module.exports = router;
