/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace constants
*/
var constants = {};

/**
* @name APERY
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/apery}
*/
setReadOnly( constants, 'APERY', require( '@stdlib/constants-float64-apery' ) );

/**
* @name CATALAN
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/catalan}
*/
setReadOnly( constants, 'CATALAN', require( '@stdlib/constants-float64-catalan' ) );

/**
* @name CBRT_EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/cbrt-eps}
*/
setReadOnly( constants, 'CBRT_EPS', require( '@stdlib/constants-float64-cbrt-eps' ) );

/**
* @name E
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/e}
*/
setReadOnly( constants, 'E', require( '@stdlib/constants-float64-e' ) );

/**
* @name EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/eps}
*/
setReadOnly( constants, 'EPS', require( '@stdlib/constants-float64-eps' ) );

/**
* @name EULERGAMMA
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/eulergamma}
*/
setReadOnly( constants, 'EULERGAMMA', require( '@stdlib/constants-float64-eulergamma' ) );

/**
* @name EXPONENT_BIAS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/exponent-bias}
*/
setReadOnly( constants, 'EXPONENT_BIAS', require( '@stdlib/constants-float64-exponent-bias' ) );

/**
* @name FOURTH_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/fourth-pi}
*/
setReadOnly( constants, 'FOURTH_PI', require( '@stdlib/constants-float64-fourth-pi' ) );

/**
* @name FOURTH_ROOT_EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/fourth-root-eps}
*/
setReadOnly( constants, 'FOURTH_ROOT_EPS', require( '@stdlib/constants-float64-fourth-root-eps' ) );

/**
* @name GAMMA_LANCZOS_G
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/gamma-lanczos-g}
*/
setReadOnly( constants, 'GAMMA_LANCZOS_G', require( '@stdlib/constants-float64-gamma-lanczos-g' ) );

/**
* @name GLAISHER
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/glaisher-kinkelin}
*/
setReadOnly( constants, 'GLAISHER', require( '@stdlib/constants-float64-glaisher-kinkelin' ) );

/**
* @name HALF_LN2
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/half-ln-two}
*/
setReadOnly( constants, 'HALF_LN2', require( '@stdlib/constants-float64-half-ln-two' ) );

/**
* @name HALF_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/half-pi}
*/
setReadOnly( constants, 'HALF_PI', require( '@stdlib/constants-float64-half-pi' ) );

/**
* @name HIGH_WORD_ABS_MASK
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/high-word-abs-mask}
*/
setReadOnly( constants, 'HIGH_WORD_ABS_MASK', require( '@stdlib/constants-float64-high-word-abs-mask' ) );

/**
* @name HIGH_WORD_EXPONENT_MASK
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/high-word-exponent-mask}
*/
setReadOnly( constants, 'HIGH_WORD_EXPONENT_MASK', require( '@stdlib/constants-float64-high-word-exponent-mask' ) );

/**
* @name HIGH_WORD_SIGN_MASK
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/high-word-sign-mask}
*/
setReadOnly( constants, 'HIGH_WORD_SIGN_MASK', require( '@stdlib/constants-float64-high-word-sign-mask' ) );

/**
* @name HIGH_WORD_SIGNIFICAND_MASK
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/high-word-significand-mask}
*/
setReadOnly( constants, 'HIGH_WORD_SIGNIFICAND_MASK', require( '@stdlib/constants-float64-high-word-significand-mask' ) );

/**
* @name LN_HALF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/ln-half}
*/
setReadOnly( constants, 'LN_HALF', require( '@stdlib/constants-float64-ln-half' ) );

/**
* @name LN_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/ln-pi}
*/
setReadOnly( constants, 'LN_PI', require( '@stdlib/constants-float64-ln-pi' ) );

/**
* @name LN_SQRT_TWO_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/ln-sqrt-two-pi}
*/
setReadOnly( constants, 'LN_SQRT_TWO_PI', require( '@stdlib/constants-float64-ln-sqrt-two-pi' ) );

/**
* @name LN10
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/ln-ten}
*/
setReadOnly( constants, 'LN10', require( '@stdlib/constants-float64-ln-ten' ) );

