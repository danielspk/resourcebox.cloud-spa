'use strict';

// dependencies
import * as riot from 'riot';

var mixin = {
  observable: riot.observable()
}

// TODO: no se respeta el orden de invocación de emisiones
mixin.observable.on('*', (event, args) => {
  console.log('Emmit: `' + event + '` ', args || null);
});

module.exports = mixin;
