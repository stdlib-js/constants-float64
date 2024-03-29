/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import APERY = require( '@stdlib/constants-float64-apery' );
import CATALAN = require( '@stdlib/constants-float64-catalan' );
import CBRT_EPS = require( '@stdlib/constants-float64-cbrt-eps' );
import E = require( '@stdlib/constants-float64-e' );
import EPS = require( '@stdlib/constants-float64-eps' );
import EULERGAMMA = require( '@stdlib/constants-float64-eulergamma' );
import EXPONENT_BIAS = require( '@stdlib/constants-float64-exponent-bias' );
import FOURTH_PI = require( '@stdlib/constants-float64-fourth-pi' );
import FOURTH_ROOT_EPS = require( '@stdlib/constants-float64-fourth-root-eps' );
import GAMMA_LANCZOS_G = require( '@stdlib/constants-float64-gamma-lanczos-g' );
import GLAISHER = require( '@stdlib/constants-float64-glaisher-kinkelin' );
import HALF_LN2 = require( '@stdlib/constants-float64-half-ln-two' );
import HALF_PI = require( '@stdlib/constants-float64-half-pi' );
import HIGH_WORD_ABS_MASK = require( '@stdlib/constants-float64-high-word-abs-mask' );
import HIGH_WORD_EXPONENT_MASK = require( '@stdlib/constants-float64-high-word-exponent-mask' );
import HIGH_WORD_SIGN_MASK = require( '@stdlib/constants-float64-high-word-sign-mask' );
import HIGH_WORD_SIGNIFICAND_MASK = require( '@stdlib/constants-float64-high-word-significand-mask' );
import LN_HALF = require( '@stdlib/constants-float64-ln-half' );
import LN_PI = require( '@stdlib/constants-float64-ln-pi' );
import LN_SQRT_TWO_PI = require( '@stdlib/constants-float64-ln-sqrt-two-pi' );
import LN10 = require( '@stdlib/constants-float64-ln-ten' );
import LN2 = require( '@stdlib/constants-float64-ln-two' );
import LN_TWO_PI = require( '@stdlib/constants-float64-ln-two-pi' );
import LOG2E = require( '@stdlib/constants-float64-log2-e' );
import LOG10E = require( '@stdlib/constants-float64-log10-e' );
import MAX = require( '@stdlib/constants-float64-max' );
import MAX_BASE2_EXPONENT = require( '@stdlib/constants-float64-max-base2-exponent' );
import MAX_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-max-base2-exponent-subnormal' );
import MAX_BASE10_EXPONENT = require( '@stdlib/constants-float64-max-base10-exponent' );
import MAX_BASE10_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-max-base10-exponent-subnormal' );
import MAX_LN = require( '@stdlib/constants-float64-max-ln' );
import MAX_SAFE_FIBONACCI = require( '@stdlib/constants-float64-max-safe-fibonacci' );
import MAX_SAFE_INTEGER = require( '@stdlib/constants-float64-max-safe-integer' );
import MAX_SAFE_LUCAS = require( '@stdlib/constants-float64-max-safe-lucas' );
import MAX_SAFE_NTH_FIBONACCI = require( '@stdlib/constants-float64-max-safe-nth-fibonacci' );
import MAX_SAFE_NTH_LUCAS = require( '@stdlib/constants-float64-max-safe-nth-lucas' );
import MIN_BASE2_EXPONENT = require( '@stdlib/constants-float64-min-base2-exponent' );
import MIN_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-min-base2-exponent-subnormal' );
import MIN_BASE10_EXPONENT = require( '@stdlib/constants-float64-min-base10-exponent' );
import MIN_BASE10_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-min-base10-exponent-subnormal' );
import MIN_LN = require( '@stdlib/constants-float64-min-ln' );
import MIN_SAFE_INTEGER = require( '@stdlib/constants-float64-min-safe-integer' );
import NAN = require( '@stdlib/constants-float64-nan' );
import NINF = require( '@stdlib/constants-float64-ninf' );
import NUM_BYTES = require( '@stdlib/constants-float64-num-bytes' );
import PHI = require( '@stdlib/constants-float64-phi' );
import PI = require( '@stdlib/constants-float64-pi' );
import PI_SQUARED = require( '@stdlib/constants-float64-pi-squared' );
import PINF = require( '@stdlib/constants-float64-pinf' );
import PRECISION = require( '@stdlib/constants-float64-precision' );
import SMALLEST_NORMAL = require( '@stdlib/constants-float64-smallest-normal' );
import SMALLEST_SUBNORMAL = require( '@stdlib/constants-float64-smallest-subnormal' );
import SQRT_EPS = require( '@stdlib/constants-float64-sqrt-eps' );
import SQRT_HALF = require( '@stdlib/constants-float64-sqrt-half' );
import SQRT_HALF_PI = require( '@stdlib/constants-float64-sqrt-half-pi' );
import SQRT_PHI = require( '@stdlib/constants-float64-sqrt-phi' );
import SQRT_PI = require( '@stdlib/constants-float64-sqrt-pi' );
import SQRT_THREE = require( '@stdlib/constants-float64-sqrt-three' );
import SQRT_TWO = require( '@stdlib/constants-float64-sqrt-two' );
import SQRT_TWO_PI = require( '@stdlib/constants-float64-sqrt-two-pi' );
import TWO_PI = require( '@stdlib/constants-float64-two-pi' );

