'use strict';

// dependencies
import riot from 'riot';

let authenticated = false;

function renderPage(page) {
  if (window.location.hash && !authenticated) {
    return riot.route('/');
  }
  return riot.mount('#main', page);
}

riot.route('/', () => renderPage('signin-page'));

riot.route('/panel', () => renderPage('panel-page'));

riot.route(() => {
  console.log('404');
});

module.exports = riot;