/**
* @name LN2
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/ln-two}
*/
setReadOnly( constants, 'LN2', require( '@stdlib/constants-float64-ln-two' ) );

/**
* @name LN_TWO_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/ln-two-pi}
*/
setReadOnly( constants, 'LN_TWO_PI', require( '@stdlib/constants-float64-ln-two-pi' ) );

/**
* @name LOG2E
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/log2-e}
*/
setReadOnly( constants, 'LOG2E', require( '@stdlib/constants-float64-log2-e' ) );

/**
* @name LOG10E
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/log10-e}
*/
setReadOnly( constants, 'LOG10E', require( '@stdlib/constants-float64-log10-e' ) );

/**
* @name MAX
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max}
*/
setReadOnly( constants, 'MAX', require( '@stdlib/constants-float64-max' ) );

/**
* @name MAX_BASE2_EXPONENT
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-base2-exponent}
*/
setReadOnly( constants, 'MAX_BASE2_EXPONENT', require( '@stdlib/constants-float64-max-base2-exponent' ) );

/**
* @name MAX_BASE2_EXPONENT_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-base2-exponent-subnormal}
*/
setReadOnly( constants, 'MAX_BASE2_EXPONENT_SUBNORMAL', require( '@stdlib/constants-float64-max-base2-exponent-subnormal' ) );

/**
* @name MAX_BASE10_EXPONENT
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-base10-exponent}
*/
setReadOnly( constants, 'MAX_BASE10_EXPONENT', require( '@stdlib/constants-float64-max-base10-exponent' ) );

/**
* @name MAX_BASE10_EXPONENT_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-base10-exponent-subnormal}
*/
setReadOnly( constants, 'MAX_BASE10_EXPONENT_SUBNORMAL', require( '@stdlib/constants-float64-max-base10-exponent-subnormal' ) );

/**
* @name MAX_LN
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-ln}
*/
setReadOnly( constants, 'MAX_LN', require( '@stdlib/constants-float64-max-ln' ) );

/**
* @name MAX_SAFE_FIBONACCI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-safe-fibonacci}
*/
setReadOnly( constants, 'MAX_SAFE_FIBONACCI', require( '@stdlib/constants-float64-max-safe-fibonacci' ) );

/**
* @name MAX_SAFE_INTEGER
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-safe-integer}
*/
setReadOnly( constants, 'MAX_SAFE_INTEGER', require( '@stdlib/constants-float64-max-safe-integer' ) );

/**
* @name MAX_SAFE_LUCAS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-safe-lucas}
*/
setReadOnly( constants, 'MAX_SAFE_LUCAS', require( '@stdlib/constants-float64-max-safe-lucas' ) );

/**
* @name MAX_SAFE_NTH_FIBONACCI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-safe-nth-fibonacci}
*/
setReadOnly( constants, 'MAX_SAFE_NTH_FIBONACCI', require( '@stdlib/constants-float64-max-safe-nth-fibonacci' ) );

/**
* @name MAX_SAFE_NTH_LUCAS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/max-safe-nth-lucas}
*/
setReadOnly( constants, 'MAX_SAFE_NTH_LUCAS', require( '@stdlib/constants-float64-max-safe-nth-lucas' ) );

/**
* @name MIN_BASE2_EXPONENT
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/min-base2-exponent}
*/
setReadOnly( constants, 'MIN_BASE2_EXPONENT', require( '@stdlib/constants-float64-min-base2-exponent' ) );

/**
* @name MIN_BASE2_EXPONENT_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/min-base2-exponent-subnormal}
*/
setReadOnly( constants, 'MIN_BASE2_EXPONENT_SUBNORMAL', require( '@stdlib/constants-float64-min-base2-exponent-subnormal' ) );

/**
* @name MIN_BASE10_EXPONENT
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/min-base10-exponent}
*/
setReadOnly( constants, 'MIN_BASE10_EXPONENT', require( '@stdlib/constants-float64-min-base10-exponent' ) );

