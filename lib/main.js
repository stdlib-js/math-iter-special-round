/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var iterMap = require( '@stdlib/math-iter-tools-map' );
var round = require( '@stdlib/math-base-special-round' );


// MAIN //

/**
* Returns an iterator which rounds each iterated value to the nearest integer.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param {Iterator} iterator - input iterator
* @throws {TypeError} must provide an iterator protocol-compliant object
* @returns {Iterator} iterator
*
* @example
* var randu = require( '@stdlib/random-iter-randu' );
*
* var iter = iterRound( randu() );
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/
function iterRound( iterator ) {
	return iterMap( iterator, round );
}


// EXPORTS //

module.exports = iterRound;
