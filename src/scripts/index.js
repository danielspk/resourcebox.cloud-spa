'use strict';

// client dependencies and polyfills
import 'downloadjs';
import 'whatwg-fetch';

// main controller
import App from './app.js';

window.onload = () => {
  const main = document.querySelector('main');
  new App(main).init();
};
