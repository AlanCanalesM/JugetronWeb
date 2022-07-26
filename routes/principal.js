/*
var express = require('express');
var router = express.Router();

/* GET sección page. (login.ejs) 
router.get('/', function (req, res, next) {
    res.render('main', { title: 'Loggeate', nombre:'Sign-Up' });
});


module.exports = router;
*/

var express = require('express');
var router = express.Router();

const mainController = require("../controllers/mainController");


router.get('/', mainController.index);

module.exports = router;