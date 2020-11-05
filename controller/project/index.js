let express = require('express');
let router = express.Router();


//load controller
const projectController = require('./projectController');
router.use('/',projectController);



module.exports = router;
