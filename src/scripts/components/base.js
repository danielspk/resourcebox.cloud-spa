'use strict';

// dependencies
import delegate     from 'delegate';
import handlebars   from 'handlebars';
import eventEmitter from 'event-emitter';

// data configuration
import config from './../config/data';

class Base {
  constructor() {
    this.URL = config.serverHost;
    this.APP = config.applicationName;
    this.templateEngine = handlebars;
    this.eventDelegator = delegate;
    this.eventEmitter = eventEmitter();
    this.template = null;
    this.body = null;
  }
}

module.exports = Base;
