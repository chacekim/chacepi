var express = require('express');
var router = express.Router();
var pin = require('../pin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/led', function(req, res, next) {
  console.log('This is where you can control LED with Web Interface');
  res.render('led', { myVar: 'Yo' });
});

router.get('/led/on', function(req, res, next) {
  console.log('LED is turned on');
  pin.led.writeSync(1);
});

router.get('/led/off/', function(req, res, next) {
  console.log('LED is turned OFF');
  pin.led.writeSync(0);
});

module.exports = router;