/**
* @name MIN_BASE10_EXPONENT_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/min-base10-exponent-subnormal}
*/
setReadOnly( constants, 'MIN_BASE10_EXPONENT_SUBNORMAL', require( '@stdlib/constants-float64-min-base10-exponent-subnormal' ) );

/**
* @name MIN_LN
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/min-ln}
*/
setReadOnly( constants, 'MIN_LN', require( '@stdlib/constants-float64-min-ln' ) );

/**
* @name MIN_SAFE_INTEGER
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/min-safe-integer}
*/
setReadOnly( constants, 'MIN_SAFE_INTEGER', require( '@stdlib/constants-float64-min-safe-integer' ) );

/**
* @name NAN
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/nan}
*/
setReadOnly( constants, 'NAN', require( '@stdlib/constants-float64-nan' ) );

/**
* @name NINF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/ninf}
*/
setReadOnly( constants, 'NINF', require( '@stdlib/constants-float64-ninf' ) );

/**
* @name NUM_BYTES
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/num-bytes}
*/
setReadOnly( constants, 'NUM_BYTES', require( '@stdlib/constants-float64-num-bytes' ) );

/**
* @name PHI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/phi}
*/
setReadOnly( constants, 'PHI', require( '@stdlib/constants-float64-phi' ) );

/**
* @name PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/pi}
*/
setReadOnly( constants, 'PI', require( '@stdlib/constants-float64-pi' ) );

/**
* @name PI_SQUARED
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/pi-squared}
*/
setReadOnly( constants, 'PI_SQUARED', require( '@stdlib/constants-float64-pi-squared' ) );

/**
* @name PINF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/pinf}
*/
setReadOnly( constants, 'PINF', require( '@stdlib/constants-float64-pinf' ) );

/**
* @name PRECISION
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/precision}
*/
setReadOnly( constants, 'PRECISION', require( '@stdlib/constants-float64-precision' ) );

/**
* @name SMALLEST_NORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/smallest-normal}
*/
setReadOnly( constants, 'SMALLEST_NORMAL', require( '@stdlib/constants-float64-smallest-normal' ) );

/**
* @name SMALLEST_SUBNORMAL
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/smallest-subnormal}
*/
setReadOnly( constants, 'SMALLEST_SUBNORMAL', require( '@stdlib/constants-float64-smallest-subnormal' ) );

/**
* @name SQRT_EPS
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/sqrt-eps}
*/
setReadOnly( constants, 'SQRT_EPS', require( '@stdlib/constants-float64-sqrt-eps' ) );

/**
* @name SQRT_HALF
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/sqrt-half}
*/
setReadOnly( constants, 'SQRT_HALF', require( '@stdlib/constants-float64-sqrt-half' ) );

/**
* @name SQRT_HALF_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/sqrt-half-pi}
*/
setReadOnly( constants, 'SQRT_HALF_PI', require( '@stdlib/constants-float64-sqrt-half-pi' ) );

/**
* @name SQRT_PHI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/sqrt-phi}
*/
setReadOnly( constants, 'SQRT_PHI', require( '@stdlib/constants-float64-sqrt-phi' ) );

/**
* @name SQRT_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/sqrt-pi}
*/
setReadOnly( constants, 'SQRT_PI', require( '@stdlib/constants-float64-sqrt-pi' ) );

/**
* @name SQRT_THREE
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/sqrt-three}
*/
setReadOnly( constants, 'SQRT_THREE', require( '@stdlib/constants-float64-sqrt-three' ) );

/**
* @name SQRT_TWO
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/sqrt-two}
*/
setReadOnly( constants, 'SQRT_TWO', require( '@stdlib/constants-float64-sqrt-two' ) );

/**
* @name SQRT_TWO_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/sqrt-two-pi}
*/
setReadOnly( constants, 'SQRT_TWO_PI', require( '@stdlib/constants-float64-sqrt-two-pi' ) );

/**
* @name TWO_PI
* @memberof constants
* @readonly
* @constant
* @type {number}
* @see {@link module:@stdlib/constants/float64/two-pi}
*/
setReadOnly( constants, 'TWO_PI', require( '@stdlib/constants-float64-two-pi' ) );


// EXPORTS //

module.exports = constants;
