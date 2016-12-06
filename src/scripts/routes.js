'use strict';

// dependencies
import * as riot from 'riot';
import route from 'riot-route';
import mixin from './observable';
import Security from './security';

function renderPage(page) {
  if (window.location.hash && !Security.isAuthenticated()) {
    return route('/');
  }

  riot.mount('#main', page);
}

route('/', () => renderPage('signin-page'));
route('/panel', () => renderPage('panel-page'));
route('/detail', () => renderPage('detail-page'));
route('/about', () => renderPage('about-page'));
route('/logout', () => renderPage('logout-page'));

route(() => {
  console.log('404');
});

module.export = { riot, route };
