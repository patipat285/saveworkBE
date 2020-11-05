const express = require("express");
const router = express.Router();
const jobtypeModel = require("../../model/jobType");




router.get("/getDataJobtype", (req, res) => {
  jobtypeModel.find(req.body, (err, data) => {
    if (err) {
      res.send({
        result: "failed"
      });
    } else {
      res.send(data);
    }
  });
});


router.get("/getDataJobTypeforupdate/:_id", (req, res) => {
  console.log("req.params._id", req.params._id)
  jobtypeModel.findById(req.params._id, (err, data) => {
    if (err) {
      res.send({
        result: "failed"
      });
    } else {
      res.send(data);
    }
  });
});



router.put("/updateJobType/:_id", (req,res)=>{
  let dataJobtype = {
    jobTypeName : req.body.jobTypeName,
    code : req.body.code
   };

   jobtypeModel.findByIdAndUpdate(
     req.params._id,{ $set : dataJobtype }, {new: true}, (err,data) =>{
     if(err){
       res.send({
         result: "failed"
       });
     }else {
       res.send({
        result : "success",
        dataJobtype : data

        });
     }
   })
 })



router.post("/createJobtype", (req, res) => {
console.log("req.body ===",req.body);

   let jobTypeName = req.body.jobTypeName;
   let code = req.body.code;

    jobtypeModel.create(req.body, (err, doc) => {
      if (err) {
        res.send({
          result: "failed"
        });
      }
      res.send({
        result: "success",
        jobTypeName: jobTypeName,
        code : code

      });
    });
  });




router.delete("/deleteDataJobType/:_id", (req, res) => {
  jobtypeModel.findByIdAndDelete(req.params._id, (err, data) => {
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


router.post("/searchListJobType", async (req, res) => {

  try {
    let data = {};
    if(req.body.jobTypeName) {
      data.jobTypeName =  new RegExp (req.body.jobTypeName,"i")
    }

    if(req.body.code) {
      data.code =  new RegExp (req.body.code,"i")
    }

    jobtypeModel.find(data,(err , data) =>{
    res.send(data)
    });

  } catch (error) {
    console.log("error", error)
    res.send('error')
  }

});


module.exports = router;
