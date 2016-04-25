'use strict';

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
    this.hideErrors();
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
        if (response.status !== 201) {
          throw response.status;
        }
        return response.json();
      })
      .then((json) => {
        this.eventEmitter.emit('sigin.authenticate', json);
      })
      .catch((err) => {
        if (err === 400) {
          //return showErrors();
        }
        showErrors({ errors: [{ message: 'Error authentication.' }] });
      });
  }
  showErrors(errors) {
    //@todo: pending...
  }
  hideErrors() {
    //@todo: pending...
  }
}

module.exports = Signin;
