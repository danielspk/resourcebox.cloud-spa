'use strict';

// dependencies
import riot from 'riot';
import mixin from './observable';
import Security from './security';

function renderPage(page) {
  if (window.location.hash && !Security.isAuthenticated()) {
    return riot.route('/');
  }

  riot.mount('#main', page);
}

riot.route('/', () => renderPage('signin-page'));
riot.route('/panel', () => renderPage('panel-page'));
riot.route('/detail', () => renderPage('detail-page'));
riot.route('/about', () => renderPage('about-page'));
riot.route('/logout', () => renderPage('logout-page'));

riot.route(() => {
  console.log('404');
});

module.exports = riot;
