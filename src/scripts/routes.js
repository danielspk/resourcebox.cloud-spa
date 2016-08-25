'use strict';

// dependencies
import riot from 'riot';
import mixin from './observable';

let authenticated = false;

function renderPage(page) {
  if (window.location.hash && !authenticated) {
    //return riot.route('/');
  }

  riot.mount('#main', page);

  mixin.observable.trigger('route.changed', page);  
}

riot.route('/', () => renderPage('signin-page'));
riot.route('/panel', () => renderPage('panel-page'));
riot.route('/about', () => renderPage('about-page'));
riot.route('/contact', () => renderPage('contact-page'));

riot.route(() => {
  console.log('404');
});

module.exports = riot;