/**
* Interface describing the `float64` namespace.
*/
interface Namespace {
	/**
	* Apéry's constant.
	*
	* @example
	* var apery = ns.APERY;
	* // returns 1.2020569031595942
	*/
	APERY: typeof APERY;

	/**
	* Catalan's constant.
	*
	* @example
	* var catalan = ns.CATALAN;
	* // returns 0.915965594177219
	*/
	CATALAN: typeof CATALAN;

	/**
	* Cube root of double-precision floating-point epsilon.
	*
	* @example
	* var eps = ns.CBRT_EPS;
	* // returns 0.0000060554544523933395
	*/
	CBRT_EPS: typeof CBRT_EPS;

	/**
	* Euler's number.
	*
	* @example
	* var e = ns.E;
	* // returns 2.718281828459045
	*/
	E: typeof E;

	/**
	* Difference between one and the smallest value greater than one that can be represented as a double-precision floating-point number.
	*
	* @example
	* var eps = ns.EPS;
	* // returns 2.220446049250313e-16
	*/
	EPS: typeof EPS;

	/**
	* The Euler-Mascheroni constant.
	*
	* @example
	* var val = ns.EULERGAMMA;
	* // returns 0.5772156649015329
	*/
	EULERGAMMA: typeof EULERGAMMA;

	/**
	* The bias of a double-precision floating-point number's exponent.
	*
	* @example
	* var bias = ns.EXPONENT_BIAS;
	* // returns 1023
	*/
	EXPONENT_BIAS: typeof EXPONENT_BIAS;

	/**
	* One fourth times the mathematical constant `π`.
	*
	* @example
	* var val = ns.FOURTH_PI;
	* // returns 7.85398163397448309616e-1
	*/
	FOURTH_PI: typeof FOURTH_PI;

	/**
	* Fourth root of double-precision floating-point epsilon.
	*
	* @example
	* var eps = ns.FOURTH_ROOT_EPS;
	* // returns 0.0001220703125
	*/
	FOURTH_ROOT_EPS: typeof FOURTH_ROOT_EPS;

	/**
	* Arbitrary constant `g` to be used in Lanczos approximation functions.
	*
	* @example
	* var g = ns.GAMMA_LANCZOS_G;
	* // returns 10.900511
	*/
	GAMMA_LANCZOS_G: typeof GAMMA_LANCZOS_G;

	/**
	* Glaisher-Kinkelin constant.
	*
	* @example
	* var val = ns.GLAISHER;
	* // returns 1.2824271291006226
	*/
	GLAISHER: typeof GLAISHER;

	/**
	* One half times the natural logarithm of 2.
	*
	* @example
	* var val = ns.HALF_LN2;
	* // returns 3.46573590279972654709e-01
	*/
	HALF_LN2: typeof HALF_LN2;

