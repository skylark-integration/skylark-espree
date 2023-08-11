/**
 * skylark-espree - A version of espree that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-acorn","skylark-acorn/plugins/jsx","./lib/espree","./lib/version","./lib/options","./eslint-visitor-keys"],function(e,t,r,n,s,i){const{getLatestEcmaVersion:o,getSupportedEcmaVersions:a}=s,u={_regular:null,_jsx:null,get regular(){return null===this._regular&&(this._regular=e.Parser.extend(r())),this._regular},get jsx(){return null===this._jsx&&(this._jsx=e.Parser.extend(t(),r())),this._jsx},get(e){return Boolean(e&&e.ecmaFeatures&&e.ecmaFeatures.jsx)?this.jsx:this.regular}};const l=n,c=i.KEYS,g=function(){let e,t={};for(e in"function"==typeof Object.create&&(t=Object.create(null)),c)Object.hasOwnProperty.call(c,e)&&(t[e]=e);return"function"==typeof Object.freeze&&Object.freeze(t),t}(),j=o(),p=a();return{tokenize:function(e,t){const r=u.get(t);return t&&!0===t.tokens||(t=Object.assign({},t,{tokens:!0})),new r(t,e).tokenize()},parse:function(e,t){return new(u.get(t))(t,e).parse()},version:l,name:"espree",VisitorKeys:c,Syntax:g,latestEcmaVersion:j,supportedEcmaVersions:p}});
//# sourceMappingURL=sourcemaps/espree.js.map
