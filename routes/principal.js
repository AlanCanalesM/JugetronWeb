var express = require('express');
var router = express.Router();

const mainController = require("../controllers/mainController");


//router.get('/', mainController.index);
router.get('/', mainController.index2);


module.exports = router;