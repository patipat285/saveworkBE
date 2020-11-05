let express = require('express');
let router = express.Router();


//load controller
const saveworkController = require('./saveWorkController');
router.use('/',saveworkController);



module.exports = router;
