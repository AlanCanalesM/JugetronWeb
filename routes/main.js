var express = require('express');
var router = express.Router();

/* GET sección page. (login.ejs) */
router.get('/', function (req, res, next) {
    res.render('main', { title: 'Loggeate', nombre:'Sign-Up' });
});


module.exports = router;