	/**
	* One half times the mathematical constant `π`.
	*
	* @example
	* var val = ns.HALF_PI;
	* // returns 1.5707963267948966
	*/
	HALF_PI: typeof HALF_PI;

	/**
	* High word mask for excluding the sign bit of a double-precision floating-point number.
	*
	* @example
	* var mask = ns.HIGH_WORD_ABS_MASK;
	* // returns 2147483647
	*/
	HIGH_WORD_ABS_MASK: typeof HIGH_WORD_ABS_MASK;

	/**
	* High word mask for the exponent of a double-precision floating-point number.
	*
	* @example
	* var mask = ns.HIGH_WORD_EXPONENT_MASK;
	* // returns 2146435072
	*/
	HIGH_WORD_EXPONENT_MASK: typeof HIGH_WORD_EXPONENT_MASK;

	/**
	* High word mask for the sign bit of a double-precision floating-point number.
	*
	* @example
	* var mask = ns.HIGH_WORD_SIGN_MASK;
	* // returns 2147483648
	*/
	HIGH_WORD_SIGN_MASK: typeof HIGH_WORD_SIGN_MASK;

	/**
	* High word mask for the significand of a double-precision floating-point number.
	*
	* @example
	* var mask = ns.HIGH_WORD_SIGNIFICAND_MASK;
	* // returns 1048575
	*/
	HIGH_WORD_SIGNIFICAND_MASK: typeof HIGH_WORD_SIGNIFICAND_MASK;

	/**
	* Natural logarithm of `1/2`.
	*
	* @example
	* var val = ns.LN_HALF;
	* // returns -0.6931471805599453
	*/
	LN_HALF: typeof LN_HALF;

	/**
	* Natural logarithm of the mathematical constant `π`.
	*
	* @example
	* var val = ns.LN_PI;
	* // returns 1.1447298858494002
	*/
	LN_PI: typeof LN_PI;

	/**
	* Natural logarithm of the square root of `2π`.
	*
	* @example
	* var val = ns.LN_SQRT_TWO_PI;
	* // returns 0.9189385332046728
	*/
	LN_SQRT_TWO_PI: typeof LN_SQRT_TWO_PI;

	/**
	* Natural logarithm of `10`.
	*
	* @example
	* var val = ns.LN10;
	* // returns 2.302585092994046
	*/
	LN10: typeof LN10;

	/**
	* Natural logarithm of `2`.
	*
	* @example
	* var val = ns.LN2;
	* // returns 0.6931471805599453
	*/
	LN2: typeof LN2;

	/**
	* Natural logarithm of `2π`.
	*
	* @example
	* var val = ns.LN_TWO_PI;
	* // returns 1.8378770664093456
	*/
	LN_TWO_PI: typeof LN_TWO_PI;

	/**
	* Base 2 logarithm of Euler's number.
	*
	* @example
	* var val = ns.LOG2E;
	* // returns 1.4426950408889634
	*/
	LOG2E: typeof LOG2E;

	/**
	* Base 10 logarithm of Euler's number.
	*
	* @example
	* var val = ns.LOG10E;
	* // returns 0.4342944819032518
	*/
	LOG10E: typeof LOG10E;

	/**
	* Maximum double-precision floating-point number.
	*
	* @example
	* var max = ns.MAX;
	* // returns 1.7976931348623157e+308
	*/
	MAX: typeof MAX;

	/**
	* The maximum biased base 2 exponent for a double-precision floating-point number.
	*
	* @example
	* var exp = ns.MAX_BASE2_EXPONENT;
	* // returns 1023
	*/
	MAX_BASE2_EXPONENT: typeof MAX_BASE2_EXPONENT;

	/**
	* The maximum biased base 2 exponent for a subnormal double-precision floating-point number.
	*
	* @example
	* var exp = ns.MAX_BASE2_EXPONENT_SUBNORMAL;
	* // returns -1023
	*/
	MAX_BASE2_EXPONENT_SUBNORMAL: typeof MAX_BASE2_EXPONENT_SUBNORMAL;

