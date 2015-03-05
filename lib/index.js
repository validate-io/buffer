/**
*
*	VALIDATE: buffer
*
*
*	DESCRIPTION:
*		- Validates if a value is a Buffer object.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

/**
* FUNCTION: isBuffer( value )
*	Validates if a value is a Buffer object.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is a Buffer object
*/
function isBuffer( val ) {
	return typeof val === 'object' && val !== null && val.constructor && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer( val );
} // end FUNCTION isBuffer()


// EXPORTS //

module.exports = isBuffer;
