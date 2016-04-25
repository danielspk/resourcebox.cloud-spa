'use strict';

// dependencies
import delegate     from 'delegate';
import handlebars   from 'handlebars';
import eventEmitter from 'event-emitter';

class Base {
  constructor() {
    this.URL = 'https://resourcebox.cloud/api/v1';
    this.templateEngine = handlebars;
    this.eventDelegator = delegate;
    this.eventEmitter = eventEmitter();
    this.template = null;
    this.body = null;
  }
}

module.exports = Base;
