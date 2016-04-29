'use strict';

//components
import Base from './base';

class Resource extends Base {
  constructor(body) {
    super();
    this.body = body;
  }
  render() { }
  compileTemplate() { }
  registerEvents() { }
  removeEvents() { }
}

module.exports = Resource;
