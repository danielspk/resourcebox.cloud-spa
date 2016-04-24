'use strict';

import Base from './base';

class Signin extends Base {
  constructor(body) {
    super();
    this.body = body;
    this.template = null;
  }
  render() {
    this.compileTemplate()
      .then( (body) => {
        let template = this.templateEngine.compile(body);
        this.body.innerHTML = template();
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
        this.template = body;
        return body;
      });
  }
}

module.exports = Signin;
