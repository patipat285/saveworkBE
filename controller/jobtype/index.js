let express = require('express');
let router = express.Router();


//load controller
const jobTypeController = require('./jobTypeController');
router.use('/',jobTypeController);

module.exports = router;
