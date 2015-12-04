var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/led', function(req, res, next) {
  console.log('This is where you can control LED with Web Interface');
  res.render('led', { myVar: 'Yo' });
});

module.exports = router;
