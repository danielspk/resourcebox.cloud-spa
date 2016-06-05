'use strict';

// dependencies
import riot from 'riot';

var signin = {
  observable: riot.observable()
}

signin.observable.on('sendSignin', function(data) {
  console.log('on sendSignin: ' + data);
});

module.exports = signin;
