'use strict';

const constants = require('../constants');
const {
  PUT,
  POST
} = constants.verbs;

const {
  OK,
  BAD_REQUEST
} = constants.statusCodes;

function ajax({type, route, body}) {
  const TYPE = type.toUpperCase();
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(type, route, true);
    if (TYPE === POST || TYPE === PUT && body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.setRequestHeader("Accept", "application/json");
    }

    request.onload = function() {
      if (this.status >= OK && this.status < BAD_REQUEST) {
        const data = JSON.parse(this.response);
        resolve(data);
      } else {
        reject(new Error('error ocurred'));
      }
    };

    request.onerror = function() {
      console.error('Something went wrong with the transaction');
    };

    if (body) {
        request.send(JSON.stringify(body));
    } else {
      request.send();
    }
  });
}

module.exports = {
  http: ajax
};