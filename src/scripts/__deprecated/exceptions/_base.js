'use strict';

class BaseException {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }  
}

module.exports = BaseException;
