[![Build Status](https://travis-ci.org/jbelmont/ajax.svg?branch=master)](https://travis-ci.org/jbelmont/ajax)
[![Coverage Status](https://coveralls.io/repos/github/jbelmont/ajax/badge.svg?branch=master)](https://coveralls.io/github/jbelmont/ajax?branch=master)

# ajax

A small library that handles simple crud actions

Simply call http method in the library

The http function takes 3 parameters:

* type is the HTTP verb to use ('PUT', 'POST', 'GET', 'DELETE')
* route is the route to the endpoint
* body is the body of the request if there is one

Here is a sample call to http function

```js
const ajax = require('ajax').http

return ajax(
  type: 'GET',
  route: '/api/v1/someapi',
  body: {}
)
```

The call to ajax will return a promise