'use strict';

class ValidationException {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }  
}

module.exports = ValidationException;
