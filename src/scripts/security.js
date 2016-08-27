'use strict';

const SESSION_KEY = 'jwt';

class Security {
  static isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) || false;
  }
  static storeAuthentication(jwt) {
    sessionStorage.setItem(SESSION_KEY, jwt);
  }
  static getAuthentication() {
    return sessionStorage.getItem(SESSION_KEY);
  }
  static removeAuthentication() {
    sessionStorage.removeItem(SESSION_KEY);
  }
}

module.exports = Security;
