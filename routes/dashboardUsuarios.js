var express = require('express');
var router = express.Router();

/* GET sección page. (login.ejs) */
router.get('/', function (req, res, next) {
    res.render('dashboardUsuarios', { title: 'Usuarios' });
});


module.exports = router;