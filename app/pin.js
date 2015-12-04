var Gpio = require('onoff').Gpio,
    led = new Gpio(21, 'out');

module.exports={
  led : led
};
