// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,_=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,E=/^(\d+)e/,A=/\.0$/,N=/\.0*e/,h=/(\..*[^0])0*e/;function S(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=u.call(t,h,"$1e"),t=u.call(t,N,"e"),t=u.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=u.call(t,f,"e+0$1"),t=u.call(t,g,"e-0$1"),e.alternate&&(t=u.call(t,d,"$1."),t=u.call(t,E,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===_.call(e.specifier)?_.call(t):l.call(t)}function I(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function w(e,r,i){var t=r-e.length;return t<0?e:e=i?e+I(t):I(t)+e}var T=String.fromCharCode,b=isNaN,v=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function y(e){var r,i,t,n,o,p,l,_,u;if(!v(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,_=0;_<e.length;_++)if(c(t=e[_]))p+=t;else{if(r=void 0!==t.precision,!(t=O(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+_+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,b(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,b(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!b(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=b(o)?String(t.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=S(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=w(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var m=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,i,t,a;for(i=[],a=0,t=m.exec(e);t;)(r=e.slice(a,m.lastIndex-t[0].length)).length&&i.push(r),i.push(R(t)),a=m.lastIndex,t=m.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function L(e){return"string"==typeof e}function M(e){var r,i,t;if(!L(e))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return y.apply(null,i)}var F=Object.prototype,X=F.toString,H=F.__defineGetter__,x=F.__defineSetter__,B=F.__lookupGetter__,G=F.__lookupSetter__,k=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===X.call(e))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===X.call(i))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(B.call(e,r)||G.call(e,r)?(t=e.__proto__,e.__proto__=F,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&H&&H.call(e,r,i.get),o&&x&&x.call(e,r,i.set),e};function C(e,r,i){k(e,r,{configurable:!1,enumerable:!0,writable:!1,value:i})}var U=Number.NEGATIVE_INFINITY,V=Number.POSITIVE_INFINITY,W={};return C(W,"APERY",1.2020569031595942),C(W,"CATALAN",.915965594177219),C(W,"CBRT_EPS",60554544523933395e-22),C(W,"E",2.718281828459045),C(W,"EPS",2220446049250313e-31),C(W,"EULERGAMMA",.5772156649015329),C(W,"EXPONENT_BIAS",1023),C(W,"FOURTH_PI",.7853981633974483),C(W,"FOURTH_ROOT_EPS",.0001220703125),C(W,"GAMMA_LANCZOS_G",10.900511),C(W,"GLAISHER",1.2824271291006226),C(W,"HALF_LN2",.34657359027997264),C(W,"HALF_PI",1.5707963267948966),C(W,"HIGH_WORD_ABS_MASK",2147483647),C(W,"HIGH_WORD_EXPONENT_MASK",2146435072),C(W,"HIGH_WORD_SIGN_MASK",2147483648),C(W,"HIGH_WORD_SIGNIFICAND_MASK",1048575),C(W,"LN_HALF",-.6931471805599453),C(W,"LN_PI",1.1447298858494002),C(W,"LN_SQRT_TWO_PI",.9189385332046728),C(W,"LN10",2.302585092994046),C(W,"LN2",.6931471805599453),C(W,"LN_TWO_PI",1.8378770664093456),C(W,"LOG2E",1.4426950408889634),C(W,"LOG10E",.4342944819032518),C(W,"MAX",17976931348623157e292),C(W,"MAX_BASE2_EXPONENT",1023),C(W,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),C(W,"MAX_BASE10_EXPONENT",308),C(W,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),C(W,"MAX_LN",709.782712893384),C(W,"MAX_SAFE_FIBONACCI",8944394323791464),C(W,"MAX_SAFE_INTEGER",9007199254740991),C(W,"MAX_SAFE_LUCAS",7639424778862807),C(W,"MAX_SAFE_NTH_FIBONACCI",78),C(W,"MAX_SAFE_NTH_LUCAS",76),C(W,"MIN_BASE2_EXPONENT",-1022),C(W,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),C(W,"MIN_BASE10_EXPONENT",-308),C(W,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),C(W,"MIN_LN",-708.3964185322641),C(W,"MIN_SAFE_INTEGER",-9007199254740991),C(W,"NAN",NaN),C(W,"NINF",U),C(W,"NUM_BYTES",8),C(W,"PHI",1.618033988749895),C(W,"PI",3.141592653589793),C(W,"PI_SQUARED",9.869604401089358),C(W,"PINF",V),C(W,"PRECISION",53),C(W,"SMALLEST_NORMAL",22250738585072014e-324),C(W,"SMALLEST_SUBNORMAL",5e-324),C(W,"SQRT_EPS",1.4901161193847656e-8),C(W,"SQRT_HALF",.7071067811865476),C(W,"SQRT_HALF_PI",1.2533141373155003),C(W,"SQRT_PHI",1.272019649514069),C(W,"SQRT_PI",1.772453850905516),C(W,"SQRT_THREE",1.7320508075688772),C(W,"SQRT_TWO",1.4142135623730951),C(W,"SQRT_TWO_PI",2.5066282746310007),C(W,"TWO_PI",6.283185307179586),W},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).constants=r();
//# sourceMappingURL=index.js.map
