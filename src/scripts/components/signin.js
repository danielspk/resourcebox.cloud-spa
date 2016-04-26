'use strict';

// dependencies
import alertify from 'alertify.js';

// exceptions
import ValidationException from './../exceptions/validation';

//components
import Base from './base';

class Signin extends Base {
  constructor(body) {
    super();
    this.body = body;
    this.evSiginButton = null;
  }
  render() {
    this.compileTemplate()
      .then( (template) => {
        this.body.innerHTML = template();
        this.registerEvents();
      });
  }
  compileTemplate() {
    if (this.template) {
      return Promise.resolve(this.template);
    }
    return fetch('/templates/signin.html')
      .then( (response) => {
        return response.text()
      }).then( (body) => {
        return this.template = this.templateEngine.compile(body);
      });
  }
  registerEvents() {
    const formSigin = document.querySelector('.signin');
    this.evSiginButton = this.eventDelegator(formSigin, 'button', 'click', (e) => {
      this.authenticate();
    });
  }
  removeEvents() {
    this.evSiginButton.destroy();
  }
  authenticate() {
    //@todo: validator
    const accountId = document.querySelector('.signin form input[name="account_id"]');
    const accountSecret = document.querySelector('.signin form input[name="account_secret"]');
    if (!accountId.value) {
      return this.showError('Empty account id');
    }
    if (!accountSecret.value) {
      return this.showError('Empty account secret');
    }
    fetch(this.URL + '/oauth/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        account_id: accountId.value,
        account_secret: accountSecret.value
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.status !== 201) {
          throw new ValidationException(json.status, (json.status == 400) ? 'ID / SECRET is invalid' : 'Unknown error');
        }
        sessionStorage.setItem('token', json.access_token);
        sessionStorage.setItem('refresh_token', json.refresh_token);
        this.eventEmitter.emit('sigin.authenticate', json);
      })
      .catch((err) => {
        if (!(err instanceof ValidationException)) {
          return this.showError('Connection error');
        }
        this.showError(err.message);
      });
  }
  showError(message) {
    alertify.logPosition('top right');
    alertify.maxLogItems(1);
    alertify.error(message);
  }
}

module.exports = Signin;
