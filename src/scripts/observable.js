'use strict';

// dependencies
import * as riot from 'riot';

var mixin = {
  observable: riot.observable()
}

mixin.observable.on('sendSignin', function(data) {
  console.log('on sendSignin: ' + data);
});

module.exports = mixin;
