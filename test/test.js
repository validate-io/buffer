'use strict';

// MODULES //

var test = require( 'tape' );
var isBuffer = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof isBuffer === 'function', 'export is a function' );
	t.end();
});

test( 'if provided a Buffer object, the function returns `true`', function test( t ) {
	var values;
	var i;

	values = [
		new Buffer( [1,2,3,4] ),
		new Buffer( 'beep' ),
		new Buffer( new Buffer(4) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.ok( isBuffer( values[i] ), 'returned `true` for value ' + i );
	}
	t.end();
});

test( 'if provided any value other than a Buffer object, the function returns `false`', function test( t ) {
	var values;
	var i;

	values = [
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

	for ( i = 0; i < values.length; i++ ) {
		t.notOk( isBuffer( values[i] ), 'returned `false` for  value: ' + values[i] );
	}

	function Foo() {
		return this;
	}
	Foo.prototype.isBuffer = null;

	t.notOk( isBuffer( new Foo() ), 'returned `false` when provided a class with an `isBuffer` method' );

	t.end();
});
