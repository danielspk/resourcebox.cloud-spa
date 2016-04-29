'use strict';

// dependencies
import eventEmitter from 'event-emitter';

// components
import Signin   from './components/signin.js';
import Resource from './components/resource.js';
import Detail   from './components/detail.js';

class App {
  constructor(body) {
    this.eventEmitter = eventEmitter();
    this.signinComponent = new Signin(body);
    this.resourceComponent = new Resource(body);
    this.detailComponent = new Detail(body);
  }
  init() {
    this.signinComponent.render();
    this.eventsOn();
  }
  eventsOn() {
    this.eventEmitter.on('sigin.authenticate', (args) => { this.onSiginAuthenticate(args); });
  }
  onSiginAuthenticate(response) {
    console.log('On Sigin event response: ' + response);
    //signinComponent.removeEvents();
    //resourcesComponent.render();
  }
}

module.exports = App;
