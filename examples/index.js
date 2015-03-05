'use strict';

var isBuffer = require( './../lib' );

console.log( isBuffer( new Buffer( [1,2,3,4] ) ) );
// returns true

console.log( isBuffer( new Buffer( 'beep' ) ) );
// returns true

console.log( isBuffer( [] ) );
// returns false
