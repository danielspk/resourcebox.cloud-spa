'use strict';

import Signin from './components/signin.js';

class App {
  constructor(body) {
    this.signin = new Signin(body);
  }
  init() {
    this.signin.render();
  }
}

module.exports = App;
