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
  ajaxStub = sandbox.stub(ajax, 'http').callsFake(() => Promise.resolve(
    {
      "login": "jbelmont",
      "id": 2974744,
      "avatar_url": "https://avatars3.githubusercontent.com/u/2974744?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jbelmont",
      "html_url": "https://github.com/jbelmont",
      "followers_url": "https://api.github.com/users/jbelmont/followers",
      "following_url": "https://api.github.com/users/jbelmont/following{/other_user}",
      "gists_url": "https://api.github.com/users/jbelmont/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jbelmont/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jbelmont/subscriptions",
      "organizations_url": "https://api.github.com/users/jbelmont/orgs",
      "repos_url": "https://api.github.com/users/jbelmont/repos",
      "events_url": "https://api.github.com/users/jbelmont/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jbelmont/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Jean-Marcel Belmont",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": "Software Engineer who is extremely passionate about the entire realm of software development. I am consumed with a love for learning and teaching what I learn.",
      "public_repos": 74,
      "public_gists": 2,
      "followers": 28,
      "following": 29,
      "created_at": "2012-12-05T21:26:45Z",
      "updated_at": "2017-09-08T14:45:06Z"
    }
  ))
  t.end();
});

test('ajax should return mock response', t => {
  return ajax.http({
    type: 'GET',
    route: 'https://api.github.com/users/jbelmont'
  }).then(actual => {
    t.equal(actual.login, 'jbelmont')
    t.end();
  })
});

test('teardown', t => {
  delete global.XMLHttpRequest;
  t.end();
});