	/**
	* The maximum base 10 exponent for a double-precision floating-point number.
	*
	* @example
	* var exp = ns.MAX_BASE10_EXPONENT;
	* // returns 308
	*/
	MAX_BASE10_EXPONENT: typeof MAX_BASE10_EXPONENT;

	/**
	* The maximum base 10 exponent for a subnormal double-precision floating-point number.
	*
	* @example
	* var exp = ns.MAX_BASE10_EXPONENT_SUBNORMAL;
	* // returns -308
	*/
	MAX_BASE10_EXPONENT_SUBNORMAL: typeof MAX_BASE10_EXPONENT_SUBNORMAL;

	/**
	* Natural logarithm of the maximum double-precision floating-point number.
	*
	* @example
	* var val = ns.MAX_LN;
	* // returns 709.782712893384
	*/
	MAX_LN: typeof MAX_LN;

	/**
	* Maximum safe Fibonacci number when stored in double-precision floating-point format.
	*
	* @example
	* var max = ns.MAX_SAFE_FIBONACCI;
	* // returns 8944394323791464
	*/
	MAX_SAFE_FIBONACCI: typeof MAX_SAFE_FIBONACCI;

	/**
	* Maximum safe double-precision floating-point integer.
	*
	* @example
	* var max = ns.MAX_SAFE_INTEGER;
	* // returns 9007199254740991
	*/
	MAX_SAFE_INTEGER: typeof MAX_SAFE_INTEGER;

	/**
	* Maximum safe Lucas number when stored in double-precision floating-point format.
	*
	* @example
	* var max = ns.MAX_SAFE_LUCAS;
	* // returns 7639424778862807
	*/
	MAX_SAFE_LUCAS: typeof MAX_SAFE_LUCAS;

	/**
	* Maximum safe nth Fibonacci number when stored in double-precision floating-point format.
	*
	* @example
	* var max = ns.MAX_SAFE_NTH_FIBONACCI;
	* // returns 78
	*/
	MAX_SAFE_NTH_FIBONACCI: typeof MAX_SAFE_NTH_FIBONACCI;

	/**
	* Maximum safe nth Lucas number when stored in double-precision floating-point format.
	*
	* @example
	* var max = ns.MAX_SAFE_NTH_LUCAS;
	* // returns 76
	*/
	MAX_SAFE_NTH_LUCAS: typeof MAX_SAFE_NTH_LUCAS;

	/**
	* The minimum biased base 2 exponent for a normal double-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_BASE2_EXPONENT;
	* // returns -1022
	*/
	MIN_BASE2_EXPONENT: typeof MIN_BASE2_EXPONENT;

	/**
	* The minimum biased base 2 exponent for a subnormal double-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_BASE2_EXPONENT_SUBNORMAL;
	* // returns -1074
	*/
	MIN_BASE2_EXPONENT_SUBNORMAL: typeof MIN_BASE2_EXPONENT_SUBNORMAL;

	/**
	* The minimum base 10 exponent for a normal double-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_BASE10_EXPONENT;
	* // returns -308
	*/
	MIN_BASE10_EXPONENT: typeof MIN_BASE10_EXPONENT;

	/**
	* The minimum base 10 exponent for a subnormal double-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_BASE10_EXPONENT_SUBNORMAL;
	* // returns -324
	*/
	MIN_BASE10_EXPONENT_SUBNORMAL: typeof MIN_BASE10_EXPONENT_SUBNORMAL;

	/**
	* Natural logarithm of the smallest normalized double-precision floating-point number.
	*
	* @example
	* var min = ns.MIN_LN;
	* // returns -708.3964185322641
	*/
	MIN_LN: typeof MIN_LN;

	/**
	* Minimum safe double-precision floating-point integer.
	*
	* @example
	* var min = ns.MIN_SAFE_INTEGER;
	* // returns -9007199254740991
	*/
	MIN_SAFE_INTEGER: typeof MIN_SAFE_INTEGER;

	/**
	* Double-precision floating-point NaN.
	*
	* @example
	* var nan = ns.NAN;
	* // returns NaN
	*/
	NAN: typeof NAN;

