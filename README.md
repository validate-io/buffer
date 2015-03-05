buffer
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a Buffer object.


## Installation

``` bash
$ npm install validate.io-buffer
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


__Note__: while the module does not have any dependencies, the module is really only useful in the browser when combined with a browserified [Buffer](https://github.com/feross/buffer) module.



## Usage

``` javascript
var isBuffer = require( 'validate.io-buffer' );
```

#### isBuffer( value )

Validates if a `value` is a `Buffer` object.

``` javascript
var value = new Buffer( [1,2,3,4] );

var bool = isBuffer( value );
// returns true
```


## Examples

``` javascript
var isBuffer = require( 'validate.io-buffer' );

console.log( isBuffer( new Buffer( [1,2,3,4] ) ) );
// returns true

console.log( isBuffer( new Buffer( 'beep' ) ) );
// returns true

console.log( isBuffer( [] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-buffer.svg
[npm-url]: https://npmjs.org/package/validate.io-buffer

[travis-image]: http://img.shields.io/travis/validate-io/buffer/master.svg
[travis-url]: https://travis-ci.org/validate-io/buffer

[coveralls-image]: https://img.shields.io/coveralls/validate-io/buffer/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/buffer?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/buffer.svg
[dependencies-url]: https://david-dm.org/validate-io/buffer

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/buffer.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/buffer

[github-issues-image]: http://img.shields.io/github/issues/validate-io/buffer.svg
[github-issues-url]: https://github.com/validate-io/buffer/issues
