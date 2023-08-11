/**
 * skylark-espree - A version of espree that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){const e=[3,5,6,7,8,9,10,11,12,13,14,15];function r(){return e[e.length-1]}return{getLatestEcmaVersion:r,getSupportedEcmaVersions:function(){return[...e]},normalizeOptions:function(o){const n=function(o=5){let n="latest"===o?r():o;if("number"!=typeof n)throw new Error(`ecmaVersion must be a number or "latest". Received value of type ${typeof o} instead.`);if(n>=2015&&(n-=2009),!e.includes(n))throw new Error("Invalid ecmaVersion.");return n}(o.ecmaVersion),t=function(e="script"){if("script"===e||"module"===e)return e;if("commonjs"===e)return"script";throw new Error("Invalid sourceType.")}(o.sourceType),s=!0===o.range,i=!0===o.loc;if(3!==n&&o.allowReserved)throw new Error("`allowReserved` is only supported when ecmaVersion is 3");if(void 0!==o.allowReserved&&"boolean"!=typeof o.allowReserved)throw new Error("`allowReserved`, when present, must be `true` or `false`");const a=3===n&&(o.allowReserved||"never"),l=o.ecmaFeatures||{},u="commonjs"===o.sourceType||Boolean(l.globalReturn);if("module"===t&&n<6)throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");return Object.assign({},o,{ecmaVersion:n,sourceType:t,ranges:s,locations:i,allowReserved:a,allowReturnOutsideFunction:u})}}});
//# sourceMappingURL=../sourcemaps/lib/options.js.map
