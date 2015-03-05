/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isBuffer = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-buffer', function tests() {

	it( 'should export a function', function test() {
		expect( isBuffer ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var values = [
			new Buffer( [1,2,3,4] ),
			new Buffer( 'beep' ),
			new Buffer( new Buffer(4) )
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( isBuffer( values[i] ), i );
		}
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			NaN,
			null,
			undefined,
			true,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isBuffer( values[i] ), values[i] );
		}

		function Foo() {
			return this;
		}
		Foo.prototype.isBuffer = null;

		assert.notOk( isBuffer( new Foo() ), 'class with isBuffer method' );
	});

});
