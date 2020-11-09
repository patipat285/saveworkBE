let express = require('express');
let router = express.Router();


//load controller
const holidayController = require('./holidayController');
router.use('/',holidayController);

module.exports = router;
