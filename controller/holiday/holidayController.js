const express = require("express");
const router = express.Router();
const holidayModel = require("../../model/holiday");


router.get("/getDataHoliday", (req, res) => {
  holidayModel.find(req.body, (err, data) => {
    if (err) {
      res.send({
        result: "failed"
      });
    } else {
      res.send(data);
    }
  });
});



module.exports = router;