	/**
	* Double-precision floating-point negative infinity.
	*
	* @example
	* var ninf = ns.NINF;
	* // returns -Infinity
	*/
	NINF: typeof NINF;

	/**
	* Size (in bytes) of a double-precision floating-point number.
	*
	* @example
	* var bytes = ns.NUM_BYTES;
	* // returns 8
	*/
	NUM_BYTES: typeof NUM_BYTES;

	/**
	* Golden ratio.
	*
	* @example
	* var val = ns.PHI;
	* // returns 1.618033988749895
	*/
	PHI: typeof PHI;

	/**
	* The mathematical constant `π`.
	*
	* @example
	* var val = ns.PI;
	* // returns 3.141592653589793
	*/
	PI: typeof PI;

	/**
	* Square of the mathematical constant `π`.
	*
	* @example
	* var val = ns.PI_SQUARED;
	* // returns 9.869604401089358
	*/
	PI_SQUARED: typeof PI_SQUARED;

	/**
	* Double-precision floating-point positive infinity.
	*
	* @example
	* var pinf = ns.PINF;
	* // returns Infinity
	*/
	PINF: typeof PINF;

	/**
	* Effective number of bits in the significand of a double-precision floating-point number.
	*
	* @example
	* var precision = ns.PRECISION;
	* // returns 53
	*/
	PRECISION: typeof PRECISION;

	/**
	* Smallest positive double-precision floating-point normal number.
	*
	* @example
	* var smallest = ns.SMALLEST_NORMAL;
	* // returns 2.2250738585072014e-308
	*/
	SMALLEST_NORMAL: typeof SMALLEST_NORMAL;

	/**
	* Smallest positive double-precision floating-point subnormal number.
	*
	* @example
	* var smallest = ns.SMALLEST_SUBNORMAL;
	* // returns 4.940656458412465e-324
	*/
	SMALLEST_SUBNORMAL: typeof SMALLEST_SUBNORMAL;

	/**
	* Square root of double-precision floating-point epsilon.
	*
	* @example
	* var val = ns.SQRT_EPS;
	* // returns 0.14901161193847656e-7
	*/
	SQRT_EPS: typeof SQRT_EPS;

	/**
	* Square root of `1/2`.
	*
	* @example
	* var val = ns.SQRT_HALF;
	* // returns 0.7071067811865476
	*/
	SQRT_HALF: typeof SQRT_HALF;

	/**
	* Square root of the mathematical constant `π` divided by `2`.
	*
	* @example
	* var val = ns.SQRT_HALF_PI;
	* // returns 1.2533141373155003
	*/
	SQRT_HALF_PI: typeof SQRT_HALF_PI;

	/**
	* Square root of the golden ratio.
	*
	* @example
	* var val = ns.SQRT_PHI;
	* // returns 1.272019649514069
	*/
	SQRT_PHI: typeof SQRT_PHI;

	/**
	* Square root of the mathematical constant `π`.
	*
	* @example
	* var val = ns.SQRT_PI;
	* // returns 1.7724538509055160
	*/
	SQRT_PI: typeof SQRT_PI;

	/**
	* Square root of `3`.
	*
	* @example
	* var val = ns.SQRT_THREE;
	* // returns 1.7320508075688772
	*/
	SQRT_THREE: typeof SQRT_THREE;

	/**
	* Square root of `2`.
	*
	* @example
	* var val = ns.SQRT_TWO;
	* // returns 1.4142135623730951
	*/
	SQRT_TWO: typeof SQRT_TWO;

	/**
	* Square root of the mathematical constant `π` times `2`.
	*
	* @example
	* var val = ns.SQRT_TWO_PI;
	* // returns 2.5066282746310007
	*/
	SQRT_TWO_PI: typeof SQRT_TWO_PI;

	/**
	* The mathematical constant `π` times `2`.
	*
	* @example
	* var val = ns.TWO_PI;
	* // returns 6.283185307179586
	*/
	TWO_PI: typeof TWO_PI;
}

/**
* Double-precision floating-point mathematical constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
