'use strict';

import Handlebars from 'handlebars';

class Base {
  constructor() {
    this.URL = 'https://resourcebox.cloud/api/v1';
    this.templateEngine = Handlebars;
  }
}

module.exports = Base;
