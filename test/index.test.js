'use strict';

const test = require('tape');
const sinon = require('sinon');

const ajax = require('../src');

let sandbox, ajaxStub;
test('setup', t => {
  sandbox = sinon.sandbox.create();
  global.XMLHttpRequest = {
    open: () => {},
    onload: () => {},
    onerror: () => {},
    send: () => {}
  }
  ajaxStub = sandbox.stub(ajax, 'http').callsFake(() => Promise.resolve({
    prop: 'something'
  }))
  t.end();
});

test('ajax should return mock response', t => {
  return ajax.http({
    type: 'GET',
    route: '/api/someapi',
    body: {
      prop: 'something'
    }
  }).then(actual => {
    t.equal(actual.prop, 'something')
    t.end();
  })
});

test('teardown', t => {
  delete global.XMLHttpRequest;
  t.end();
});