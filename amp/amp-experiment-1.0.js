(self.AMP=self.AMP||[]).push({n:"amp-experiment",v:"1904200955460",f:(function(AMP,_){
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},p={};try{p.__proto__=ca;n=p.a;break a}catch(a){}n=!1}k=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=k;function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=t(c[1],c[1]),e=c[2]?t(c[2],c[2]):"";b[d]=e}return b};var v="";var ea=Object.prototype.toString;function w(a){return"[object Object]"===ea.call(a)};self.log=self.log||{user:null,dev:null,userForEmbed:null};var x=self.log;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(a,b,c,d,e,f){return y().assert(a,b,c,d,e,f,void 0,void 0,void 0,void 0,void 0)};var A=Object.prototype.hasOwnProperty;function B(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function fa(a){var b=C,c=D(a),d=E(c);a=d;var e=F(a),f=e["origin-experiments"];f||(f=e["origin-experiments"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});f.ctor||f.obj||(f.ctor=b,f.context=c,f.resolve&&G(a,"origin-experiments"))}function H(a,b){a=a.__AMP_TOP||a;return G(a,b)}function I(a,b){var c=D(a);c=E(c);return G(c,b)}function J(a,b){a=E(a);var c=K(a,b);c?b=c:(a=F(a),a[b]=ha(),b=a[b].promise);return b}
function D(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function E(a){a=D(a);return a.isSingleDoc()?a.win:a}function G(a,b){L(a,b);var c=F(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function K(a,b){var c=F(a)[b];if(c){if(c.promise)return c.promise;G(a,b);return c.promise=Promise.resolve(c.obj)}return null}function F(a){var b=a.services;b||(b=a.services={});return b}
function L(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)}function ha(){var a=new B,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ia(a){return ja(a).then(function(a){return z(a,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","userNotificationManager","amp-user-notification","amp-user-notification","amp-user-notification")})}
function ja(a){var b=K(E(a),"userNotificationManager");if(b)return b;var c=D(a);return c.whenBodyAvailable().then(function(){var a=c.win;var b=c.win.document.head;if(b){var f=[];b=b.querySelectorAll("script[custom-element]");for(var g=0;g<b.length;g++)f.push(b[g].getAttribute("custom-element"))}else f=[];a=f.includes("amp-user-notification")?H(a,"extensions").waitForExtension(a,"amp-user-notification"):Promise.resolve();return a}).then(function(){var b=c.win;return b.ampExtendedElements&&b.ampExtendedElements["amp-user-notification"]?
J(a,"userNotificationManager"):null})};var ka=/^[\w-]+$/;function M(a){this.ampdoc=a;this.B=new B}M.prototype.init=function(a){var b=this;a.then(function(a){return b.B.resolve(a)})};M.prototype.getVariants=function(){return this.B.promise};M.prototype.whenReady=function(){return this.getVariants()};
function la(a,b,c){N(b);ma(b,c);var d=I(a,"viewer"),e=d.getParam("amp-x-"+b);if(e&&A.call(c.variants,e))return Promise.resolve(e);var f=!1!==c.sticky,g=c.cidScope||"amp-experiment",h=Promise.resolve(!0);if(f&&c.consentNotificationId){var l=a.getHeadNode();h=ia(l).then(function(a){return a.getNotification(c.consentNotificationId)}).then(function(a){z(a,"Notification not found: "+c.consentNotificationId);return a.isDismissed()})}return h.then(function(d){if(!d)return null;var e=c.group||b;return na(a,
e,f?g:null).then(function(a){for(var b=0,d=c.variants,e=Object.keys(d).sort(),f=0;f<e.length;f++)if(b+=d[e[f]].weight,a<b)return e[f];return null})})}
function ma(a,b){var c=b.variants;z(w(c)&&0<Object.keys(c).length,"Missing variants object from experiment.");b.group&&N(b.group);var d=0,e;for(e in c)if(A.call(c,e)){N(e);var f=c[e];b=f;var g=a,h=e;z(w(b),g+".variants."+h+" must be an object.");z(void 0!==b.weight&&"number"===typeof b.weight,g+".variants."+h+" must have a number weight.");var l=b.weight;z(0<l&&100>l,"Invalid weight percentage %s."+(" "+g+".variants."+h)+" Has to be greater than 0 and less than 100",l);z(b.mutations&&Array.isArray(b.mutations),
g+".variants."+h+" must have a mutations array.");z(0<b.mutations.length,g+".variants."+h+" mutations must have at least one mutation.");var q=f.weight;d+=q}z(100>=d.toFixed(6),"Total percentage is bigger than 100: "+d)}
function na(a,b,c){if(!c)return Promise.resolve(100*a.win.Math.random());var d=J(a,"cid").then(function(a){return a.get({scope:c,createCookieIfNotPresent:!0},Promise.resolve())});return Promise.all([d,H(a.win,"crypto")]).then(function(a){return a[1].uniform(b+":"+a[0])}).then(function(a){return 100*a})}function N(a){z(ka.test(a),"Invalid name: %s. Allowed chars are [a-zA-Z0-9-_].",a)};function O(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);b[c]=d}return b}function P(a){for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=String.fromCharCode(a[c]);return b.join("")};function Q(){var a=100;this.D=a;this.l=this.o=0;this.j=Object.create(null)}Q.prototype.has=function(a){return!!this.j[a]};Q.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.l,b.payload};
Q.prototype.put=function(a,b){this.has(a)||this.o++;this.j[a]={payload:b,access:this.l};if(!(this.o<=this.D)){if(x.dev)a=x.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.o--)}};var R=self.AMP_CONFIG||{},oa={thirdParty:R.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:R.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof R.thirdPartyFrameRegex?new RegExp(R.thirdPartyFrameRegex):R.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:R.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof R.cdnProxyRegex?new RegExp(R.cdnProxyRegex):R.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:R.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:R.localDev||!1};var pa=function(a){return a||{}}({c:!0,v:!0,a:!0,ad:!0,action:!0}),S,T,qa=/[?&]amp_js[^&]*/,ra=/[?&]amp_gsa[^&]*/,sa=/[?&]amp_r[^&]*/,ta=/[?&]amp_kit[^&]*/,ua=/[?&]usqp[^&]*/;
function U(a){var b;S||(S=self.document.createElement("a"),T=self.UrlCache||(self.UrlCache=new Q));var c=b?null:T,d=S;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d=self;if(d.AMP_MODE)d=d.AMP_MODE;else{var f=self.AMP_CONFIG||{},g=!!f.test||!1,h=u(d.location.originalHash||d.location.hash);f=f.spt;var l=u(d.location.search);v||(v=d.AMP_CONFIG&&d.AMP_CONFIG.v?d.AMP_CONFIG.v:"011904200955460");d=d.AMP_MODE={localDev:!1,development:!("1"!=h.development&&!d.AMP_DEV_MODE),examiner:"2"==h.development,filter:h.filter,geoOverride:h["amp-geo"],minified:!0,lite:void 0!=l.amp_lite,
test:g,log:h.log,version:"1904200955460",rtvVersion:v,singlePassType:f}}e=d.test&&Object.freeze?Object.freeze(e):e;c&&c.put(a,e);a=e}return a}
function V(a){var b="attributes",c="mutation";c=void 0===c?"source":c;z(null!=a,"%s %s must be available",b,c);var d=a;a=d;"string"==typeof a&&(a=U(a));var e;(e="https:"==a.protocol||"localhost"==a.hostname||"127.0.0.1"==a.hostname)||(a=a.hostname,e=a.length-10,e=0<=e&&a.indexOf(".localhost",e)==e);z(e||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,d);return d};var va={alg:"RS256",e:"AQAB",ext:!0,key_ops:["verify"],kty:"RSA",n:"uAGSMYKze8Fit508UaGHz1eZowfX4YsA0lmyi-65xQfjF7nMo61c4Iz4erdqgRp-ov662yVPquhPmTxgB-nzNcTPrj15Jo05Js78Q9hS2hrPIjKMlzcKSYQN_08QieWKOSmVbLSv_-4n9Ms5ta8nRs4pwc_2nX5n7m5B5GH4VerGbqIWIn9FRNYMShBRQ9TCHpb6BIUTwUn6iwmJLenq0A1xhGrQ9rswGC1QJhjotkeReKXZDLLWaFr0uRw-IyvRa5RiiEGntgOvcbvamM5TnbKavc2rxvg2TWTCNQnb7lWSAzldJA_yAOYet_MjnHMyj2srUdbQSDCk8kPWWuafiQ"};
function C(a){this.A=a;this.h=H(a.win,"crypto");a:{a=a.getHeadNode();var b=a.ownerDocument.defaultView;if(b!=(b.__AMP_TOP||b)){if(L(b,"url")&&(a=G(b,"url")))break a;a=null}else a=D(a),a=E(a),a=L(a,"url")?G(a,"url"):null}this.w=a;this.F=new W(this.h,this.w);this.m=null}C.prototype.getExperiments=function(a,b){a=void 0===a?!1:a;b=void 0===b?va:b;if(!this.h.isPkcsAvailable())return y().error("OriginExperiments","Crypto is unavailable."),Promise.resolve([]);if(!this.m||a)this.m=wa(this,b);return this.m};
function wa(a,b){var c=a.A.getHeadNode().querySelectorAll('meta[name="amp-experiment-token"]');if(0==c.length)return Promise.resolve();var d=a.A.win;return H(d,"crypto").importPkcsKey(b).then(function(b){for(var e=[],g=0;g<c.length;g++){var h=c[g],l=h.getAttribute("content");l?(l=a.F.verifyToken(l,d.location,b).catch(function(a){y().error("OriginExperiments","Failed to verify experiment token:",a)}),e.push(l)):y().error("OriginExperiments","Missing content for experiment token: ",h)}return Promise.all(e)})}
function W(a,b){this.h=a;this.w=b}W.prototype.generateKeys=function(){var a=Object.assign({modulusLength:2048,publicExponent:Uint8Array.of(1,0,1)},this.h.pkcsAlgo);return this.h.subtle.generateKey(a,!0,["sign","verify"])};W.prototype.generateToken=function(a,b,c){b=O(JSON.stringify(b));var d=xa(a,b);return this.h.subtle.sign(this.h.pkcsAlgo,c,d).then(function(a){a=new Uint8Array(a);a=P(d)+P(a);return btoa(a)})};
W.prototype.verifyToken=function(a,b,c){var d=this;return new Promise(function(e){var f=0,g=O(atob(a)),h=g[f];if(0!==h)throw Error("Unrecognized token version: "+h);f+=1;h=(new DataView(g.buffer)).getUint32(f);f+=4;if(h>g.length-f)throw Error("Unexpected config length: "+h);var l=g.subarray(f,f+h);f+=h;e(d.h.verifyPkcs(c,g.subarray(f),g.subarray(0,f)).then(function(a){if(!a)throw Error("Failed to verify token signature.");var c=P(l),e=JSON.parse(c),f=d.w.parse(e.origin).origin;var g=b;"string"==typeof g&&
(g=U(g));var h=g;"string"==typeof h&&(h=U(h));if(oa.cdnProxyRegex.test(h.origin)){h=g.pathname.split("/");z(pa[h[1]],"Unknown path prefix in url %s",g.href);var m=h[2],q="s"==m?"https://"+decodeURIComponent(h[3]):"http://"+decodeURIComponent(m);z(0<q.indexOf("."),"Expected a . in origin %s",q);h.splice(1,"s"==m?3:2);h=q+h.join("/");m=(m=g.search)&&"?"!=m?(m=m.replace(qa,"").replace(ra,"").replace(sa,"").replace(ta,"").replace(ua,"").replace(/^[?&]/,""))?"?"+m:"":"";g=h+m+(g.hash||"")}else g=g.href;
g=U(g).origin;if(f!==g)throw Error("Config origin ("+f+") does not match "+("window ("+g+")."));var aa=e.experiment,Aa=e.expiration;if(Aa>=Date.now())return aa;throw Error('Experiment "'+aa+'" has expired.');}))})};function xa(a,b){var c=new Uint8Array(b.length+5);c[0]=a;(new DataView(c.buffer)).setUint32(1,b.length,!1);c.set(b,5);return c};function ya(a){if(a.__AMP__EXPERIMENT_TOGGLES)var b=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(c=a.AMP_CONFIG["allow-doc-opt-in"],d=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){d=
d.getAttribute("content").split(",");for(var e=0;e<d.length;e++)-1!=c.indexOf(d[e])&&(b[d[e]]=!0)}Object.assign(b,za(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(c=a.AMP_CONFIG["allow-url-opt-in"],a=u(a.location.originalHash||a.location.hash),d=0;d<c.length;d++)e=a["e-"+c[d]],"1"==e&&(b[c[d]]=!0),"0"==e&&(b[c[d]]=!1)}var f=b;return!!f["amp-experiment-1.0"]}
function za(a){a:{try{var b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==t(c.substring(0,d).trim(),void 0)){a=c.substring(d+1).trim();a=t(a,a);break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var Ba=["attributes","characterData","childList"],Ca={style:function(a){return a.match(/(!\s*important|\x3c!--)/)?!1:a.match(/^color:\s*#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3});?$/)||a.match(/^background-color:\s*#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3});?$/)?!0:!1},src:function(a){return V(a)},href:function(a){return V(a)}};
function Da(a,b){var c=Ea(a),d=JSON.stringify(a);Fa(c,b);if("attributes"===c.type)return Ga(c,d),function(){c.targetElement.setAttribute(c.attributeName,c.value)};if("characterData"===c.type)return Ha(c,d),function(){c.targetElement.textContent=c.value};y().error("amp-experiment mutation-parser","childList mutations not supported in the current experiment state.");return function(){}}
function Ea(a){z(w(a),"Mutation %s must be an object.",JSON.stringify(a));z(void 0!==a.type&&"string"===typeof a.type,"Mutation %s must have a type.",JSON.stringify(a));z(0<=Ba.indexOf(a.type),"Mutation %s must have a type.",JSON.stringify(a));z(void 0!==a.target&&"string"===typeof a.target,"Mutation %s must have a target.",JSON.stringify(a));return a}function Fa(a,b){var c="target",d=b.querySelector(a[c]);z(null!==d,"No element on the document matches the selector, %s .",a[c]);a[c+"Element"]=d}
function Ga(a,b){z(void 0!==a.value&&"string"===typeof a.value,"Mutation %s must have a value.",b);z(void 0!==a.attributeName&&"string"===typeof a.attributeName,"Mutation %s must have a attributeName.",b);var c=Object.keys(Ca);z(0<=c.indexOf(a.attributeName),"Mutation %s has an unsupported attributeName.",b);z(Ca[a.attributeName](a.value),"Mutation %s has an an unsupported value.",b)}function Ha(a,b){z(void 0!==a.value&&"string"===typeof a.value,"Mutation %s must have a value.",b)};function X(a){return AMP.BaseElement.apply(this,arguments)||this}var Y=AMP.BaseElement;X.prototype=ba(Y.prototype);X.prototype.constructor=X;if(r)r(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Ia=Object.getOwnPropertyDescriptor(Y,Z);Ia&&Object.defineProperty(X,Z,Ia)}else X[Z]=Y[Z];X.G=Y.prototype;X.prototype.isLayoutSupported=function(a){return"nodisplay"==a||"container"==a};
X.prototype.buildCallback=function(){var a=this,b=[J(this.getAmpDoc(),"variant"),Ja(this)];return Promise.all(b).then(function(b){var c=b[0],e=b[1];if(false)return y().error("amp-experiment","Experiment amp-experiment-1.0 is not enabled."),c.init(Promise.resolve({})),Promise.reject("Experiment amp-experiment-1.0 is not enabled.");try{var f=Ka(a),g=Object.create(null),h=Object.keys(f).map(function(b){return la(a.getAmpDoc(),b,f[b]).then(function(a){g[b]=a})}),l=Promise.all(h).then(function(){return g}).then(a.C.bind(a,
f));c.init(l)}catch(q){throw c.init(Promise.resolve({})),q;}})};function Ka(a){a=a.element.children;z(1==a.length&&"SCRIPT"==a[0].tagName&&"APPLICATION/JSON"==a[0].getAttribute("type").toUpperCase(),'<amp-experiment> should contain exactly one <script type="application/json"> child.');return JSON.parse(a[0].textContent)}X.prototype.C=function(a,b){var c=[],d;for(d in b){var e=b[d];if(e){var f=a[d].variants[e];c.push(La(this,f))}}return Promise.all(c).then(function(){return b})};
function La(a,b){return a.getAmpDoc().whenBodyAvailable().then(function(){var c=b.mutations.map(function(b){return Da(b,a.win.document)});c.forEach(function(a){return a()})})}function Ja(a){if(ya(a.win))return Promise.resolve(!0);fa(a.getAmpDoc());return I(a.element,"origin-experiments").getExperiments().then(function(a){return a&&a.includes("amp-experiment-1.0")})}(function(a){a.registerServiceForDoc("variant",M);a.registerElement("amp-experiment",X)})(self.AMP);
})});

//# sourceMappingURL=amp-experiment-1.0.js.map
