!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";let n;r.r(t);var o=n={applicationId:"871cf564f90068ebe15bd15bfd95cc0f8366474ee386c149d36bf45f89bedf19",secret:"350b7e7a17c3b9c778d50b2862fb1b465196a4e1b2ecdeb983b63b759fbd5148",callbackUrl:"urn:ietf:wg:oauth:2.0:oob"},i=r(5),u=r.n(i);(async()=>{let e=new class{async getRandomImage(){const e=new u.a({applicationId:o.applicationId,secret:o.secret,callbackUrl:o.callbackUrl,headers:{mode:"no-cors"}});let t=await e.photos.getRandomPhoto({});return await t.json()}displayImage(e){const t=document.getElementById("page-manager").children[0];t.parentNode.removeChild(t);const r=document.getElementById("page-manager"),n=document.getElementById("sections");n.parentNode.removeChild(n);const o=new Image;o.src=e,r.appendChild(o)}},t=await e.getRandomImage();e.displayImage(t.urls.regular)})()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.API_URL="https://api.unsplash.com",t.API_VERSION="v1",t.OAUTH_AUTHORIZE_URL="https://unsplash.com/oauth/authorize",t.OAUTH_TOKEN_URL="https://unsplash.com/oauth/token"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.formUrlEncode=s,t.getUrlComponents=function(e){return(0,u.default)(e,{},!0)},t.buildFetchOptions=function(e){var t=e.method,r=e.query,i=e.oauth,u=e.body,a=!0===i?e.url:""+this._apiUrl+e.url,c=n({},this._headers,e.headers,{"Accept-Version":this._apiVersion,Authorization:this._bearerToken?"Bearer "+this._bearerToken:"Client-ID "+this._applicationId});u&&(c["Content-Type"]="application/x-www-form-urlencoded");r&&(a=decodeURIComponent(a+"?"+(0,o.stringify)(r)));return{url:a,options:{method:t,headers:c,body:"GET"!==t&&u?s(u):void 0}}};var o=r(3),i=a(r(8)),u=a(r(9));function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(0,i.default)(e)}},function(e,t,r){"use strict";t.decode=t.parse=r(6),t.encode=t.stringify=r(7)},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.toJson=function(e){return"function"==typeof e.json?e.json():e};var o=r(1),i=r(2),u=d(r(12)),a=d(r(13)),s=d(r(14)),c=d(r(15)),l=d(r(17)),h=d(r(18)),p=d(r(19)),f=d(r(20));function d(e){return e&&e.__esModule?e:{default:e}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._apiUrl=t.apiUrl||o.API_URL,this._apiVersion=t.apiVersion||o.API_VERSION,this._applicationId=t.applicationId,this._secret=t.secret,this._callbackUrl=t.callbackUrl,this._bearerToken=t.bearerToken,this._headers=t.headers||{},this.auth=u.default.bind(this)(),this.currentUser=a.default.bind(this)(),this.users=s.default.bind(this)(),this.photos=c.default.bind(this)(),this.categories=l.default.bind(this)(),this.collections=h.default.bind(this)(),this.search=p.default.bind(this)(),this.stats=f.default.bind(this)()}return n(e,[{key:"request",value:function(e){var t=i.buildFetchOptions.bind(this)(e),r=t.url,n=t.options;return fetch(r,n)}}]),e}();t.default=v},function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,i){t=t||"&",r=r||"=";var u={};if("string"!=typeof e||0===e.length)return u;var a=/\+/g;e=e.split(t);var s=1e3;i&&"number"==typeof i.maxKeys&&(s=i.maxKeys);var c=e.length;s>0&&c>s&&(c=s);for(var l=0;l<c;++l){var h,p,f,d,v=e[l].replace(a,"%20"),y=v.indexOf(r);y>=0?(h=v.substr(0,y),p=v.substr(y+1)):(h=v,p=""),f=decodeURIComponent(h),d=decodeURIComponent(p),n(u,f)?o(u[f])?u[f].push(d):u[f]=[u[f],d]:u[f]=d}return u};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?i(u(e),function(u){var a=encodeURIComponent(n(u))+r;return o(e[u])?i(e[u],function(e){return a+encodeURIComponent(n(e))}).join(t):a+encodeURIComponent(n(e[u]))}).join(t):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var u=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},function(e,t){e.exports=function(e,t){function r(e){return String(e).replace(/[^ !'()~\*]*/g,encodeURIComponent).replace(/ /g,"+").replace(/[!'()~\*]/g,function(e){return"%"+e.charCodeAt().toString(16).slice(-2).toUpperCase()})}function n(e){var r=Object.keys(e);return t.sorted?r.sort():r}function o(e){return e.filter(function(e){return e}).join("&")}function i(e,u){var a=typeof u,s=null;return u===s?s=t.ignorenull?s:r(e)+"="+s:/string|number|boolean/.test(a)?s=r(e)+"="+r(u):Array.isArray(u)?s=function(e,t){return o(t.map(function(t){return i(e+"[]",t)}))}(e,u):"object"===a&&(s=function(e,t){return o(n(t).map(function(r){return i(e+"["+r+"]",t[r])}))}(e,u)),s}return t="object"==typeof t?t:{},o(n(e).map(function(t){return i(t,e[t])}))}},function(e,t,r){"use strict";(function(t){var n=r(10),o=r(11),i=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,u=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};function c(e){var r,n={},o=typeof(e=e||t.location||{});if("blob:"===e.protocol)n=new h(unescape(e.pathname),{});else if("string"===o)for(r in n=new h(e,{}),s)delete n[r];else if("object"===o){for(r in e)r in s||(n[r]=e[r]);void 0===n.slashes&&(n.slashes=u.test(e.href))}return n}function l(e){var t=i.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function h(e,t,r){if(!(this instanceof h))return new h(e,t,r);var i,u,s,p,f,d,v=a.slice(),y=typeof t,g=this,_=0;for("object"!==y&&"string"!==y&&(r=t,t=null),r&&"function"!=typeof r&&(r=o.parse),t=c(t),i=!(u=l(e||"")).protocol&&!u.slashes,g.slashes=u.slashes||i&&t.slashes,g.protocol=u.protocol||t.protocol||"",e=u.rest,u.slashes||(v[2]=[/(.*)/,"pathname"]);_<v.length;_++)s=(p=v[_])[0],d=p[1],s!=s?g[d]=e:"string"==typeof s?~(f=e.indexOf(s))&&("number"==typeof p[2]?(g[d]=e.slice(0,f),e=e.slice(f+p[2])):(g[d]=e.slice(f),e=e.slice(0,f))):(f=s.exec(e))&&(g[d]=f[1],e=e.slice(0,f.index)),g[d]=g[d]||i&&p[3]&&t[d]||"",p[4]&&(g[d]=g[d].toLowerCase());r&&(g.query=r(g.query)),i&&t.slashes&&"/"!==g.pathname.charAt(0)&&(""!==g.pathname||""!==t.pathname)&&(g.pathname=function(e,t){for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],i=!1,u=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),u++):u&&(0===n&&(i=!0),r.splice(n,1),u--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(g.pathname,t.pathname)),n(g.port,g.protocol)||(g.host=g.hostname,g.port=""),g.username=g.password="",g.auth&&(p=g.auth.split(":"),g.username=p[0]||"",g.password=p[1]||""),g.origin=g.protocol&&g.host&&"file:"!==g.protocol?g.protocol+"//"+g.host:"null",g.href=g.toString()}h.prototype={set:function(e,t,r){var i=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||o.parse)(t)),i[e]=t;break;case"port":i[e]=t,n(t,i.protocol)?t&&(i.host=i.hostname+":"+t):(i.host=i.hostname,i[e]="");break;case"hostname":i[e]=t,i.port&&(t+=":"+i.port),i.host=t;break;case"host":i[e]=t,/:\d+$/.test(t)?(t=t.split(":"),i.port=t.pop(),i.hostname=t.join(":")):(i.hostname=t,i.port="");break;case"protocol":i.protocol=t.toLowerCase(),i.slashes=!r;break;case"pathname":case"hash":if(t){var u="pathname"===e?"/":"#";i[e]=t.charAt(0)!==u?u+t:t}else i[e]=t;break;default:i[e]=t}for(var s=0;s<a.length;s++){var c=a[s];c[4]&&(i[c[1]]=i[c[1]].toLowerCase())}return i.origin=i.protocol&&i.host&&"file:"!==i.protocol?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(e){e&&"function"==typeof e||(e=o.stringify);var t,r=this,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var i=n+(r.slashes?"//":"");return r.username&&(i+=r.username,r.password&&(i+=":"+r.password),i+="@"),i+=r.host+r.pathname,(t="object"==typeof r.query?e(r.query):r.query)&&(i+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(i+=r.hash),i}},h.extractProtocol=l,h.location=c,h.qs=o,e.exports=h}).call(this,r(4))},function(e,t,r){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;function o(e){return decodeURIComponent(e.replace(/\+/g," "))}t.stringify=function(e,t){t=t||"";var r=[];for(var o in"string"!=typeof t&&(t="?"),e)n.call(e,o)&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.length?t+r.join("&"):""},t.parse=function(e){for(var t,r=/([^=?&]+)=?([^&]*)/g,n={};t=r.exec(e);n[o(t[1])]=o(t[2]));return n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this;return{getAuthenticationUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["public"],r=n.default.stringify({client_id:e._applicationId,redirect_uri:e._callbackUrl,response_type:"code",scope:t.length>1?t.join("+"):t.toString()});return decodeURIComponent(o.OAUTH_AUTHORIZE_URL+"?"+r)},userAuthentication:function(t){var r=o.OAUTH_TOKEN_URL;return e.request({url:r,method:"POST",body:{client_id:e._applicationId,client_secret:e._secret,redirect_uri:e._callbackUrl,grant_type:"authorization_code",code:t},oauth:!0})},setBearerToken:function(t){t&&(e._bearerToken=t)}}};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(3)),o=r(1)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this;return{profile:function(){return e.request({url:"/me",method:"GET"})},updateProfile:function(t){var r=t.username,n=t.firstName,o=t.lastName,i=t.email,u=t.url,a=t.location,s=t.bio,c=t.instagramUsername,l={username:r,first_name:n,last_name:o,email:i,url:u,location:a,bio:s,instagram_username:c};return Object.keys(l).forEach(function(e){l[e]||delete l[e]}),e.request({url:"/me",method:"PUT",body:l})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this;return{profile:function(t){var r="/users/"+t;return e.request({url:r,method:"GET"})},photos:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u="/users/"+t+"/photos",a={page:r,per_page:n,order_by:o,stats:i};return e.request({url:u,method:"GET",query:a})},likes:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"latest",i="/users/"+t+"/likes",u={page:r,per_page:n,order_by:o};return e.request({url:i,method:"GET",query:u})},collections:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"published",i="/users/"+t+"/collections",u={page:r,per_page:n,order_by:o};return e.request({url:i,method:"GET",query:u})},statistics:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"days",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,o="/users/"+t+"/statistics",i={resolution:r,quantity:n};return e.request({url:o,method:"GET",query:i})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this;return{listPhotos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest",o={page:t,per_page:r,order_by:n};return e.request({url:"/photos",method:"GET",query:o})},listCuratedPhotos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest",o={page:t,per_page:r,order_by:n};return e.request({url:"/photos/curated",method:"GET",query:o})},searchPhotos:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[""],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,i={query:t,category:r.length>1?r.join(","):r.toString(),page:n,per_page:o};return e.request({url:"/photos/search",method:"GET",query:i})},getPhoto:function(t,r,n,o){var i="/photos/"+t,u={w:r,h:n,rect:o};return e.request({url:i,method:"GET",query:u})},getPhotoStats:function(t){var r="/photos/"+t+"/stats";return e.request({url:r,method:"GET"})},getRandomPhoto:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.category||[],n=t.collections||[],o={featured:t.featured,username:t.username,orientation:t.orientation,category:r.join(),collections:n.join(),query:t.query,w:t.width,h:t.height,c:t.cacheBuster||(new Date).getTime(),count:t.count};return Object.keys(o).forEach(function(e){o[e]||delete o[e]}),e.request({url:"/photos/random",method:"GET",query:o})},uploadPhoto:function(t){if(!e._bearerToken)throw new Error("Requires a bearerToken to be set.");return e.request({url:"/photos",method:"POST",body:{photo:t}})},likePhoto:function(t){if(!e._bearerToken)throw new Error("Requires a bearerToken to be set.");var r="/photos/"+t+"/like";return e.request({url:r,method:"POST"})},unlikePhoto:function(t){if(!e._bearerToken)throw new Error("Requires a bearerToken to be set.");var r="/photos/"+t+"/like";return e.request({url:r,method:"DELETE"})},downloadPhoto:function(t){var r=(0,o.default)(t,"links.download_location",void 0);if(void 0===r)throw new Error("Object received is not a photo. "+t);var i=(0,n.getUrlComponents)(r);return e.request({url:i.pathname,method:"GET",query:i.query})}}};var n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r(16))},function(e,t,r){(function(t){var r="Expected a function",n="__lodash_hash_undefined__",o=1/0,i="[object Function]",u="[object GeneratorFunction]",a="[object Symbol]",s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,l=/^\./,h=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,d="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,y=d||v||Function("return this")();var g=Array.prototype,_=Function.prototype,b=Object.prototype,m=y["__core-js_shared__"],j=function(){var e=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),q=_.toString,O=b.hasOwnProperty,T=b.toString,w=RegExp("^"+q.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=y.Symbol,P=g.splice,C=N(y,"Map"),U=N(Object,"create"),k=E?E.prototype:void 0,I=k?k.toString:void 0;function R(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function A(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function S(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function G(e,t){for(var r=e.length;r--;)if(B(e[r][0],t))return r;return-1}function x(e,t){for(var r=0,n=(t=function(e,t){if(H(e))return!1;var r=typeof e;if("number"==r||"symbol"==r||"boolean"==r||null==e||D(e))return!0;return c.test(e)||!s.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:function(e){return H(e)?e:$(e)}(t)).length;null!=e&&r<n;)e=e[F(t[r++])];return r&&r==n?e:void 0}function M(e){return!(!V(e)||function(e){return!!j&&j in e}(e))&&(function(e){var t=V(e)?T.call(e):"";return t==i||t==u}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?w:f).test(function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function L(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map}function N(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return M(r)?r:void 0}R.prototype.clear=function(){this.__data__=U?U(null):{}},R.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},R.prototype.get=function(e){var t=this.__data__;if(U){var r=t[e];return r===n?void 0:r}return O.call(t,e)?t[e]:void 0},R.prototype.has=function(e){var t=this.__data__;return U?void 0!==t[e]:O.call(t,e)},R.prototype.set=function(e,t){return this.__data__[e]=U&&void 0===t?n:t,this},A.prototype.clear=function(){this.__data__=[]},A.prototype.delete=function(e){var t=this.__data__,r=G(t,e);return!(r<0||(r==t.length-1?t.pop():P.call(t,r,1),0))},A.prototype.get=function(e){var t=this.__data__,r=G(t,e);return r<0?void 0:t[r][1]},A.prototype.has=function(e){return G(this.__data__,e)>-1},A.prototype.set=function(e,t){var r=this.__data__,n=G(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},S.prototype.clear=function(){this.__data__={hash:new R,map:new(C||A),string:new R}},S.prototype.delete=function(e){return L(this,e).delete(e)},S.prototype.get=function(e){return L(this,e).get(e)},S.prototype.has=function(e){return L(this,e).has(e)},S.prototype.set=function(e,t){return L(this,e).set(e,t),this};var $=z(function(e){e=function(e){return null==e?"":function(e){if("string"==typeof e)return e;if(D(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}(e)}(e);var t=[];return l.test(e)&&t.push(""),e.replace(h,function(e,r,n,o){t.push(n?o.replace(p,"$1"):r||e)}),t});function F(e){if("string"==typeof e||D(e))return e;var t=e+"";return"0"==t&&1/e==-o?"-0":t}function z(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(r);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var u=e.apply(this,r);return n.cache=i.set(o,u),u};return n.cache=new(z.Cache||S),n}function B(e,t){return e===t||e!=e&&t!=t}z.Cache=S;var H=Array.isArray;function V(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function D(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&T.call(e)==a}e.exports=function(e,t,r){var n=null==e?void 0:x(e,t);return void 0===n?r:n}}).call(this,r(4))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this;return{listCategories:function(){return e.request({url:"/categories",method:"GET"})},category:function(t){var r="/categories/"+t;return e.request({url:r,method:"GET"})},categoryPhotos:function(t,r,n){var o="/categories/"+t+"/photos",i={page:r,per_page:n};return e.request({url:o,method:"GET",query:i})}}}},function(e,t,r){"use strict";function n(e,t){var r=e?"/collections/curated/"+t:"/collections/"+t;return this.request({url:r,method:"GET"})}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"latest",i=e?"/collections/curated/"+t+"/photos":"/collections/"+t+"/photos",u={page:r,per_page:n,order_by:o};return this.request({url:i,method:"GET",query:u})}function i(e,t,r,n){var o=e?"/collections/"+e:"/collections",i={title:t,description:r,private:n};return this.request({url:o,method:e?"PUT":"POST",body:i})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this;return{listCollections:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n={page:t,per_page:r};return e.request({url:"/collections",method:"GET",query:n})},listCuratedCollections:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n={page:t,per_page:r};return e.request({url:"/collections/curated",method:"GET",query:n})},listFeaturedCollections:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n={page:t,per_page:r};return e.request({url:"/collections/featured",method:"GET",query:n})},getCollection:n.bind(this,!1),getCuratedCollection:n.bind(this,!0),getCuratedCollectionPhotos:o.bind(this,!0),getCollectionPhotos:o.bind(this,!1),createCollection:i.bind(this,null),updateCollection:i.bind(this),deleteCollection:function(t){var r="/collections/"+t;return e.request({url:r,method:"DELETE"})},addPhotoToCollection:function(t,r){var n="/collections/"+t+"/add";return e.request({url:n,method:"POST",body:{photo_id:r}})},removePhotoFromCollection:function(t,r){var n="/collections/"+t+"/remove?photo_id="+r;return e.request({url:n,method:"DELETE"})},listRelatedCollections:function(t){var r="/collections/"+t+"/related";return e.request({url:r,method:"GET"})}}}},function(e,t,r){"use strict";function n(e){var t={query:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",page:arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,per_page:arguments.length>3&&void 0!==arguments[3]?arguments[3]:10};return this.request({url:e,method:"GET",query:t})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{all:n.bind(this,"/search"),photos:n.bind(this,"/search/photos"),users:n.bind(this,"/search/users"),collections:n.bind(this,"/search/collections")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this;return{total:function(){return e.request({url:"/stats/total",method:"GET"})}}}}]);