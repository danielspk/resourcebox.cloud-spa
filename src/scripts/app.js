'use strict';

// dependencies
import eventEmitter from 'event-emitter';
import page         from 'page';

// components
import Signin   from './components/signin.js';
import Resource from './components/resource.js';
import Detail   from './components/detail.js';

class App {
  constructor(body) {
    this.eventEmitter = eventEmitter();
    this.page = page;
    this.signinComponent = new Signin(body);
    this.resourceComponent = new Resource(body);
    this.detailComponent = new Detail(body);
  }
  init() {
    this.createRoutes();
    this.eventsOn();
  }
  createRoutes() {
    this.page('/', () => {
      this.signinComponent.render();
    });
    this.page('/resources', () => {

    });
    this.page('/resourceDetail', () => {
      
    });
    this.page({ hashbang: true });
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
