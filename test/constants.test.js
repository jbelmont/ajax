'use strict';

const test = require('tape');

const {
  PUT,
  POST
} = require('../constants').verbs;

test('verbs should render', t => {
  t.plan(2);
  t.equal(PUT, 'PUT', `should be equal to value: ${PUT}`);
  t.equal(POST, 'POST', `should be equal to value: ${POST}`);
});