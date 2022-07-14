const { application } = require('express');
var express = require('express');
var router = express.Router();

router.use(express.json());
/* GET home page. (index.ejs) */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET sección page. (main.ejs) */
router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Pagina principal' });
});



module.exports = router;
