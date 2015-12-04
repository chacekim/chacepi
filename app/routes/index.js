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
  console.log('LED is turned ON');
  pin.led.writeSync(1);
  res.render('on');
});

router.get('/led/off', function(req, res, next) {
  console.log('LED is turned OFF');
  pin.led.writeSync(0);
  res.render('off');
});

module.exports = router;
