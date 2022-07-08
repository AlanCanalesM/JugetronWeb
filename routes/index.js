var express = require('express');
var router = express.Router();

/* GET home page. (index.ejs) */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET sección page. (login.ejs) */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Loggeate' });
});

/* GET sección page. (main.ejs) */
router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Pagina principal' });
});

module.exports = router;
