const express = require("express");
const router = express.Router();
const workModel = require("../../model/saveWork");
const moment = require('moment');


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
  // console.log("req.params._id", req.params._id)
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
    date :moment(req.body.date).format(),
    detail : req.body.detail,
    jobType : req.body.jobType,
    project : req.body.project,
    timeIn : moment(req.body.timeIn).format(),
    timeOut : moment(req.body.timeOut).format()
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

let data = {
    date : moment(req.body.date).format(),
    detail : req.body.detail,
    jobType : req.body.jobType,
    project : req.body.project,
    timeIn : moment(req.body.timeIn).format(),
    timeOut : moment(req.body.timeOut).format()

}
console.log("data", data)
    // let date = moment(req.body.date).format();
    // let detail = req.body.detail;
    // let jobType = req.body.jobType;
    // let project = req.body.project;
    // let timeIn = moment(req.body.timeIn).format();
    // let timeOut = moment(req.body.timeOut).format();
  
    workModel.create(data, (err, doc) => {
      if (err) {
        res.send({
          result: "failed"
        });
      }
      res.send({
        result: "success",
      
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

  try {
    let dataDate = {};
    
    if(req.body.searchFromDateFrom) {
      let a =  moment(req.body.searchFromDateFrom).set({
        hour:  0,
        minute: 0,
        second: 0
    }).toDate();
      let b =  moment(req.body.searchFromDateFrom).set({
        hour:  23,
        minute: 59,
        second: 59
    }).toDate();
      dataDate.date = { $gte : a, $lte : b}
    }
    
    if(req.body.searchFromProject) {
      dataDate.project =  new RegExp (req.body.searchFromProject,"i")
    }
    
    if(req.body.searchFromJobType) {
      dataDate.jobType =  new RegExp (req.body.searchFromJobType,"i")
    }
    
    console.log("dataDate", dataDate)

    workModel.find(dataDate,(err , data) =>{
    console.log("data", data)
      
    res.send(data)
    });

  } catch (error) {
    console.log("error", error)
    res.send('error')
  }

});




module.exports = router;
