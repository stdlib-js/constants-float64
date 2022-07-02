// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var _="function"==typeof Object.defineProperty?Object.defineProperty:null;var N=function(){try{return _({},"x",{}),!0}catch(_){return!1}},E=Object.defineProperty,A=Object.prototype,a=A.toString,S=A.__defineGetter__,e=A.__defineSetter__,I=A.__lookupGetter__,T=A.__lookupSetter__;var O=E,s=function(_,N,E){var O,s,r,t;if("object"!=typeof _||null===_||"[object Array]"===a.call(_))throw new TypeError("invalid argument. First argument must be an object. Value: `"+_+"`.");if("object"!=typeof E||null===E||"[object Array]"===a.call(E))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+E+"`.");if((s="value"in E)&&(I.call(_,N)||T.call(_,N)?(O=_.__proto__,_.__proto__=A,delete _[N],_[N]=E.value,_.__proto__=O):_[N]=E.value),r="get"in E,t="set"in E,s&&(r||t))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return r&&S&&S.call(_,N,E.get),t&&e&&e.call(_,N,E.set),_},r=N()?O:s;var t=function(_,N,E){r(_,N,{configurable:!1,enumerable:!0,writable:!1,value:E})},P=1.2020569031595942,L=.915965594177219,M=60554544523933395e-22,R=2.718281828459045,o=2220446049250313e-31,n=.5772156649015329,X=1023,F=.7853981633974483,l=.0001220703125,B=10.900511,H=1.2824271291006226,i=.34657359027997264,u=1.5707963267948966,c=2146435072,G=1048575,U=-.6931471805599453,C=1.1447298858494002,p=.9189385332046728,Q=2.302585092994046,b=.6931471805599453,f=1.8378770664093456,y=1.4426950408889634,W=.4342944819032518,d=17976931348623157e292,v=1023,j=-1023,m=308,g=-308,w=709.782712893384,D=8944394323791464,Y=9007199254740991,h=7639424778862807,K=78,V=76,k=-1022,x=-1074,Z=-308,q=-324,z=-708.3964185322641,J=-9007199254740991,$=Number.NEGATIVE_INFINITY,__=8,N_=1.618033988749895,E_=3.141592653589793,A_=9.869604401089358,a_=Number.POSITIVE_INFINITY,S_=53,e_=22250738585072014e-324,I_=5e-324,T_=1.4901161193847656e-8,O_=.7071067811865476,s_=1.2533141373155003,r_=1.272019649514069,t_=1.772453850905516,P_=1.7320508075688772,L_=1.4142135623730951,M_=2.5066282746310007,R_=6.283185307179586,o_={};t(o_,"APERY",P),t(o_,"CATALAN",.915965594177219),t(o_,"CBRT_EPS",M),t(o_,"E",2.718281828459045),t(o_,"EPS",o),t(o_,"EULERGAMMA",n),t(o_,"EXPONENT_BIAS",1023),t(o_,"FOURTH_PI",F),t(o_,"FOURTH_ROOT_EPS",.0001220703125),t(o_,"GAMMA_LANCZOS_G",10.900511),t(o_,"GLAISHER",H),t(o_,"HALF_LN2",i),t(o_,"HALF_PI",u),t(o_,"HIGH_WORD_EXPONENT_MASK",2146435072),t(o_,"HIGH_WORD_SIGNIFICAND_MASK",1048575),t(o_,"LN_HALF",U),t(o_,"LN_PI",C),t(o_,"LN_SQRT_TWO_PI",p),t(o_,"LN10",2.302585092994046),t(o_,"LN2",b),t(o_,"LN_TWO_PI",f),t(o_,"LOG2E",y),t(o_,"LOG10E",W),t(o_,"MAX",d),t(o_,"MAX_BASE2_EXPONENT",1023),t(o_,"MAX_BASE2_EXPONENT_SUBNORMAL",-1023),t(o_,"MAX_BASE10_EXPONENT",308),t(o_,"MAX_BASE10_EXPONENT_SUBNORMAL",-308),t(o_,"MAX_LN",709.782712893384),t(o_,"MAX_SAFE_FIBONACCI",8944394323791464),t(o_,"MAX_SAFE_INTEGER",9007199254740991),t(o_,"MAX_SAFE_LUCAS",7639424778862807),t(o_,"MAX_SAFE_NTH_FIBONACCI",78),t(o_,"MAX_SAFE_NTH_LUCAS",76),t(o_,"MIN_BASE2_EXPONENT",-1022),t(o_,"MIN_BASE2_EXPONENT_SUBNORMAL",-1074),t(o_,"MIN_BASE10_EXPONENT",-308),t(o_,"MIN_BASE10_EXPONENT_SUBNORMAL",-324),t(o_,"MIN_LN",z),t(o_,"MIN_SAFE_INTEGER",-9007199254740991),t(o_,"NINF",$),t(o_,"NUM_BYTES",8),t(o_,"PHI",1.618033988749895),t(o_,"PI",3.141592653589793),t(o_,"PI_SQUARED",9.869604401089358),t(o_,"PINF",a_),t(o_,"PRECISION",53),t(o_,"SMALLEST_NORMAL",e_),t(o_,"SMALLEST_SUBNORMAL",5e-324),t(o_,"SQRT_EPS",T_),t(o_,"SQRT_HALF",O_),t(o_,"SQRT_HALF_PI",s_),t(o_,"SQRT_PHI",1.272019649514069),t(o_,"SQRT_PI",1.772453850905516),t(o_,"SQRT_THREE",P_),t(o_,"SQRT_TWO",L_),t(o_,"SQRT_TWO_PI",M_),t(o_,"TWO_PI",R_);export{P as APERY,L as CATALAN,M as CBRT_EPS,R as E,o as EPS,n as EULERGAMMA,X as EXPONENT_BIAS,F as FOURTH_PI,l as FOURTH_ROOT_EPS,B as GAMMA_LANCZOS_G,H as GLAISHER,i as HALF_LN2,u as HALF_PI,c as HIGH_WORD_EXPONENT_MASK,G as HIGH_WORD_SIGNIFICAND_MASK,Q as LN10,b as LN2,U as LN_HALF,C as LN_PI,p as LN_SQRT_TWO_PI,f as LN_TWO_PI,W as LOG10E,y as LOG2E,d as MAX,m as MAX_BASE10_EXPONENT,g as MAX_BASE10_EXPONENT_SUBNORMAL,v as MAX_BASE2_EXPONENT,j as MAX_BASE2_EXPONENT_SUBNORMAL,w as MAX_LN,D as MAX_SAFE_FIBONACCI,Y as MAX_SAFE_INTEGER,h as MAX_SAFE_LUCAS,K as MAX_SAFE_NTH_FIBONACCI,V as MAX_SAFE_NTH_LUCAS,Z as MIN_BASE10_EXPONENT,q as MIN_BASE10_EXPONENT_SUBNORMAL,k as MIN_BASE2_EXPONENT,x as MIN_BASE2_EXPONENT_SUBNORMAL,z as MIN_LN,J as MIN_SAFE_INTEGER,$ as NINF,__ as NUM_BYTES,N_ as PHI,E_ as PI,a_ as PINF,A_ as PI_SQUARED,S_ as PRECISION,e_ as SMALLEST_NORMAL,I_ as SMALLEST_SUBNORMAL,T_ as SQRT_EPS,O_ as SQRT_HALF,s_ as SQRT_HALF_PI,r_ as SQRT_PHI,t_ as SQRT_PI,P_ as SQRT_THREE,L_ as SQRT_TWO,M_ as SQRT_TWO_PI,R_ as TWO_PI,o_ as default};
//# sourceMappingURL=mod.js.map
