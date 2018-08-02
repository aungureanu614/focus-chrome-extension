!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=20)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_URL="https://api.unsplash.com",e.API_VERSION="v1",e.OAUTH_AUTHORIZE_URL="https://unsplash.com/oauth/authorize",e.OAUTH_TOKEN_URL="https://unsplash.com/oauth/token"},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.formUrlEncode=s,e.getUrlComponents=function(t){return(0,u.default)(t,{},!0)},e.buildFetchOptions=function(t){var e=t.method,r=t.query,i=t.oauth,u=t.body,a=!0===i?t.url:""+this._apiUrl+t.url,c=n({},this._headers,t.headers,{"Accept-Version":this._apiVersion,Authorization:this._bearerToken?"Bearer "+this._bearerToken:"Client-ID "+this._applicationId});u&&(c["Content-Type"]="application/x-www-form-urlencoded");r&&(a=decodeURIComponent(a+"?"+(0,o.stringify)(r)));return{url:a,options:{method:e,headers:c,body:"GET"!==e&&u?s(u):void 0}}};var o=r(2),i=a(r(7)),u=a(r(8));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,i.default)(t)}},function(t,e,r){"use strict";e.decode=e.parse=r(5),e.encode=e.stringify=r(6)},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e.toJson=function(t){return"function"==typeof t.json?t.json():t};var o=r(0),i=r(1),u=d(r(11)),a=d(r(12)),s=d(r(13)),c=d(r(14)),l=d(r(16)),h=d(r(17)),p=d(r(18)),f=d(r(19));function d(t){return t&&t.__esModule?t:{default:t}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._apiUrl=e.apiUrl||o.API_URL,this._apiVersion=e.apiVersion||o.API_VERSION,this._applicationId=e.applicationId,this._secret=e.secret,this._callbackUrl=e.callbackUrl,this._bearerToken=e.bearerToken,this._headers=e.headers||{},this.auth=u.default.bind(this)(),this.currentUser=a.default.bind(this)(),this.users=s.default.bind(this)(),this.photos=c.default.bind(this)(),this.categories=l.default.bind(this)(),this.collections=h.default.bind(this)(),this.search=p.default.bind(this)(),this.stats=f.default.bind(this)()}return n(t,[{key:"request",value:function(t){var e=i.buildFetchOptions.bind(this)(t),r=e.url,n=e.options;return fetch(r,n)}}]),t}();e.default=v},function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,i){e=e||"&",r=r||"=";var u={};if("string"!=typeof t||0===t.length)return u;var a=/\+/g;t=t.split(e);var s=1e3;i&&"number"==typeof i.maxKeys&&(s=i.maxKeys);var c=t.length;s>0&&c>s&&(c=s);for(var l=0;l<c;++l){var h,p,f,d,v=t[l].replace(a,"%20"),y=v.indexOf(r);y>=0?(h=v.substr(0,y),p=v.substr(y+1)):(h=v,p=""),f=decodeURIComponent(h),d=decodeURIComponent(p),n(u,f)?o(u[f])?u[f].push(d):u[f]=[u[f],d]:u[f]=d}return u};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?i(u(t),function(u){var a=encodeURIComponent(n(u))+r;return o(t[u])?i(t[u],function(t){return a+encodeURIComponent(n(t))}).join(e):a+encodeURIComponent(n(t[u]))}).join(e):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var u=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e){t.exports=function(t,e){function r(t){return String(t).replace(/[^ !'()~\*]*/g,encodeURIComponent).replace(/ /g,"+").replace(/[!'()~\*]/g,function(t){return"%"+t.charCodeAt().toString(16).slice(-2).toUpperCase()})}function n(t){var r=Object.keys(t);return e.sorted?r.sort():r}function o(t){return t.filter(function(t){return t}).join("&")}function i(t,u){var a=typeof u,s=null;return u===s?s=e.ignorenull?s:r(t)+"="+s:/string|number|boolean/.test(a)?s=r(t)+"="+r(u):Array.isArray(u)?s=function(t,e){return o(e.map(function(e){return i(t+"[]",e)}))}(t,u):"object"===a&&(s=function(t,e){return o(n(e).map(function(r){return i(t+"["+r+"]",e[r])}))}(t,u)),s}return e="object"==typeof e?e:{},o(n(t).map(function(e){return i(e,t[e])}))}},function(t,e,r){"use strict";(function(e){var n=r(9),o=r(10),i=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,u=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};function c(t){var r,n={},o=typeof(t=t||e.location||{});if("blob:"===t.protocol)n=new h(unescape(t.pathname),{});else if("string"===o)for(r in n=new h(t,{}),s)delete n[r];else if("object"===o){for(r in t)r in s||(n[r]=t[r]);void 0===n.slashes&&(n.slashes=u.test(t.href))}return n}function l(t){var e=i.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function h(t,e,r){if(!(this instanceof h))return new h(t,e,r);var i,u,s,p,f,d,v=a.slice(),y=typeof e,g=this,b=0;for("object"!==y&&"string"!==y&&(r=e,e=null),r&&"function"!=typeof r&&(r=o.parse),e=c(e),i=!(u=l(t||"")).protocol&&!u.slashes,g.slashes=u.slashes||i&&e.slashes,g.protocol=u.protocol||e.protocol||"",t=u.rest,u.slashes||(v[2]=[/(.*)/,"pathname"]);b<v.length;b++)s=(p=v[b])[0],d=p[1],s!=s?g[d]=t:"string"==typeof s?~(f=t.indexOf(s))&&("number"==typeof p[2]?(g[d]=t.slice(0,f),t=t.slice(f+p[2])):(g[d]=t.slice(f),t=t.slice(0,f))):(f=s.exec(t))&&(g[d]=f[1],t=t.slice(0,f.index)),g[d]=g[d]||i&&p[3]&&e[d]||"",p[4]&&(g[d]=g[d].toLowerCase());r&&(g.query=r(g.query)),i&&e.slashes&&"/"!==g.pathname.charAt(0)&&(""!==g.pathname||""!==e.pathname)&&(g.pathname=function(t,e){for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),n=r.length,o=r[n-1],i=!1,u=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),u++):u&&(0===n&&(i=!0),r.splice(n,1),u--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(g.pathname,e.pathname)),n(g.port,g.protocol)||(g.host=g.hostname,g.port=""),g.username=g.password="",g.auth&&(p=g.auth.split(":"),g.username=p[0]||"",g.password=p[1]||""),g.origin=g.protocol&&g.host&&"file:"!==g.protocol?g.protocol+"//"+g.host:"null",g.href=g.toString()}h.prototype={set:function(t,e,r){var i=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(r||o.parse)(e)),i[t]=e;break;case"port":i[t]=e,n(e,i.protocol)?e&&(i.host=i.hostname+":"+e):(i.host=i.hostname,i[t]="");break;case"hostname":i[t]=e,i.port&&(e+=":"+i.port),i.host=e;break;case"host":i[t]=e,/:\d+$/.test(e)?(e=e.split(":"),i.port=e.pop(),i.hostname=e.join(":")):(i.hostname=e,i.port="");break;case"protocol":i.protocol=e.toLowerCase(),i.slashes=!r;break;case"pathname":case"hash":if(e){var u="pathname"===t?"/":"#";i[t]=e.charAt(0)!==u?u+e:e}else i[t]=e;break;default:i[t]=e}for(var s=0;s<a.length;s++){var c=a[s];c[4]&&(i[c[1]]=i[c[1]].toLowerCase())}return i.origin=i.protocol&&i.host&&"file:"!==i.protocol?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(t){t&&"function"==typeof t||(t=o.stringify);var e,r=this,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var i=n+(r.slashes?"//":"");return r.username&&(i+=r.username,r.password&&(i+=":"+r.password),i+="@"),i+=r.host+r.pathname,(e="object"==typeof r.query?t(r.query):r.query)&&(i+="?"!==e.charAt(0)?"?"+e:e),r.hash&&(i+=r.hash),i}},h.extractProtocol=l,h.location=c,h.qs=o,t.exports=h}).call(this,r(3))},function(t,e,r){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty;function o(t){return decodeURIComponent(t.replace(/\+/g," "))}e.stringify=function(t,e){e=e||"";var r=[];for(var o in"string"!=typeof e&&(e="?"),t)n.call(t,o)&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]));return r.length?e+r.join("&"):""},e.parse=function(t){for(var e,r=/([^=?&]+)=?([^&]*)/g,n={};e=r.exec(t);n[o(e[1])]=o(e[2]));return n}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{getAuthenticationUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["public"],r=n.default.stringify({client_id:t._applicationId,redirect_uri:t._callbackUrl,response_type:"code",scope:e.length>1?e.join("+"):e.toString()});return decodeURIComponent(o.OAUTH_AUTHORIZE_URL+"?"+r)},userAuthentication:function(e){var r=o.OAUTH_TOKEN_URL;return t.request({url:r,method:"POST",body:{client_id:t._applicationId,client_secret:t._secret,redirect_uri:t._callbackUrl,grant_type:"authorization_code",code:e},oauth:!0})},setBearerToken:function(e){e&&(t._bearerToken=e)}}};var n=function(t){return t&&t.__esModule?t:{default:t}}(r(2)),o=r(0)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{profile:function(){return t.request({url:"/me",method:"GET"})},updateProfile:function(e){var r=e.username,n=e.firstName,o=e.lastName,i=e.email,u=e.url,a=e.location,s=e.bio,c=e.instagramUsername,l={username:r,first_name:n,last_name:o,email:i,url:u,location:a,bio:s,instagram_username:c};return Object.keys(l).forEach(function(t){l[t]||delete l[t]}),t.request({url:"/me",method:"PUT",body:l})}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{profile:function(e){var r="/users/"+e;return t.request({url:r,method:"GET"})},photos:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u="/users/"+e+"/photos",a={page:r,per_page:n,order_by:o,stats:i};return t.request({url:u,method:"GET",query:a})},likes:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",i="/users/"+e+"/likes",u={page:r,per_page:n,order_by:o};return t.request({url:i,method:"GET",query:u})},collections:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"published",i="/users/"+e+"/collections",u={page:r,per_page:n,order_by:o};return t.request({url:i,method:"GET",query:u})},statistics:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"days",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,o="/users/"+e+"/statistics",i={resolution:r,quantity:n};return t.request({url:o,method:"GET",query:i})}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{listPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest",o={page:e,per_page:r,order_by:n};return t.request({url:"/photos",method:"GET",query:o})},listCuratedPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest",o={page:e,per_page:r,order_by:n};return t.request({url:"/photos/curated",method:"GET",query:o})},searchPhotos:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[""],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,i={query:e,category:r.length>1?r.join(","):r.toString(),page:n,per_page:o};return t.request({url:"/photos/search",method:"GET",query:i})},getPhoto:function(e,r,n,o){var i="/photos/"+e,u={w:r,h:n,rect:o};return t.request({url:i,method:"GET",query:u})},getPhotoStats:function(e){var r="/photos/"+e+"/stats";return t.request({url:r,method:"GET"})},getRandomPhoto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.category||[],n=e.collections||[],o={featured:e.featured,username:e.username,orientation:e.orientation,category:r.join(),collections:n.join(),query:e.query,w:e.width,h:e.height,c:e.cacheBuster||(new Date).getTime(),count:e.count};return Object.keys(o).forEach(function(t){o[t]||delete o[t]}),t.request({url:"/photos/random",method:"GET",query:o})},uploadPhoto:function(e){if(!t._bearerToken)throw new Error("Requires a bearerToken to be set.");return t.request({url:"/photos",method:"POST",body:{photo:e}})},likePhoto:function(e){if(!t._bearerToken)throw new Error("Requires a bearerToken to be set.");var r="/photos/"+e+"/like";return t.request({url:r,method:"POST"})},unlikePhoto:function(e){if(!t._bearerToken)throw new Error("Requires a bearerToken to be set.");var r="/photos/"+e+"/like";return t.request({url:r,method:"DELETE"})},downloadPhoto:function(e){var r=(0,o.default)(e,"links.download_location",void 0);if(void 0===r)throw new Error("Object received is not a photo. "+e);var i=(0,n.getUrlComponents)(r);return t.request({url:i.pathname,method:"GET",query:i.query})}}};var n=r(1),o=function(t){return t&&t.__esModule?t:{default:t}}(r(15))},function(t,e,r){(function(e){var r="Expected a function",n="__lodash_hash_undefined__",o=1/0,i="[object Function]",u="[object GeneratorFunction]",a="[object Symbol]",s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,l=/^\./,h=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,y=d||v||Function("return this")();var g=Array.prototype,b=Function.prototype,_=Object.prototype,m=y["__core-js_shared__"],j=function(){var t=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),q=b.toString,T=_.hasOwnProperty,O=_.toString,w=RegExp("^"+q.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=y.Symbol,P=g.splice,C=N(y,"Map"),U=N(Object,"create"),k=E?E.prototype:void 0,I=k?k.toString:void 0;function R(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function A(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function x(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function S(t,e){for(var r=t.length;r--;)if(H(t[r][0],e))return r;return-1}function G(t,e){for(var r=0,n=(e=function(t,e){if(V(t))return!1;var r=typeof t;if("number"==r||"symbol"==r||"boolean"==r||null==t||B(t))return!0;return c.test(t)||!s.test(t)||null!=e&&t in Object(e)}(e,t)?[e]:function(t){return V(t)?t:$(t)}(e)).length;null!=t&&r<n;)t=t[F(e[r++])];return r&&r==n?t:void 0}function M(t){return!(!D(t)||function(t){return!!j&&j in t}(t))&&(function(t){var e=D(t)?O.call(t):"";return e==i||e==u}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?w:f).test(function(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function L(t,e){var r=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map}function N(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return M(r)?r:void 0}R.prototype.clear=function(){this.__data__=U?U(null):{}},R.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},R.prototype.get=function(t){var e=this.__data__;if(U){var r=e[t];return r===n?void 0:r}return T.call(e,t)?e[t]:void 0},R.prototype.has=function(t){var e=this.__data__;return U?void 0!==e[t]:T.call(e,t)},R.prototype.set=function(t,e){return this.__data__[t]=U&&void 0===e?n:e,this},A.prototype.clear=function(){this.__data__=[]},A.prototype.delete=function(t){var e=this.__data__,r=S(e,t);return!(r<0||(r==e.length-1?e.pop():P.call(e,r,1),0))},A.prototype.get=function(t){var e=this.__data__,r=S(e,t);return r<0?void 0:e[r][1]},A.prototype.has=function(t){return S(this.__data__,t)>-1},A.prototype.set=function(t,e){var r=this.__data__,n=S(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},x.prototype.clear=function(){this.__data__={hash:new R,map:new(C||A),string:new R}},x.prototype.delete=function(t){return L(this,t).delete(t)},x.prototype.get=function(t){return L(this,t).get(t)},x.prototype.has=function(t){return L(this,t).has(t)},x.prototype.set=function(t,e){return L(this,t).set(t,e),this};var $=z(function(t){t=function(t){return null==t?"":function(t){if("string"==typeof t)return t;if(B(t))return I?I.call(t):"";var e=t+"";return"0"==e&&1/t==-o?"-0":e}(t)}(t);var e=[];return l.test(t)&&e.push(""),t.replace(h,function(t,r,n,o){e.push(n?o.replace(p,"$1"):r||t)}),e});function F(t){if("string"==typeof t||B(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}function z(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(r);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return n.cache=i.set(o,u),u};return n.cache=new(z.Cache||x),n}function H(t,e){return t===e||t!=t&&e!=e}z.Cache=x;var V=Array.isArray;function D(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function B(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&O.call(t)==a}t.exports=function(t,e,r){var n=null==t?void 0:G(t,e);return void 0===n?r:n}}).call(this,r(3))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{listCategories:function(){return t.request({url:"/categories",method:"GET"})},category:function(e){var r="/categories/"+e;return t.request({url:r,method:"GET"})},categoryPhotos:function(e,r,n){var o="/categories/"+e+"/photos",i={page:r,per_page:n};return t.request({url:o,method:"GET",query:i})}}}},function(t,e,r){"use strict";function n(t,e){var r=t?"/collections/curated/"+e:"/collections/"+e;return this.request({url:r,method:"GET"})}function o(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"latest",i=t?"/collections/curated/"+e+"/photos":"/collections/"+e+"/photos",u={page:r,per_page:n,order_by:o};return this.request({url:i,method:"GET",query:u})}function i(t,e,r,n){var o=t?"/collections/"+t:"/collections",i={title:e,description:r,private:n};return this.request({url:o,method:t?"PUT":"POST",body:i})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{listCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n={page:e,per_page:r};return t.request({url:"/collections",method:"GET",query:n})},listCuratedCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n={page:e,per_page:r};return t.request({url:"/collections/curated",method:"GET",query:n})},listFeaturedCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n={page:e,per_page:r};return t.request({url:"/collections/featured",method:"GET",query:n})},getCollection:n.bind(this,!1),getCuratedCollection:n.bind(this,!0),getCuratedCollectionPhotos:o.bind(this,!0),getCollectionPhotos:o.bind(this,!1),createCollection:i.bind(this,null),updateCollection:i.bind(this),deleteCollection:function(e){var r="/collections/"+e;return t.request({url:r,method:"DELETE"})},addPhotoToCollection:function(e,r){var n="/collections/"+e+"/add";return t.request({url:n,method:"POST",body:{photo_id:r}})},removePhotoFromCollection:function(e,r){var n="/collections/"+e+"/remove?photo_id="+r;return t.request({url:n,method:"DELETE"})},listRelatedCollections:function(e){var r="/collections/"+e+"/related";return t.request({url:r,method:"GET"})}}}},function(t,e,r){"use strict";function n(t){var e={query:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",page:arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,per_page:arguments.length>3&&void 0!==arguments[3]?arguments[3]:10};return this.request({url:t,method:"GET",query:e})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{all:n.bind(this,"/search"),photos:n.bind(this,"/search/photos"),users:n.bind(this,"/search/users"),collections:n.bind(this,"/search/collections")}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this;return{total:function(){return t.request({url:"/stats/total",method:"GET"})}}}},function(t,e,r){"use strict";let n;r.r(e);var o=n={applicationId:"871cf564f90068ebe15bd15bfd95cc0f8366474ee386c149d36bf45f89bedf19",secret:"350b7e7a17c3b9c778d50b2862fb1b465196a4e1b2ecdeb983b63b759fbd5148",callbackUrl:"urn:ietf:wg:oauth:2.0:oob"},i=r(4),u=r.n(i);(async()=>{let t=new class{async getRandomImage(){const t=new u.a({applicationId:o.applicationId,secret:o.secret,callbackUrl:o.callbackUrl});let e=await t.photos.getRandomPhoto({query:"inspirational"});return await e.json()}removeContent(t){const e=t.children[0];e.parentNode.removeChild(e)}displayImage(t,e){const r=new Image;r.src=t,r.classList.add("image-style"),e.appendChild(r)}addText(t){const e=document.createElement("h2");e.innerText="Get back to building your dreams!",e.classList.add("beautText"),t.appendChild(e)}};const e=document.getElementById("page-manager");e.classList.add("align"),t.addText(e),t.removeContent(e),t.displayImage(chrome.extension.getURL("images/pic.jpeg"),e)})()}]);