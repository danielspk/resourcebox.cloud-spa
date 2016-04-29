'use strict';

//components
import BaseException from './base';

class ValidationException extends BaseException {
  constructor(code, message) {
    super(code, message);
  }  
}

module.exports = ValidationException;
