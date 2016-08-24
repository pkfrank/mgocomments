(function(){var g,aa=aa||{},l=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||l;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||l,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.U?a.U:a.U=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function u(a){return"array"==ca(a)}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function ea(a){return"number"==typeof a}
function ga(a){return"function"==ca(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return w.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Qe=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(oa,Error);oa.prototype.name="CustomError";var pa;var qa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ra(a){return decodeURIComponent(a.replace(/\+/g," "))}
var sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=/\x00/g,ya=/[\x00&<>"']/;function za(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=l.document.createElement("div");return a.replace(Aa,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Ba(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Aa=/&([^;\s<&]+);?/g,Ca={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Da={"'":"\\'"};
function Ea(a,b){for(var c=0,d=qa(String(a)).split("."),e=qa(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",m=e[h]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==k[0].length&&0==m[0].length)break;c=Fa(0==k[1].length?0:parseInt(k[1],10),0==m[1].length?0:parseInt(m[1],10))||Fa(0==k[2].length,0==m[2].length)||Fa(k[2],m[2]);k=k[3];m=m[3]}while(0==c)}return c}
function Fa(a,b){return a<b?-1:a>b?1:0}
function Ga(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ia=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=v(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];
b.call(c,m,k,a)&&(e[f++]=m)}return e},Ja=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Ka=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},La=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Ma(a,b,c){b=Na(a,b,c);return 0>b?null:v(a)?a.charAt(b):a[b]}
function Na(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function A(a,b){return 0<=Ha(a,b)}
function Oa(a,b){A(a,b)||a.push(b)}
function Pa(a,b){var c=Ha(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Qa(a,b){var c=Na(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Sa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ta(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Ua(a,b,c,d){return Array.prototype.splice.apply(a,Va(arguments,1))}
function Va(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Wa(a,b){return a>b?1:a<b?-1:0}
;function Xa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ya(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function Za(a){var b=0,c;for(c in a)b++;return b}
function $a(a,b){return ab(a,b)}
function bb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function cb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function ab(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ib(a){var b=ca(a);if("object"==b||"array"==b){if(ga(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=ib(a[c]);return b}return a}
var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jb.length;f++)c=jb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var lb;a:{var mb=l.navigator;if(mb){var nb=mb.userAgent;if(nb){lb=nb;break a}}lb=""}function B(a){return-1!=lb.indexOf(a)}
;function ob(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function pb(){this.b="";this.f=qb}
pb.prototype.kc=!0;pb.prototype.ic=function(){return this.b};
function rb(a){if(a instanceof pb&&a.constructor===pb&&a.f===qb)return a.b;ca(a);return"type_error:SafeUrl"}
var sb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function tb(a){if(a instanceof pb)return a;a=a.kc?a.ic():String(a);sb.test(a)||(a="about:invalid#zClosurez");return ub(a)}
var qb={};function ub(a){var b=new pb;b.b=a;return b}
ub("about:blank");function vb(){this.b="";this.f=wb}
vb.prototype.kc=!0;vb.prototype.ic=function(){return this.b};
function xb(a){if(a instanceof vb&&a.constructor===vb&&a.f===wb)return a.b;ca(a);return"type_error:SafeHtml"}
var wb={};function yb(a){var b=new vb;b.b=a;return b}
yb("<!DOCTYPE html>");yb("");yb("<br>");function zb(a,b){var c;c=b instanceof pb?b:tb(b);a.href=rb(c)}
;function Ab(a,b,c){a&&(a.dataset?a.dataset[Bb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[Bb(b)]:a.getAttribute("data-"+b):null}
function Cb(a,b){a&&(a.dataset?delete a.dataset[Bb(b)]:a.removeAttribute("data-"+b))}
var Db={};function Bb(a){return Db[a]||(Db[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Eb(a){l.setTimeout(function(){throw a;},0)}
var Fb;
function Gb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.bc;c.bc=null;a()}};
return function(a){d.next={bc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}}
;function Hb(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Hb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Ib(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function Jb(){this.f=this.b=null}
var Lb=new Hb(function(){return new Kb},function(a){a.reset()},100);
Jb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Kb(){this.next=this.scope=this.b=null}
Kb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Kb.prototype.reset=function(){this.next=this.scope=this.b=null};function Mb(a,b){Nb||Ob();Pb||(Nb(),Pb=!0);var c=Qb,d=Lb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Nb;function Ob(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Nb=function(){a.then(Rb)}}else Nb=function(){var a=Rb;
!ga(l.setImmediate)||l.Window&&l.Window.prototype&&!B("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Fb||(Fb=Gb()),Fb(a)):l.setImmediate(a)}}
var Pb=!1,Qb=new Jb;function Rb(){for(var a;a=Qb.remove();){try{a.b.call(a.scope)}catch(b){Eb(b)}Ib(Lb,a)}Pb=!1}
;function D(){this.Ha=this.Ha;this.R=this.R}
D.prototype.Ha=!1;D.prototype.C=function(){return this.Ha};
D.prototype.dispose=function(){this.Ha||(this.Ha=!0,this.w())};
function Sb(a,b){a.Ha?p(void 0)?b.call(void 0):b():(a.R||(a.R=[]),a.R.push(p(void 0)?w(b,void 0):b))}
D.prototype.w=function(){if(this.R)for(;this.R.length;)this.R.shift()()};
function E(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Tb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];da(d)?Tb.apply(null,d):E(d)}}
;function F(a){D.call(this);this.i=1;this.f=[];this.g=0;this.b=[];this.fa={};this.j=!!a}
y(F,D);g=F.prototype;g.subscribe=function(a,b,c){var d=this.fa[a];d||(d=this.fa[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.fa[a]){var d=this.b;if(a=Ma(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.ka(a)}return!1};
g.ka=function(a){var b=this.b[a];if(b){var c=this.fa[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Pa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.u=function(a,b){var c=this.fa[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var h=c[e];Ub(this.b[h+1],this.b[h+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.ka(c)}}return 0!=e}return!1};
function Ub(a,b,c){Mb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.fa[a];b&&(z(b,this.ka,this),delete this.fa[a])}else this.b.length=0,this.fa={}};
g.S=function(a){if(a){var b=this.fa[a];return b?b.length:0}a=0;for(b in this.fa)a+=this.S(b);return a};
g.w=function(){F.B.w.call(this);this.clear();this.f.length=0};var Vb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Vb,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var Wb=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",Wb,void 0);function Xb(a){Yb(Vb,arguments)}
function G(a,b){return a in Vb?Vb[a]:b}
function H(a,b){ga(a)&&(a=Zb(a));return window.setTimeout(a,b)}
function I(a){window.clearTimeout(a)}
function Zb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw $b(b),b;}}:a}
function $b(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=G("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),Xb("ERRORS",c))}
function Yb(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var ac=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},bc="Microsoft Internet Explorer"==navigator.appName;var cc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.ka;F.prototype.publish=F.prototype.u;F.prototype.clear=F.prototype.clear;q("yt.pubsub.instance_",cc,void 0);var dc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",dc,void 0);var ec=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",ec,void 0);var fc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",fc,void 0);
var gc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",gc,void 0);function hc(a,b,c){var d=ic();if(d){var e=d.subscribe(a,function(){if(!gc||gc!=e){var d=arguments,h;h=function(){dc[e]&&b.apply(c||window,d)};
try{fc[a]?h():H(h,0)}catch(k){$b(k)}}},c);
dc[e]=!0;ec[a]||(ec[a]=[]);ec[a].push(e);return e}return 0}
function jc(a){var b=ic();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete dc[a]}))}
function J(a,b){var c=ic();return c?c.publish.apply(c,arguments):!1}
function kc(a,b){fc[a]=!0;var c=ic();c&&c.publish.apply(c,arguments);fc[a]=!1}
function lc(a){ec[a]&&(a=ec[a],z(a,function(a){dc[a]&&delete dc[a]}),a.length=0)}
function mc(a){var b=ic();if(b)if(b.clear(a),a)lc(a);else for(var c in ec)lc(c)}
function ic(){return r("yt.pubsub.instance_")}
;function nc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(oc,""),c=c.replace(pc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else qc(a,b)}
function qc(a,b){var c=rc(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e){b&&b();return}if(b){var e=hc(c,b),h=""+ia(b);sc[h]=e}if(f)return;d=tc(a,c,function(){C(d,"loaded")||(Ab(d,"loaded","true"),J(c),H(na(mc,c),0))})}
function tc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function uc(a,b){if(a&&b){var c=""+ia(b);(c=sc[c])&&jc(c)}}
function rc(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ga(a)}
var oc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,pc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,sc={};var vc=null;function wc(){var a=G("BG_I",null),b=G("BG_IU",null),c=G("BG_P",void 0);b?nc(b,function(){vc=new botguard.bg(c)}):a&&(eval(a),vc=new botguard.bg(c))}
function xc(){return null!=vc}
function yc(){return vc?vc.invoke():null}
;var zc="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function Ac(){}
Ac.prototype.next=function(){throw zc;};
Ac.prototype.oa=function(){return this};
function Bc(a){if(a instanceof Ac)return a;if("function"==typeof a.oa)return a.oa(!1);if(da(a)){var b=0,c=new Ac;c.next=function(){for(;;){if(b>=a.length)throw zc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Cc(a,b,c){if(da(a))try{z(a,b,c)}catch(d){if(d!==zc)throw d;}else{a=Bc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==zc)throw d;}}}
function Dc(a){if(da(a))return Sa(a);a=Bc(a);var b=[];Cc(a,function(a){b.push(a)});
return b}
;function Ec(a,b){this.f={};this.b=[];this.xa=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Ec?(c=a.ma(),d=a.T()):(c=cb(a),d=bb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Ec.prototype;g.S=function(){return this.g};
g.T=function(){Fc(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.ma=function(){Fc(this);return this.b.concat()};
g.Ya=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b];if(Gc(this.f,c)&&this.f[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.S())return!1;var c=b||Hc;Fc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Hc(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.xa=this.g=this.b.length=0};
g.remove=function(a){return Gc(this.f,a)?(delete this.f[a],this.g--,this.xa++,this.b.length>2*this.g&&Fc(this),!0):!1};
function Fc(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Gc(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Gc(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Gc(this.f,a)?this.f[a]:b};
g.set=function(a,b){Gc(this.f,a)||(this.g++,this.b.push(a),this.xa++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.ma(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Ec(this)};
g.oa=function(a){Fc(this);var b=0,c=this.xa,d=this,e=new Ac;e.next=function(){if(c!=d.xa)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw zc;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Gc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Ic(a){return a.S&&"function"==typeof a.S?a.S():da(a)||v(a)?a.length:Za(a)}
function Jc(a){if(a.T&&"function"==typeof a.T)return a.T();if(v(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return bb(a)}
function Kc(a){if(a.ma&&"function"==typeof a.ma)return a.ma();if(!a.T||"function"!=typeof a.T){if(da(a)||v(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return cb(a)}}
function Lc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(da(a)||v(a))z(a,b,c);else for(var d=Kc(a),e=Jc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function Mc(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(da(a)||v(a))return La(a,b,void 0);for(var c=Kc(a),d=Jc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function Nc(a){this.b=new Ec;a&&Oc(this,a)}
function Qc(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ia(a):b.substr(0,1)+a}
g=Nc.prototype;g.S=function(){return this.b.S()};
function Oc(a,b){for(var c=Jc(b),d=c.length,e=0;e<d;e++){var f=c[e];a.b.set(Qc(f),f)}}
g.remove=function(a){return this.b.remove(Qc(a))};
g.clear=function(){this.b.clear()};
g.isEmpty=function(){return this.b.isEmpty()};
g.contains=function(a){a=Qc(a);return Gc(this.b.f,a)};
g.T=function(){return this.b.T()};
g.clone=function(){return new Nc(this)};
g.equals=function(a){return this.S()==Ic(a)&&Rc(this,a)};
function Rc(a,b){var c=Ic(b);if(a.S()>c)return!1;!(b instanceof Nc)&&5<c&&(b=new Nc(b));return Mc(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.Ya&&"function"==typeof c.Ya?c.Ya(a):da(c)||v(c)?A(c,a):ab(c,a)})}
g.oa=function(){return this.b.oa(!1)};function Sc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function Tc(a){Tc[" "](a);return a}
Tc[" "]=t;function Uc(a,b){var c=Vc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Wc=B("Opera"),K=B("Trident")||B("MSIE"),Xc=B("Edge"),Yc=B("Gecko")&&!(-1!=lb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Zc=-1!=lb.toLowerCase().indexOf("webkit")&&!B("Edge"),$c=B("Windows");function ad(){var a=l.document;return a?a.documentMode:void 0}
var bd;a:{var cd="",dd=function(){var a=lb;if(Yc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Xc)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Zc)return/WebKit\/(\S+)/.exec(a);if(Wc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
dd&&(cd=dd?dd[1]:"");if(K){var ed=ad();if(null!=ed&&ed>parseFloat(cd)){bd=String(ed);break a}}bd=cd}var fd=bd,Vc={};function gd(a){return Uc(a,function(){return 0<=Ea(fd,a)})}
function hd(a){return Number(id)>=a}
var jd=l.document,id=jd&&K?ad()||("CSS1Compat"==jd.compatMode?parseInt(fd,10):5):void 0;function kd(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function ld(a){return eval("("+a+")")}
function L(a){return md(new nd(void 0),a)}
function nd(a){this.b=a}
function md(a,b){var c=[];od(a,b,c);return c.join("")}
function od(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(u(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],od(a,a.b?a.b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),pd(d,c),c.push(":"),od(a,a.b?a.b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":pd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var qd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},rd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function pd(a,b){b.push('"',a.replace(rd,function(a){var b=qd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),qd[a]=b);return b}),'"')}
;function sd(a){return G("EXPERIMENT_FLAGS",{})[a]}
;var td=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ud(a){return a?decodeURI(a):a}
function vd(a,b){return b.match(td)[a]||null}
function wd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?ra(h):"")}}
function xd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function yd(a,b,c){if(u(b))for(var d=0;d<b.length;d++)yd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function zd(a,b,c){for(c=c||0;c<b.length;c+=2)yd(b[c],b[c+1],a);return a}
function Ad(a,b){for(var c in b)yd(c,b[c],a);return a}
function Bd(a){a=Ad([],a);a[0]="";return a.join("")}
function Cd(a,b){return xd(2==arguments.length?zd([a],arguments[1],0):zd([a],arguments,1))}
function Dd(a,b){return xd(Ad([a],b))}
;function Ed(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ra(e[0]||""),e=ra(e[1]||"");f in b?u(b[f])?Ta(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Fd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Ed(d[1]||""),e;for(e in b)d[e]=b[e];return Dd(a,d)+c}
;var Gd=null;"undefined"!=typeof XMLHttpRequest?Gd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Gd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Hd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Id(a,b,c,d,e,f,h){function k(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Zb(b)(m)}
var m=Gd&&Gd();if(!("open"in m))return null;"onloadend"in m?m.addEventListener("loadend",k,!1):m.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);f="POST"==c;if(e=Jd(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m}
function Jd(a,b){b=b||{};var c;c||(c=window.location.href);var d=vd(1,a),e=ud(vd(3,a));d&&e?(d=c,c=a.match(td),d=d.match(td),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ud(vd(3,c))==e&&(Number(vd(4,c))||null)==(Number(vd(4,a))||null):!0;for(var f in Kd){if((e=d=G(Kd[f]))&&!(e=c)){var e=f,h=G("CORS_HEADER_WHITELIST")||{},k=ud(vd(3,a));e=k?(h=h[k])?A(h,e):!1:!0}e&&(b[f]=d)}return b}
function Ld(a,b){var c=G("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Se&&(!ud(vd(3,a))||b.withCredentials||ud(vd(3,a))==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.V&&b.V[c])}
function Md(a,b){var c=b.format||"JSON";b.Te&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=G("XSRF_FIELD_NAME",void 0),e=G("XSRF_TOKEN",void 0),f=b.Sb;f&&(f[d]&&delete f[d],a=Fd(a,f||{}));var h=b.postBody||"",f=b.V;Ld(a,b)&&(f||(f={}),f[d]=e);f&&v(h)&&(d=Ed(h),kb(d,f),h=b.be&&"JSON"==b.be?JSON.stringify(d):Bd(d));var k=!1,m,n=Id(a,function(a){if(!k){k=!0;m&&I(m);var d=Hd(a),e=null;if(d||400<=a.status&&500>a.status)e=
Nd(c,a,b.Re);if(d)a:if(sd("ajax_204_success")&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||l;d?b.ea&&b.ea.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ob&&b.Ob.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.Fa&&0<b.timeout&&(m=H(function(){k||(k=!0,n.abort(),I(m),b.Fa.call(b.context||l,n))},b.timeout));
return n}
function Nd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=ld(a));break;case "XML":if(b=(b=b.responseXML)?Od(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=Pd(a)})}c&&Qd(d);
return d}
function Qd(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=yb(a[b]);a[c]=d}else Qd(a[b])}}
function Od(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Pd(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Kd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Rd={},Sd=0;function Td(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):H(a,b||0)}
;var Ud=[],Vd=!1;function Wd(){function a(){Vd=!0;"google_ad_status"in window?Xb("DCLKSTAT",1):Xb("DCLKSTAT",2)}
nc("//static.doubleclick.net/instream/ad_status.js",a);Ud.push(Td(function(){Vd||"google_ad_status"in window||(uc("//static.doubleclick.net/instream/ad_status.js",a),Xb("DCLKSTAT",3))},5E3))}
function Xd(){return parseInt(G("DCLKSTAT",0),10)}
;function Yd(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function Zd(a,b){return a.classList?a.classList.contains(b):A(Yd(a),b)}
function $d(a,b){a.classList?a.classList.add(b):Zd(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ae(a,b){a.classList?a.classList.remove(b):Zd(a,b)&&(a.className=Ia(Yd(a),function(a){return a!=b}).join(" "))}
function be(a,b,c){c?$d(a,b):ae(a,b)}
;function ce(a,b){this.H=p(a)?a:0;this.I=p(b)?b:0}
ce.prototype.clone=function(){return new ce(this.H,this.I)};
ce.prototype.ceil=function(){this.H=Math.ceil(this.H);this.I=Math.ceil(this.I);return this};
ce.prototype.floor=function(){this.H=Math.floor(this.H);this.I=Math.floor(this.I);return this};
ce.prototype.round=function(){this.H=Math.round(this.H);this.I=Math.round(this.I);return this};function de(a,b){this.width=a;this.height=b}
g=de.prototype;g.clone=function(){return new de(this.width,this.height)};
g.ad=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.ad()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!Yc&&!K||K&&hd(9)||Yc&&gd("1.9.1");var ee=K&&!gd("9");function fe(a){return a?new ge(he(a)):pa||(pa=new ge)}
function ie(a){var b=document;return v(a)?b.getElementById(a):a}
function je(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):ke(a)}
function ke(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var h=b.className;"function"==typeof h.split&&A(h.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function le(a){var b=a.scrollingElement?a.scrollingElement:!Zc&&me(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&gd("10")&&a.pageYOffset!=b.scrollTop?new ce(b.scrollLeft,b.scrollTop):new ce(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function me(a){return"CSS1Compat"==a.compatMode}
function ne(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function oe(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function pe(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function he(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function qe(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else ne(a),a.appendChild(he(a).createTextNode(String(b)))}
var re={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},se={IMG:" ",BR:"\n"};function te(a){if(ee&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ue(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");ee||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ue(a,b,c){if(!(a.nodeName in re))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in se)b.push(se[a.nodeName]);else for(a=a.firstChild;a;)ue(a,b,c),a=a.nextSibling}
function ve(a){var b=we.Rc;return b?xe(a,function(a){return!b||v(a.className)&&A(a.className.split(/\s+/),b)},!0,void 0):null}
function xe(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ge(a){this.b=a||l.document||document}
g=ge.prototype;g.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(a)};
g.createElement=function(a){return this.b.createElement(String(a))};
g.appendChild=function(a,b){a.appendChild(b)};
g.isElement=function(a){return ha(a)&&1==a.nodeType};
g.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var ye=r("yt.dom.getNextId_");if(!ye){ye=function(){return++ze};
q("yt.dom.getNextId_",ye,void 0);var ze=0}function Ae(){var a=document,b;Ka(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function Be(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ce||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Be.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Be.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Be.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Ce={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var eb=r("yt.events.listeners_")||{};q("yt.events.listeners_",eb,void 0);var De=r("yt.events.counter_")||{count:0};q("yt.events.counter_",De,void 0);function Ee(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Ee(a,b,c,d);if(e)return e;var e=++De.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Be(d);if(!xe(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Be(b);
b.currentTarget=a;return c.call(a,b)};
h=Zb(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);eb[e]=[a,b,c,h,d];return e}
function Fe(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in eb){var c=eb[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[a]}}))}
;function Ge(){if(null==r("_lact",window)){var a=parseInt(G("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&He();M(document,"keydown",He);M(document,"keyup",He);M(document,"mousedown",He);M(document,"mouseup",He);hc("page-mouse",He);hc("page-scroll",He);hc("page-resize",He)}}
function He(){null==r("_lact",window)&&(Ge(),r("_lact",window));var a=x();q("_lact",a,window);J("USER_ACTIVE")}
function Ie(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function Je(){}
;var Ke={};function Le(a){this.b=a||{cookie:""}}
var Me=/\s*;\s*/;g=Le.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Me),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.ma=function(){return Ne(this).keys};
g.T=function(){return Ne(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.S=function(){return this.b.cookie?(this.b.cookie||"").split(Me).length:0};
g.Ya=function(a){for(var b=Ne(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Ne(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ne(a){a=(a.b.cookie||"").split(Me);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Oe=new Le("undefined"==typeof document?null:document);Oe.f=3950;function Pe(a,b,c){Oe.set(""+a,b,c,"/","youtube.com")}
;function Qe(a,b,c){var d=G("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=G("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=ud(vd(3,window.location.href));e&&d.push(e);e=ud(vd(3,a));if(A(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(td),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))d="ST-"+Ga(d).toString(36),e=b?Bd(b):"",Pe(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),b&&d&&d(new Je))}}if(c)return!1;
(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Dd(a,{})+"",a=a instanceof pb?a:tb(a),c.href=rb(a));return!0}
;function Re(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||hb(Se);this.assets=a.assets||{};this.attrs=a.attrs||hb(Te);this.params=a.params||hb(Ue);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Se={enablejsapi:1},Te={},Ue={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Ve(a){a instanceof Re||(a=new Re(a));return a}
Re.prototype.clone=function(){var a=new Re,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ca(c)?a[b]=hb(c):a[b]=c}return a};function We(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=We.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new We(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof We?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.H>=this.left&&a.H<=this.right&&a.I>=this.top&&a.I<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Xe(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=Xe.prototype;g.clone=function(){return new Xe(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof ce?a.H>=this.left&&a.H<=this.left+this.width&&a.I>=this.top&&a.I<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ye(a,b){var c=he(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Ze(a,b){return Ye(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function $e(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function af(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function bf(a){var b=cf;if("none"!=Ze(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function cf(a){var b=a.offsetWidth,c=a.offsetHeight,d=Zc&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new de(b,c):(a=$e(a),new de(a.right-a.left,a.bottom-a.top))}
function df(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function ef(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?df(a,c):0}
var ff={thin:2,medium:4,thick:6};function gf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ff?ff[c]:df(a,c)}
;var hf=B("Firefox"),jf=Sc()||B("iPod"),kf=B("iPad"),lf=B("Android")&&!(ob()||B("Firefox")||B("Opera")||B("Silk")),mf=ob(),nf=B("Safari")&&!(ob()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(Sc()||B("iPad")||B("iPod"));function of(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var h,k,m,n;if(bc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(fa){h=null}else m=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=m.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(fa){k=""}m&&n&&m.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.b=h[0];this.f=h[1];this.g=h[2]}}
ba(of);function pf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function qf(a){if(window.spf){var b=a.match(rf);spf.style.load(a,b?b[1]:"",void 0)}else sf(a)}
function sf(a){var b=tf(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=uf(a,b,function(){C(c,"loaded")||(Ab(c,"loaded","true"),J(b),H(na(mc,b),0))}))}
function uf(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function tf(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ga(a)}
var rf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var vf;var wf=lb,wf=wf.toLowerCase();if(-1!=wf.indexOf("android")){var xf=wf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(xf)vf=Number(xf[1]);else{var yf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},zf=wf.match("("+cb(yf).join("|")+")");vf=zf?yf[zf[0]]:0}}else vf=void 0;var Af=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Bf=['audio/mp4; codecs="mp4a.40.2"'];function Cf(a){D.call(this);this.b=[];this.f=a||this}
y(Cf,D);function Df(a,b,c,d){d=Zb(w(d,a.f));b.addEventListener(c,d);a.b.push({target:b,name:c,Cb:d})}
Cf.prototype.wb=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b]==a){this.b.splice(b,1);a.target.removeEventListener(a.name,a.Cb);break}};
function Ef(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.Cb)}}
Cf.prototype.w=function(){Ef(this);Cf.B.w.call(this)};function Ff(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Gf(a,b){this.b=0;this.l=void 0;this.i=this.f=this.g=null;this.j=this.o=!1;if(a!=t)try{var c=this;a.call(b,function(a){Hf(c,2,a)},function(a){Hf(c,3,a)})}catch(d){Hf(this,3,d)}}
function If(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
If.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Jf=new Hb(function(){return new If},function(a){a.reset()},100);
function Kf(a,b,c){var d=Jf.get();d.g=a;d.f=b;d.context=c;return d}
function Lf(a){if(a instanceof Gf)return a;var b=new Gf(t);Hf(b,2,a);return b}
function Mf(a){return new Gf(function(b,c){c(a)})}
Gf.prototype.then=function(a,b,c){return Nf(this,ga(a)?a:null,ga(b)?b:null,c)};
Ff(Gf);Gf.prototype.cancel=function(a){0==this.b&&Mb(function(){var b=new Of(a);Pf(this,b)},this)};
function Pf(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,h=c.f;h&&(h.i||(d++,h.b==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.b&&1==d?Pf(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Qf(c),Rf(c,e,3,b)))}a.g=null}else Hf(a,3,b)}
function Sf(a,b){a.f||2!=a.b&&3!=a.b||Tf(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Nf(a,b,c,d){var e=Kf(null,null,null);e.b=new Gf(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Of?h(b):a(e)}catch(n){h(n)}}:h});
e.b.g=a;Sf(a,e);return e.b}
Gf.prototype.R=function(a){this.b=0;Hf(this,2,a)};
Gf.prototype.F=function(a){this.b=0;Hf(this,3,a)};
function Hf(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.R,h=a.F;if(e instanceof Gf)Sf(e,Kf(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ha(e))try{var m=e.then;if(ga(m)){Uf(e,m,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.l=c,a.b=b,a.g=null,Tf(a),3!=b||c instanceof Of||Vf(a,c))}}
function Uf(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(m){f(m)}}
function Tf(a){a.o||(a.o=!0,Mb(a.A,a))}
function Qf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Gf.prototype.A=function(){for(var a;a=Qf(this);)Rf(this,a,this.b,this.l);this.o=!1};
function Rf(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Wf(b,c,d);else try{b.i?b.g.call(b.context):Wf(b,c,d)}catch(e){Xf.call(null,e)}Ib(Jf,b)}
function Wf(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Vf(a,b){a.j=!0;Mb(function(){a.j&&Xf.call(null,b)})}
var Xf=Eb;function Of(a){oa.call(this,a)}
y(Of,oa);Of.prototype.name="cancel";function Yf(){this.b={apiaryHost:G("APIARY_HOST",void 0),Zc:G("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:G("GAPI_HINT_OVERRIDE"),gapiHintParams:G("GAPI_HINT_PARAMS",void 0),innertubeApiKey:G("INNERTUBE_API_KEY",void 0),innertubeApiVersion:G("INNERTUBE_API_VERSION",void 0),rd:G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),td:G("INNERTUBE_CONTEXT_HL",void 0),sd:G("INNERTUBE_CONTEXT_GL",void 0),Ve:G("XHR_APIARY_HOST",void 0)};
Zf||(Zf=$f(this.b))}
var Zf=null;function $f(a){return(new Gf(function(b){nc(G("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){$b(c)}})})).then(function(){})}
Yf.prototype.f=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Zc;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",G("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
function ag(a,b,c){var d={},e,f=!1;0<d.timeout&&(e=H(function(){f||(f=!0,d.Fa&&d.Fa())},d.timeout));
bg(a,b,c,function(a){if(!f)if(f=!0,e&&I(e),a)d.ea&&d.ea(a);else if(d.onError)d.onError()})}
function bg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":G("VISITOR_DATA")},method:"POST",body:L(c)},f=w(a.f,a);Zf.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;var cg={log_event:"events",log_interaction:"interactions"},dg={},eg={},fg=0,gg=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",gg,void 0);
function hg(){I(fg);if(!fb(gg)){for(var a in gg){var b=dg[a];if(!b){b=eg[a];if(!b)continue;b=new b;dg[a]=b}var c=b.b,c={client:{hl:c.td,gl:c.sd,clientName:c.rd,clientVersion:c.innertubeContextClientVersion}};G("DELEGATED_SESSION_ID")&&(c.user={onBehalfOfUser:G("DELEGATED_SESSION_ID")});c={context:c};c.requestTimeMs=Math.round(ac());c[cg[a]]=gg[a];ag(b,a,c);delete gg[a]}fb(gg)||ig()}}
function ig(){I(fg);fg=H(hg,G("LOGGING_BATCH_TIMEOUT",1E4))}
;function jg(a,b,c){var d={};d.eventTimeMs=Math.round(c||ac());d[a]=b;gg.log_event=gg.log_event||[];a=gg.log_event;a.push(d);eg.log_event=Yf;20<=a.length?hg():ig()}
;function kg(){}
;function lg(){}
y(lg,kg);lg.prototype.S=function(){var a=0;Cc(this.oa(!0),function(){a++});
return a};
lg.prototype.clear=function(){var a=Dc(this.oa(!0)),b=this;z(a,function(a){b.remove(a)})};function mg(a){this.b=a}
y(mg,lg);g=mg.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.S=function(){return this.b.length};
g.oa=function(a){var b=0,c=this.b,d=new Ac;d.next=function(){if(b>=c.length)throw zc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function ng(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(ng,mg);function og(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(og,mg);function pg(a){this.b=a}
pg.prototype.set=function(a,b){p(b)?this.b.set(a,L(b)):this.b.remove(a)};
pg.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return kd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
pg.prototype.remove=function(a){this.b.remove(a)};function qg(a){this.b=a}
y(qg,pg);function rg(a){this.data=a}
function sg(a){return!p(a)||a instanceof rg?a:new rg(a)}
qg.prototype.set=function(a,b){qg.B.set.call(this,a,sg(b))};
qg.prototype.f=function(a){a=qg.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qg.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function tg(a){this.b=a}
y(tg,qg);function ug(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
tg.prototype.set=function(a,b,c){if(b=sg(b)){if(c){if(c<x()){tg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}tg.B.set.call(this,a,b)};
tg.prototype.f=function(a,b){var c=tg.B.f.call(this,a);if(c)if(!b&&ug(c))tg.prototype.remove.call(this,a);else return c};function vg(a){this.b=a}
y(vg,tg);function wg(a,b){var c=[];Cc(b,function(a){var b;try{b=vg.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?ug(b)&&c.push(a):c.push(a)},a);
return c}
function xg(a,b){var c=wg(a,b);z(c,function(a){vg.prototype.remove.call(this,a)},a)}
function yg(){var a=zg;xg(a,a.b.oa(!0))}
;function N(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?zg:Ag)&&window.JSON){v(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function O(a){if(!Ag&&!zg||!window.JSON)return null;var b;try{b=Ag.get(a)}catch(c){}if(!v(b))try{b=zg.get(a)}catch(c){}if(!v(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function Bg(a){Ag&&Ag.remove(a);zg&&zg.remove(a)}
var zg,Cg=new ng;zg=Cg.isAvailable()?new vg(Cg):null;var Ag,Dg=new og;Ag=Dg.isAvailable()?new vg(Dg):null;function Eg(a,b){this.f=this.A=this.i="";this.l=null;this.j=this.b="";this.o=!1;var c;a instanceof Eg?(this.o=p(b)?b:a.o,Fg(this,a.i),this.A=a.A,Gg(this,a.f),Hg(this,a.l),this.b=a.b,Ig(this,a.g.clone()),this.j=a.j):a&&(c=String(a).match(td))?(this.o=!!b,Fg(this,c[1]||"",!0),this.A=Jg(c[2]||""),Gg(this,c[3]||"",!0),Hg(this,c[4]),this.b=Jg(c[5]||"",!0),Ig(this,c[6]||"",!0),this.j=Jg(c[7]||"")):(this.o=!!b,this.g=new Kg(null,0,this.o))}
Eg.prototype.toString=function(){var a=[],b=this.i;b&&a.push(Lg(b,Mg,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.A)&&a.push(Lg(b,Mg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(Lg(c,"/"==c.charAt(0)?Ng:Og,!0));(c=this.g.toString())&&a.push("?",c);(c=this.j)&&a.push("#",Lg(c,Pg));return a.join("")};
Eg.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?Fg(b,a.i):c=!!a.A;c?b.A=a.A:c=!!a.f;c?Gg(b,a.f):c=null!=a.l;var d=a.b;if(c)Hg(b,a.l);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.f&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?Ig(b,Jg(a.g.toString())):c=!!a.j;c&&(b.j=a.j);return b};
Eg.prototype.clone=function(){return new Eg(this)};
function Fg(a,b,c){a.i=c?Jg(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function Gg(a,b,c){a.f=c?Jg(b,!0):b}
function Hg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}
function Ig(a,b,c){b instanceof Kg?(a.g=b,Qg(a.g,a.o)):(c||(b=Lg(b,Rg)),a.g=new Kg(b,0,a.o))}
function P(a,b,c){a.g.set(b,c)}
function Sg(a,b,c){u(c)||(c=[String(c)]);Tg(a.g,b,c)}
function Ug(a){P(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Vg(a){return a instanceof Eg?a.clone():new Eg(a,void 0)}
function Wg(a,b,c,d){var e=new Eg(null,void 0);a&&Fg(e,a);b&&Gg(e,b);c&&Hg(e,c);d&&(e.b=d);return e}
function Jg(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Lg(a,b,c){return v(a)?(a=encodeURI(a).replace(b,Xg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Xg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Mg=/[#\/\?@]/g,Og=/[\#\?:]/g,Ng=/[\#\?]/g,Rg=/[\#\?@]/g,Pg=/#/g;function Kg(a,b,c){this.f=this.b=null;this.g=a||null;this.i=!!c}
function Yg(a){a.b||(a.b=new Ec,a.f=0,a.g&&wd(a.g,function(b,c){Zg(a,ra(b),c)}))}
g=Kg.prototype;g.S=function(){Yg(this);return this.f};
function Zg(a,b,c){Yg(a);a.g=null;b=$g(a,b);var d=a.b.get(b);d||a.b.set(b,d=[]);d.push(c);a.f=a.f+1}
g.remove=function(a){Yg(this);a=$g(this,a);return Gc(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){Yg(this);return 0==this.f};
function ah(a,b){Yg(a);b=$g(a,b);return Gc(a.b.f,b)}
g.Ya=function(a){var b=this.T();return A(b,a)};
g.ma=function(){Yg(this);for(var a=this.b.T(),b=this.b.ma(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.T=function(a){Yg(this);var b=[];if(v(a))ah(this,a)&&(b=Ra(b,this.b.get($g(this,a))));else{a=this.b.T();for(var c=0;c<a.length;c++)b=Ra(b,a[c])}return b};
g.set=function(a,b){Yg(this);this.g=null;a=$g(this,a);ah(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){var c=a?this.T(a):[];return 0<c.length?String(c[0]):b};
function Tg(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set($g(a,b),Sa(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.ma(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.T(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.g=a.join("&")};
g.clone=function(){var a=new Kg;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function $g(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function Qg(a,b){b&&!a.i&&(Yg(a),a.g=null,a.b.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Tg(this,e,a))},a));
a.i=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Lc(arguments[b],function(a,b){Zg(this,b,a)},this)};var bh="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),ch="";
function dh(a){return a&&a==ch?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+bh.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(ch=a,!0):!1}
;var eh={},fh=0;function gh(a){var b=new Image,c=""+fh++;eh[c]=b;b.onload=b.onerror=function(){delete eh[c]};
b.src=a}
;function Q(a,b){this.version=a;this.args=b}
function hh(a){if(!a.xa){var b={};a.call(b);a.xa=b.version}return a.xa}
function ih(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=hh(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function R(a,b){this.topic=a;this.b=b}
R.prototype.toString=function(){return this.topic};var jh=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.ka;F.prototype.publish=F.prototype.u;F.prototype.clear=F.prototype.clear;q("yt.pubsub2.instance_",jh,void 0);var kh=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",kh,void 0);var lh=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",lh,void 0);var mh=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",mh,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function S(a,b){var c=nh();c&&c.publish.call(c,a.toString(),a,b)}
function oh(a,b,c){var d=nh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(kh[e])try{if(h&&a instanceof R&&a!=d)try{h=ih(a.b,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){$b(k)}};
mh[a.toString()]?r("yt.scheduler.instance")?Td(k,void 0):H(k,0):k()}});
kh[e]=!0;lh[a.toString()]||(lh[a.toString()]=[]);lh[a.toString()].push(e);return e}
function ph(a){var b=nh();b&&(ea(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete kh[a]}))}
function nh(){return r("yt.pubsub2.instance_")}
;var qh=x().toString();var rh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function sh(a){Q.call(this,1,arguments)}
y(sh,Q);var th=new R("timing-sent",sh);var uh={vc:!0},vh=/^mark_/i,wh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},xh=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],yh=w(rh.clearResourceTimings||rh.webkitClearResourceTimings||rh.mozClearResourceTimings||rh.msClearResourceTimings||rh.oClearResourceTimings||t,rh);
function zh(a){if("_"!=a[0]){var b=a;rh.mark&&(vh.test(b)||(b="mark_"+b),rh.mark(b))}var b=Ah(),c=ac();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;Bh()["tick_"+a]=void 0;sd("csi_on_gel")?(b=Ch(),"_start"==a?jg("latencyActionBaselined",{clientActionNonce:b},void 0):jg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!sd("navigation_only_csi_reset"));if(!a&&(b=G("TIMING_ACTION",void 0),a=Ah(),r("yt.timing.ready_")&&b&&a._start&&
Dh())){b=!0;c=G("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Eh()}}
function Fh(){var a=Gh().info.yt_lt="hot_bg";Bh().info_yt_lt=a;if(sd("csi_on_gel"))if("yt_lt"in wh){var b={},c=wh.yt_lt;A(xh,c)&&(a=!!a);b[c]=a;a=Ch();b.clientActionNonce=a;jg("latencyActionInfo",b)}else $b(Error("Unknown label yt_lt logged with GEL CSI."))}
function Dh(){var a=Ah();if(a.aft)return a.aft;for(var b=G("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Eh(){var a=Ah(),b=Gh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&u(a[d])){var e=d.slice(1);if(e in uh){var f=Ja(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Hh(f,e),Ih(),yh(),Jh(!1,void 0)}else{var h=G("CSI_SERVICE_NAME","youtube"),f={v:2,s:h,action:G("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=rh.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var m=window.location.protocol+r("ytplayer.config.assets.js");(m=rh.getEntriesByName?rh.getEntriesByName(m)[0]:
null)?b.h5jse=Math.round(b.h5jse-m.responseEnd):delete b.h5jse}a.aft=Dh();Kh()&&"youtube"==h&&(Fh(),h=a.vc,m=a.pbs,delete a.aft,b.aft=Math.round(m-h));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=ac();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(h=Math.round(a[d]-c),b[d]=h,n.push(d+"."+h));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);sd("navigation_only_csi_reset")||(Ih(),yh(),Jh(!1,void 0));Hh(f,e,void 0);S(th,new sh(b.aft+(k||0)))}}
function Hh(a,b,c){if(sd("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&gh(a)}catch(f){a&&gh(a)}else a&&gh(a);Jh(!0,c)}
function Ch(){var a=Gh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(qh)for(c=1,d=0;d<qh.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^qh.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Gh().nonce=a}return a}
function Ah(){return Gh().tick}
function Bh(){var a=Gh();"gel"in a||(a.gel={});return a.gel}
function Gh(){return r("ytcsi.data_")||Ih()}
function Ih(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Jh(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Kh(){var a=Ah(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Gh().info.yt_pvis}
;var Lh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Mh(a,b){D.call(this);this.o=this.j=a;this.Y=b;this.A=!1;this.f={};this.Ia=this.X=null;this.ba=new F;Sb(this,na(E,this.ba));this.i={};this.F=this.Ja=this.g=this.Wa=this.b=null;this.la=!1;this.G=this.l=this.N=this.O=null;this.Ka={};this.Xc=["onReady"];this.na=new Cf(this);Sb(this,na(E,this.na));this.Bb=null;this.Yb=NaN;this.sa={};Nh(this);this.pa("onDetailedError",w(this.Hd,this));this.pa("onTabOrderChange",w(this.bd,this));this.pa("onTabAnnounce",w(this.Zb,this));this.pa("WATCH_LATER_VIDEO_ADDED",
w(this.Id,this));this.pa("WATCH_LATER_VIDEO_REMOVED",w(this.Jd,this));hf||(this.pa("onMouseWheelCapture",w(this.Ed,this)),this.pa("onMouseWheelRelease",w(this.Fd,this)));this.pa("onAdAnnounce",w(this.Zb,this));this.K=new Cf(this);Sb(this,na(E,this.K));this.Va=!1;this.Ua=null}
y(Mh,D);var Oh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=Mh.prototype;g.Ub=function(a,b){this.C()||(Ph(this,a),Qh(this,b),this.A&&Rh(this))};
function Ph(a,b){a.Wa=b;a.b=b.clone();a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.Y,a.b.attrs.id=a.Y);a.o.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.Y;a.Ja||(a.Ja=Sh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.o.style.width=af(Number(c)||c,!0));if(c=a.b.attrs.height)a.o.style.height=af(Number(c)||c,!0)}
g.jd=function(){return this.Wa};
function Rh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Th(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=pf(of.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Uh(a,b){if((!b||(5!=(Lh[b.errorCode]||5)?0:-1!=Oh.indexOf(b.errorCode)))&&Th(a)){var c=Vh(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Ve(c));d.args.autoplay=1;d.args.html5_unavailable="1";Ph(a,d);Qh(a,"flash")}}
function Qh(a,b){if(!a.C()){if(!b){var c;if(!(c=!a.b.html5&&Th(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==vf)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Af:Bf,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=Wh(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Th(a)?"flash":"unsupported":"html5"}("flash"==b?a.re:a.se).call(a)}}
function Wh(a){var b=!0,c=Vh(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.se=function(){if(!this.la){var a=Wh(this);a&&"html5"==Xh(this)?(this.F="html5",this.A||this.Pa()):(Yh(this),this.F="html5",a&&this.N?(this.j.appendChild(this.N),this.Pa()):(this.b.loaded=!0,this.O=w(function(){var a=this.j,c=this.b.clone();r("yt.player.Application.create")(a,c);this.Pa()},this),this.la=!0,a?this.O():(nc(this.b.assets.js,this.O),qf(this.b.assets.css))))}};
g.re=function(){var a=this.b.clone();if(!this.l){var b=Vh(this);b&&(this.l=document.createElement("span"),this.l.tabIndex=0,Df(this.na,this.l,"focus",this.nc),this.G=document.createElement("span"),this.G.tabIndex=0,Df(this.na,this.G,"focus",this.nc),b.parentNode&&b.parentNode.insertBefore(this.l,b),b.parentNode&&b.parentNode.insertBefore(this.G,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Xh(this))this.F="flash",this.A||this.Pa();else{Yh(this);
this.F="flash";this.b.loaded=!0;var b=of.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!pf(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;if(c){var b=v(b)?ie(b):b,d=hb(a.attrs);d.tabindex=0;var e=hb(a.params);e.flashvars=Bd(a.args);if(bc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=
document.createElement("object"),f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.Pa()}};
g.nc=function(){Vh(this).focus()};
function Vh(a){var b=ie(a.g);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.g));return b}
g.Pa=function(){if(!this.C()){var a=Vh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.la=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Uh(this);else{Nh(this);this.A=!0;a=Vh(this);a.addEventListener&&(this.X=Zh(this,a,"addEventListener"));a.removeEventListener&&(this.Ia=Zh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Zh(this,a,d))}for(var e in this.i)this.X(e,
this.i[e]);Rh(this);this.Ja&&this.Ja(this.f);this.ba.u("onReady",this.f)}else this.Yb=H(w(this.Pa,this),50)}};
function Zh(a,b,c){var d=b[c];return function(){try{return a.Bb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Bb=e,$b(e,"WARNING"))}}}
function Nh(a){a.A=!1;if(a.Ia)for(var b in a.i)a.Ia(b,a.i[b]);for(var c in a.sa)I(parseInt(c,10));a.sa={};a.X=null;a.Ia=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=w(a.pa,a);a.f.removeEventListener=w(a.ee,a);a.f.destroy=w(a.dispose,a);a.f.getLastError=w(a.kd,a);a.f.getPlayerType=w(a.ld,a);a.f.getCurrentVideoConfig=w(a.jd,a);a.f.loadNewVideoConfig=w(a.Ub,a);a.f.isReady=w(a.De,a)}
g.De=function(){return this.A};
g.pa=function(a,b){if(!this.C()){var c=Sh(this,b);if(c){if(!A(this.Xc,a)&&!this.i[a]){var d=$h(this,a);this.X&&this.X(a,d)}this.ba.subscribe(a,c);"onReady"==a&&this.A&&H(na(c,this.f),0)}}};
g.ee=function(a,b){if(!this.C()){var c=Sh(this,b);c&&this.ba.unsubscribe(a,c)}};
function Sh(a,b){var c=b;if("string"==typeof b){if(a.Ka[b])return a.Ka[b];c=function(){var a=r(b);a&&a.apply(l,arguments)};
a.Ka[b]=c}return c?c:null}
function $h(a,b){var c="ytPlayer"+b+a.Y;a.i[b]=c;l[c]=function(c){var e=H(function(){if(!a.C()){a.ba.u(b,c);var f=a.sa,h=String(e);h in f&&delete f[h]}},0);
gb(a.sa,String(e))};
return c}
g.bd=function(a){a=a?pe:oe;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.l||b==this.G||(b.focus(),b!=document.activeElement));)b=a(b)};
g.Zb=function(a){J("a11y-announce",a)};
g.Hd=function(a){Uh(this,a)};
g.Id=function(a){J("WATCH_LATER_VIDEO_ADDED",a)};
g.Jd=function(a){J("WATCH_LATER_VIDEO_REMOVED",a)};
g.Ed=function(){this.Va||(mf?(this.Ua=le(document),Df(this.K,window,"scroll",this.Zd),Df(this.K,this.j,"touchmove",this.Td)):(Df(this.K,this.j,"mousewheel",this.qc),Df(this.K,this.j,"wheel",this.qc)),this.Va=!0)};
g.Fd=function(){Ef(this.K);this.Va=!1};
g.qc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Zd=function(){window.scrollTo(this.Ua.H,this.Ua.I)};
g.Td=function(a){a.preventDefault()};
g.ld=function(){return this.F||Xh(this)};
g.kd=function(){return this.Bb};
function Xh(a){return(a=Vh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Yh(a){zh("dcp");a.cancel();Nh(a);a.F=null;a.b&&(a.b.loaded=!1);var b=Vh(a);"html5"==Xh(a)?a.N=b:b&&b.destroy&&b.destroy();ne(a.j);Ef(a.na);a.l=null;a.G=null}
g.cancel=function(){this.O&&uc(this.b.assets.js,this.O);I(this.Yb);this.la=!1};
g.w=function(){Yh(this);if(this.N&&this.b)try{this.N.destroy()}catch(b){$b(b)}this.Ka=null;for(var a in this.i)l[this.i[a]]=null;this.Wa=this.b=this.f=null;delete this.j;delete this.o;Mh.B.w.call(this)};var ai={},bi="player_uid_"+(1E9*Math.random()>>>0);function ci(a,b){a=v(a)?ie(a):a;b=Ve(b);var c=bi+"_"+ia(a),d=ai[c];if(d)return d.Ub(b),d.f;d=new Mh(a,c);ai[c]=d;J("player-added",d.f);Sb(d,na(di,d));H(function(){d.Ub(b)},0);
return d.f}
function di(a){ai[a.Y]=null}
function ei(a){a=ie(a);if(!a)return null;var b=bi+"_"+ia(a),c=ai[b];c||(c=new Mh(a,b),ai[b]=c);return c.f}
;var fi=r("yt.abuse.botguardInitialized")||xc;q("yt.abuse.botguardInitialized",fi,void 0);var gi=r("yt.abuse.invokeBotguard")||yc;q("yt.abuse.invokeBotguard",gi,void 0);var hi=r("yt.abuse.dclkstatus.checkDclkStatus")||Xd;q("yt.abuse.dclkstatus.checkDclkStatus",hi,void 0);var ii=r("yt.player.exports.navigate")||Qe;q("yt.player.exports.navigate",ii,void 0);var ji=r("yt.player.embed")||ci;q("yt.player.embed",ji,void 0);var ki=r("yt.player.getPlayerByElement")||ei;q("yt.player.getPlayerByElement",ki,void 0);
var li=r("yt.util.activity.init")||Ge;q("yt.util.activity.init",li,void 0);var mi=r("yt.util.activity.getTimeSinceActive")||Ie;q("yt.util.activity.getTimeSinceActive",mi,void 0);var ni=r("yt.util.activity.setTimestamp")||He;q("yt.util.activity.setTimestamp",ni,void 0);function oi(a){Q.call(this,1,arguments);this.b=a}
y(oi,Q);function pi(a){Q.call(this,1,arguments);this.b=a}
y(pi,Q);function qi(a,b,c,d){Q.call(this,2,arguments);this.g=a;this.b=null===b?null:!!b;this.receivePostUpdates=null===c?null:!!c;this.f=null===d?null:!!d}
y(qi,Q);function ri(a,b,c,d,e){Q.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
y(ri,Q);function si(a,b,c){Q.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(si,Q);function ti(a,b,c,d,e,f,h){Q.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=h||null}
y(ti,Q);
var ui=new R("subscription-batch-subscribe",oi),vi=new R("subscription-batch-unsubscribe",oi),wi=new R("subscription-pref-email",qi),xi=new R("subscription-subscribe",ri),yi=new R("subscription-subscribe-loading",pi),zi=new R("subscription-subscribe-loaded",pi),Ai=new R("subscription-subscribe-success",si),Bi=new R("subscription-subscribe-external",ri),Ci=new R("subscription-unsubscribe",ti),Di=new R("subscription-unsubscirbe-loading",pi),Ei=new R("subscription-unsubscribe-loaded",pi),Fi=new R("subscription-unsubscribe-success",
pi),Gi=new R("subscription-external-unsubscribe",ti),Hi=new R("subscription-enable-ypc",pi),Ii=new R("subscription-disable-ypc",pi);function Ji(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Cd(c,"mode",b));c=Cd("/signin?context=popup","next",c);c=Cd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=hc("LOGGED_IN",function(b){jc(G("LOGGED_IN_PUBSUB_KEY",void 0));Xb("LOGGED_IN",!0);a(b)});
Xb("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",J,void 0);function Ki(){var a=G("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!G("SESSION_INDEX")&&!G("LOGGED_IN"))}
;function Li(){var a=Ae();return a?a:null}
;function Mi(a,b){(a=ie(a))&&a.style&&(a.style.display=b?"":"none",be(a,"hid",!b))}
function Ni(a){z(arguments,function(a){!da(a)||a instanceof Element?Mi(a,!0):z(a,function(a){Ni(a)})})}
function Oi(a){z(arguments,function(a){!da(a)||a instanceof Element?Mi(a,!1):z(a,function(a){Oi(a)})})}
;var Pi={},Qi="ontouchstart"in document;function Ri(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return xe(c,function(a){return Zd(a,b)},!0,d)}
function Si(a){var b="mouseover"==a.type&&"mouseenter"in Pi||"mouseout"==a.type&&"mouseleave"in Pi,c=a.type in Pi||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Pi[b],d;for(d in c.fa){var e=Ri(b,d,a.target);e&&!xe(a.relatedTarget,function(a){return a==e},!0)&&c.u(d,e,b,a)}}if(b=Pi[a.type])for(d in b.fa)(e=Ri(a.type,d,a.target))&&b.u(d,e,a.type,a)}}
M(document,"blur",Si,!0);M(document,"change",Si,!0);M(document,"click",Si);M(document,"focus",Si,!0);M(document,"mouseover",Si);M(document,"mouseout",Si);M(document,"mousedown",Si);M(document,"keydown",Si);M(document,"keyup",Si);M(document,"keypress",Si);M(document,"cut",Si);M(document,"paste",Si);Qi&&(M(document,"touchstart",Si),M(document,"touchend",Si),M(document,"touchcancel",Si));function Ti(a){this.j=a;this.g={};this.sb=[];this.i=[]}
function T(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
Ti.prototype.unregister=function(){jc(this.sb);this.sb.length=0;ph(this.i);this.i.length=0};
Ti.prototype.init=t;Ti.prototype.dispose=t;function Ui(a,b,c){a.i.push(oh(b,c,a))}
function Vi(a,b,c){var d=T(a,void 0),e=w(c,a);b in Pi||(Pi[b]=new F);Pi[b].subscribe(d,e);a.g[c]=e}
function Wi(a,b,c){if(b in Pi){var d=Pi[b];d.unsubscribe(T(a,void 0),a.g[c]);0>=d.S()&&(d.dispose(),delete Pi[b])}delete a.g[c]}
function Xi(a,b){Ab(a,"tooltip-text",b)}
;function Yi(){Ti.call(this,"tooltip");this.b=0;this.f={}}
y(Yi,Ti);ba(Yi);g=Yi.prototype;g.register=function(){Vi(this,"mouseover",this.pb);Vi(this,"mouseout",this.Ea);Vi(this,"focus",this.fc);Vi(this,"blur",this.ac);Vi(this,"click",this.Ea);Vi(this,"touchstart",this.Hc);Vi(this,"touchend",this.vb);Vi(this,"touchcancel",this.vb)};
g.unregister=function(){Wi(this,"mouseover",this.pb);Wi(this,"mouseout",this.Ea);Wi(this,"focus",this.fc);Wi(this,"blur",this.ac);Wi(this,"click",this.Ea);Wi(this,"touchstart",this.Hc);Wi(this,"touchend",this.vb);Wi(this,"touchcancel",this.vb);this.dispose();Yi.B.unregister.call(this)};
g.dispose=function(){for(var a in this.f)this.Ea(this.f[a]);this.f={}};
g.pb=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(Cb(a,"tooltip-hide-timer"),I(b));var b=w(function(){Zi(this,a);Cb(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=H(b,c);
Ab(a,"tooltip-show-timer",b.toString());a.title&&(Xi(a,$i(a)),a.title="");b=ia(a).toString();this.f[b]=a}};
g.Ea=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(I(b),Cb(a,"tooltip-show-timer"));b=w(function(){if(a){var b=ie(aj(this,a));b&&(bj(b),b&&b.parentNode&&b.parentNode.removeChild(b),Cb(a,"content-id"));(b=ie(aj(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Cb(a,"tooltip-hide-timer")},this);
b=H(b,50);Ab(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
g.fc=function(a){this.b=0;this.pb(a)};
g.ac=function(a){this.b=0;this.Ea(a)};
g.Hc=function(a,b,c){c.changedTouches&&(this.b=0,a=Ri(b,T(this),c.changedTouches[0].target),this.pb(a))};
g.vb=function(a,b,c){c.changedTouches&&(this.b=x(),a=Ri(b,T(this),c.changedTouches[0].target),this.Ea(a))};
function cj(a,b){Xi(a,b);var c=C(a,"content-id");(c=ie(c))&&qe(c,b)}
function $i(a){return C(a,"tooltip-text")||a.title}
function Zi(a,b){if(b){var c=$i(b);if(c){var d=ie(aj(a,b));if(!d){d=document.createElement("div");d.id=aj(a,b);d.className=T(a,"tip");var e=document.createElement("div");e.className=T(a,"tip-body");var f=document.createElement("div");f.className=T(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=T(a,"tip-content");var k=dj(a,b),m=aj(a,b,"content");h.id=m;Ab(b,"content-id",m);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var n=
te(b),m=aj(a,b,"arialabel"),f=document.createElement("div");$d(f,T(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;qe(f,n);b.setAttribute("aria-labelledby",m);m=Li()||document.body;m.appendChild(f);m.appendChild(d);cj(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",$d(h,T(a,"normal-wrap")));h=Zd(b,T(a,"reverse"));ej(a,b,d,e,k,h)||ej(a,b,d,e,k,!h);var fa=T(a,"tip-visible");
H(function(){$d(d,fa)},0)}}}}
function ej(a,b,c,d,e,f){be(c,T(a,"tip-reverse"),f);var h=0;f&&(h=1);a=bf(b);f=new ce((a.width-10)/2,f?a.height:0);var k=he(b),m=new ce(0,0),n;n=k?he(k):document;n=!K||hd(9)||me(fe(n).b)?n.documentElement:n.body;b!=n&&(n=$e(b),k=le(fe(k).b),m.H=n.left+k.H,m.I=n.top+k.I);f=new ce(m.H+f.H,m.I+f.I);f=f.clone();m=(h&8&&"rtl"==Ze(c,"direction")?h^4:h)&-9;h=bf(c);k=h.clone();n=f.clone();k=k.clone();0!=m&&(m&4?n.H-=k.width+0:m&2&&(n.H-=k.width/2),m&1&&(n.I-=k.height+0));f=new Xe(0,0,0,0);f.left=n.H;f.top=
n.I;f.width=k.width;f.height=k.height;k=new ce(f.left,f.top);k instanceof ce?(m=k.H,k=k.I):(m=k,k=void 0);c.style.left=af(m,!1);c.style.top=af(k,!1);k=new de(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,m=me(fe(he(c)).b),!K||gd("10")||m&&gd("8"))f=c.style,Yc?f.MozBoxSizing="border-box":Zc?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,m){if(K){m=ef(c,"paddingLeft");k=ef(c,
"paddingRight");n=ef(c,"paddingTop");var fa=ef(c,"paddingBottom"),m=new We(n,k,fa,m)}else m=Ye(c,"paddingLeft"),k=Ye(c,"paddingRight"),n=Ye(c,"paddingTop"),fa=Ye(c,"paddingBottom"),m=new We(parseFloat(n),parseFloat(k),parseFloat(fa),parseFloat(m));if(K&&!hd(9)){k=gf(c,"borderLeft");n=gf(c,"borderRight");var fa=gf(c,"borderTop"),Pc=gf(c,"borderBottom"),k=new We(fa,n,Pc,k)}else k=Ye(c,"borderLeftWidth"),n=Ye(c,"borderRightWidth"),fa=Ye(c,"borderTopWidth"),Pc=Ye(c,"borderBottomWidth"),k=new We(parseFloat(fa),
parseFloat(n),parseFloat(Pc),parseFloat(k));f.pixelWidth=h.width-k.left-m.left-m.right-k.right;f.pixelHeight=h.height-k.top-m.top-m.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=me(h)?h.documentElement:h.body;f=new de(h.clientWidth,h.clientHeight);1==c.nodeType?(c=$e(c),k=new ce(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new ce(c.clientX,c.clientY));c=bf(d);n=Math.floor(c.width/2);h=!!(f.height<k.I+a.height);a=!!(k.I<a.height);m=!!(k.H<n);f=!!(f.width<
k.H+n);k=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||m)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function aj(a,b,c){a=T(a);var d=b.__yt_uid_key;d||(d=ye(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function dj(a,b){var c=null;$c&&Zd(b,T(a,"masked"))&&((c=ie("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Ni(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=T(a,"tip-mask")));return c}
function bj(a){var b=ie("yt-uix-tooltip-shared-mask"),c=b&&xe(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Oi(b),document.body.appendChild(b))}
;function fj(){Ti.call(this,"subscription-button")}
y(fj,Ti);ba(fj);fj.prototype.register=function(){Vi(this,"click",this.Eb);Ui(this,yi,this.pc);Ui(this,zi,this.oc);Ui(this,Ai,this.Rd);Ui(this,Di,this.pc);Ui(this,Ei,this.oc);Ui(this,Fi,this.Xd);Ui(this,Hi,this.Dd);Ui(this,Ii,this.Cd)};
fj.prototype.unregister=function(){Wi(this,"click",this.Eb);fj.B.unregister.call(this)};
var we={Vb:"hover-enabled",Pc:"yt-uix-button-subscribe",Qc:"yt-uix-button-subscribed",Fe:"ypc-enabled",Rc:"yt-uix-button-subscription-container",Sc:"yt-subscription-button-disabled-mask-container"},gj={Ge:"channel-external-id",Tc:"subscriber-count-show-when-subscribed",Uc:"subscriber-count-tooltip",Vc:"subscriber-count-title",Ie:"href",Wb:"is-subscribed",Ke:"parent-url",Me:"clicktracking",Wc:"style-type",Xb:"subscription-id",Pe:"target",Yc:"ypc-enabled"};g=fj.prototype;
g.Eb=function(a){var b=C(a,"href"),c=Ki();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");S(Ci,new ti(b,f,d,a,c,e))}else S(xi,new ri(b,d,c,e))}else hj(this,a)};
g.pc=function(a){this.La(a.b,this.Ec,!0)};
g.oc=function(a){this.La(a.b,this.Ec,!1)};
g.Rd=function(a){this.La(a.b,this.Fc,!0,a.subscriptionId)};
g.Xd=function(a){this.La(a.b,this.Fc,!1)};
g.Dd=function(a){this.La(a.b,this.ed)};
g.Cd=function(a){this.La(a.b,this.dd)};
g.Fc=function(a,b,c){b?(Ab(a,gj.Wb,"true"),c&&Ab(a,gj.Xb,c)):(Cb(a,gj.Wb),Cb(a,gj.Xb));ij(a)};
g.Ec=function(a,b){var c;c=ve(a);be(c,we.Sc,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function ij(a){var b=C(a,gj.Wc),c=!!C(a,"is-subscribed"),b="-"+b,d=we.Qc+b;be(a,we.Pc+b,!c);be(a,d,c);C(a,gj.Uc)&&!C(a,gj.Tc)&&(b=T(Yi.getInstance()),be(a,b,!c),a.title=c?"":C(a,gj.Vc));c?H(function(){$d(a,we.Vb)},1E3):ae(a,we.Vb)}
g.ed=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&($d(a,"ypc-enabled"),Ab(a,gj.Yc,"true"))};
g.dd=function(a){C(a,"ypc-enabled")&&(ae(a,"ypc-enabled"),Cb(a,"ypc-enabled"))};
function jj(a,b){var c=je(T(a));return Ia(c,function(a){return b==C(a,"channel-external-id")},a)}
g.$c=function(a,b,c){var d=Va(arguments,2);z(a,function(a){b.apply(this,Ra(a,d))},this)};
g.La=function(a,b,c){var d=jj(this,a);this.$c.apply(this,Ra([d],Va(arguments,1)))};
function hj(a,b){var c=w(function(a){a.discoverable_subscriptions&&Xb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Eb(b)},a);
Ji(c,"subscribe")}
;var kj=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",kj,void 0);function lj(a,b){this.source=null;this.j=a||null;this.origin="*";this.A=window.document.location.protocol+"//"+window.document.location.hostname;this.o=b;this.g=this.b=this.f=this.channel=this.i=null;M(window,"message",w(this.l,this))}
lj.prototype.l=function(a){var b=this.o||G("POST_MESSAGE_ORIGIN",void 0)||this.A;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.j||a.source==this.j)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,v(a)){try{a=kd(a)}catch(c){return}this.i=a.id;switch(a.event){case "listening":this.b&&(this.b(),this.b=null);break;case "command":this.f&&(this.g&&!A(this.g,a.func)||this.f(a.func,a.args))}}};
lj.prototype.sendMessage=function(a){this.source&&(a.id=this.i,this.channel&&(a.channel=this.channel),a=L(a),this.source.postMessage(a,this.origin))};function mj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function nj(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return oj(a)}
function oj(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function pj(a,b,c,d){if(ha(a)&&!u(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function qj(a){var b=a.video_id||a.videoId;if(v(b)){var c=O("yt-player-two-stage-token")||{},d=O("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];N("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function rj(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
function sj(a){return document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var tj=sj("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",uj=sj("loadCastFramework");function vj(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var wj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],xj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],yj=rj()?xj.concat(wj):wj.concat(xj);function zj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Aj(a){if(a>=yj.length)Bj();else{var b=yj[a],c="chrome-extension://"+b+tj;0<=wj.indexOf(b)?zj(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Cj(c,Bj)):Aj(a+1)}):Cj(c,function(){Aj(a+1)})}}
function Cj(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Bj(){var a=vj();a&&a(!1,"No cast extension found")}
function Dj(){if(uj){var a=2,b=vj(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Cj("//www.gstatic.com/cast/sdk/libs/sender/0.1/cast_framework.js",Bj,c)}}
function Ej(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){Dj();a({command:"cast.sender.init"});return}}window.chrome?(Dj(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=rj()?"50":"",Cj("//www.gstatic.com/eureka/clank"+a+tj,Bj)):Aj(0)):Bj()}
;var Fj=x(),Gj=null,Hj=Array(50),Ij=-1,Jj=!1;function Kj(){var a=Lj;Mj();Gj.push(a);Nj(Gj)}
function Oj(a,b){Mj();var c=Gj,d=Pj(a,String(b));0==c.length?Qj(d):(Nj(c),z(c,function(a){a(d)}))}
function Mj(){Gj||(Gj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",Gj,void 0))}
function Qj(a){var b=(Ij+1)%50;Ij=b;Hj[b]=a;Jj||(Jj=49==b)}
function Nj(a){var b=Hj;if(b[0]){var c=Ij,d=Jj?c:-1;do{var d=(d+1)%50,e=b[d];z(a,function(a){a(e)})}while(d!=c);
Hj=Array(50);Ij=-1;Jj=!1}}
function Pj(a,b){var c=(x()-Fj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Rj(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Sj(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Tj(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Uj(a){return new Rj(a)}
function Vj(a){return u(a)?Ja(a,Uj):[]}
function Wj(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function Xj(a){return u(a)?"["+Ja(a,Wj).join(",")+"]":"null"}
;var Yj={Ee:"atp",Oe:"ska",Le:"que",Je:"mus",Ne:"sus"};function Zj(a){this.i=this.g="";this.b="/api/lounge";this.f=!0;a=a||document.location.href;var b=Number(vd(4,a))||null||"";b&&(this.i=":"+b);this.g=ud(vd(3,a))||"";a=lb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ea(a,"10.0")&&(this.f=!1))}
function ak(a,b,c,d){var e=a.b;if(p(d)?d:a.f)e="https://"+a.g+a.i+a.b;return Dd(e+b,c||{})}
function bk(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,ea:na(a.o,d,!0),onError:na(a.j,e),Fa:na(a.l,e)};c&&(a.V=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Md(b,a)}
Zj.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Zj.prototype.j=function(a,b){a(Error("Request error: "+b.status))};
Zj.prototype.l=function(a){a(Error("request timed out"))};function ck(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function dk(a,b){return Ma(a,function(a){return a.key==b})}
function ek(a){return Ja(a,function(a){return{key:a.id,name:a.name}})}
function fk(a,b){return Ma(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function gk(a,b){return Ma(a,function(a){return Sj(a,b)})}
;function U(){D.call(this);this.o=new F;Sb(this,na(E,this.o))}
y(U,D);U.prototype.subscribe=function(a,b,c){return this.C()?0:this.o.subscribe(a,b,c)};
U.prototype.unsubscribe=function(a,b,c){return this.C()?!1:this.o.unsubscribe(a,b,c)};
U.prototype.ka=function(a){return this.C()?!1:this.o.ka(a)};
U.prototype.u=function(a,b){return this.C()?!1:this.o.u.apply(this.o,arguments)};function hk(a){U.call(this);this.l=a;this.screens=[]}
y(hk,U);hk.prototype.Z=function(){return this.screens};
hk.prototype.contains=function(a){return!!fk(this.screens,a)};
hk.prototype.get=function(a){return a?gk(this.screens,a):null};
function ik(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function jk(a,b){var c=a.screens.length!=b.length;a.screens=Ia(a.screens,function(a){return!!fk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=ik(a,b[d])||c;return c}
function kk(a,b){var c=a.screens.length;a.screens=Ia(a.screens,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.screens.length<c}
hk.prototype.info=function(a){Oj(this.l,a)};function lk(a,b,c,d){U.call(this);this.A=a;this.l=b;this.i=c;this.j=d;this.g=0;this.b=null;this.f=NaN}
y(lk,U);var mk=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=lk.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.Ac()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(I(this.f),this.f=NaN)};
g.w=function(){this.stop();lk.B.w.call(this)};
g.Ac=function(){this.f=NaN;this.b=Md(ak(this.A,"/pairing/get_screen"),{method:"POST",V:{pairing_code:this.l},timeout:5E3,ea:w(this.ve,this),onError:w(this.ue,this),Fa:w(this.we,this)})};
g.ve=function(a,b){this.b=null;var c=b.screen||{};c.dialId=this.i;c.name=this.j;this.u("pairingComplete",new Rj(c))};
g.ue=function(a){this.b=null;a.status&&404==a.status?this.g>=mk.length?this.u("pairingFailed",Error("DIAL polling timed out")):(a=mk[this.g],this.f=H(w(this.Ac,this),a),this.g++):this.u("pairingFailed",Error("Server error "+a.status))};
g.we=function(){this.b=null;this.u("pairingFailed",Error("Server not responding"))};function nk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new Nc;this.experiments=new Nc;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();Oc(this.capabilities,Ia(b.split(","),na($a,Yj)));a=a.experiments||"";this.experiments.clear();Oc(this.experiments,
a.split(","))}}
nk.prototype.equals=function(a){return a?this.id==a.id:!1};var ok;function pk(){var a=qk(),b=rk();A(a,b);if(sk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=Wa(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Ua(c,-(d+1),0,b)}a=tk(a);if(0==a.length)try{Oe.remove("remote_sid","/","youtube.com")}catch(m){}else try{Pe("remote_sid",a.join(","),-1)}catch(m){}}
function qk(){var a=O("yt-remote-connected-devices")||[];a.sort(Wa);return a}
function tk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return Ja(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function uk(a){N("yt-remote-connected-devices",a,86400)}
function rk(){if(vk)return vk;var a=O("yt-remote-device-id");a||(a=ck(),N("yt-remote-device-id",a,31536E3));for(var b=qk(),c=1,d=a;A(b,d);)c++,d=a+"#"+c;return vk=d}
function wk(){return O("yt-remote-session-browser-channel")}
function sk(){return O("yt-remote-session-screen-id")}
function xk(a){5<a.length&&(a=a.slice(a.length-5));var b=Ja(yk(),function(a){return a.loungeToken}),c=Ja(a,function(a){return a.loungeToken});
La(c,function(a){return!A(b,a)})&&zk();
N("yt-remote-local-screens",a,31536E3)}
function yk(){return O("yt-remote-local-screens")||[]}
function zk(){N("yt-remote-lounge-token-expiration",!0,86400)}
function Ak(a,b){N("yt-remote-session-browser-channel",a);N("yt-remote-session-screen-id",b);var c=qk(),d=rk();A(c,d)||c.push(d);uk(c);pk()}
function Bk(a){a||(Bg("yt-remote-session-screen-id"),Bg("yt-remote-session-video-id"));pk();a=qk();Pa(a,rk());uk(a)}
function Ck(){if(!ok){var a;a=new ng;(a=a.isAvailable()?a:null)&&(ok=new pg(a))}return ok?!!ok.get("yt-remote-use-staging-server"):!1}
var vk="";function Dk(a){hk.call(this,"LocalScreenService");this.f=a;this.b=NaN;Ek(this);this.info("Initializing with "+Xj(this.screens))}
y(Dk,hk);g=Dk.prototype;g.start=function(){Ek(this)&&this.u("screenChange");!O("yt-remote-lounge-token-expiration")&&Fk(this);I(this.b);this.b=H(w(this.start,this),1E4)};
g.Ab=function(a,b){Ek(this);ik(this,a);Gk(this,!1);this.u("screenChange");b(a);a.token||Fk(this)};
g.remove=function(a,b){var c=Ek(this);kk(this,a)&&(Gk(this,!1),c=!0);b(a);c&&this.u("screenChange")};
g.xb=function(a,b,c,d){var e=Ek(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Gk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.u("screenChange")};
g.w=function(){I(this.b);Dk.B.w.call(this)};
function Fk(a){if(a.screens.length){var b=Ja(a.screens,function(a){return a.id}),c=ak(a.f,"/pairing/get_lounge_token_batch");
bk(a.f,c,{screen_ids:b.join(",")},w(a.od,a),w(a.nd,a))}}
g.od=function(a){Ek(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Gk(this,!b);b&&Oj(this.l,"Missed "+b+" lounge tokens.")};
g.nd=function(a){Oj(this.l,"Requesting lounge tokens failed: "+a)};
function Ek(a){var b=Vj(yk()),b=Ia(b,function(a){return!a.uuid});
return jk(a,b)}
function Gk(a,b){xk(Ja(a.screens,Tj));b&&zk()}
;function Hk(a,b){U.call(this);this.l=b;for(var c=O("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.l(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=A(c,k)}this.b=d;this.j=a;this.g=this.i=NaN;this.f=null;Ik("Initialized with "+L(this.b))}
y(Hk,U);g=Hk.prototype;g.start=function(){var a=parseInt(O("yt-remote-fast-check-period")||"0",10);(this.i=x()-144E5<a?0:a)?Jk(this):(this.i=x()+3E5,N("yt-remote-fast-check-period",this.i),this.Pb())};
g.isEmpty=function(){return fb(this.b)};
g.update=function(){Ik("Updating availability on schedule.");var a=this.l(),b=Ya(this.b,function(b,d){return b&&!!gk(a,d)},this);
Kk(this,b)};
function Lk(a,b,c){var d=ak(a.j,"/pairing/get_screen_availability");bk(a.j,d,{lounge_token:b.token},w(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),w(function(){c(!1)},a))}
g.w=function(){I(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);Hk.B.w.call(this)};
function Kk(a,b){var c;a:if(Za(b)!=Za(a.b))c=!1;else{c=cb(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||(Ik("Updated online screens: "+L(a.b)),a.b=b,a.u("screenChange"));Mk(a)}
function Jk(a){isNaN(a.g)||I(a.g);a.g=H(w(a.Pb,a),0<a.i&&a.i<x()?2E4:1E4)}
g.Pb=function(){I(this.g);this.g=NaN;this.f&&this.f.abort();var a=Nk(this);if(Za(a)){var b=ak(this.j,"/pairing/get_screen_availability");this.f=bk(this.j,b,{lounge_token:cb(a).join(",")},w(this.Pd,this,a),w(this.Od,this))}else Kk(this,{}),Jk(this)};
g.Pd=function(a,b){this.f=null;var c;a:{c=cb(Nk(this));var d=cb(a);if(da(c)&&da(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Kk(this,d);Jk(this)}else this.L("Changing Screen set during request."),this.Pb()};
g.Od=function(a){this.L("Screen availability failed: "+a);this.f=null;Jk(this)};
function Ik(a){Oj("OnlineScreenService",a)}
g.L=function(a){Oj("OnlineScreenService",a)};
function Nk(a){var b={};z(a.l(),function(a){a.token?b[a.token]=a.id:this.L("Requesting availability of screen w/o lounge token.")});
return b}
function Mk(a){a=cb(Ya(a.b,function(a){return a}));
a.sort(Wa);a.length?N("yt-remote-online-screen-ids",a.join(","),60):Bg("yt-remote-online-screen-ids")}
;function V(a){hk.call(this,"ScreenService");this.j=a;this.b=this.f=null;this.g=[];this.i={};Ok(this)}
y(V,hk);g=V.prototype;g.start=function(){this.f.start();this.b.start();this.screens.length&&(this.u("screenChange"),this.b.isEmpty()||this.u("onlineScreenChange"))};
g.Ab=function(a,b,c){this.f.Ab(a,b,c)};
g.remove=function(a,b,c){this.f.remove(a,b,c);this.b.update()};
g.xb=function(a,b,c,d){this.f.contains(a)?this.f.xb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Oj(this.l,a),d(Error(a)))};
g.Z=function(a){return a?this.screens:Ra(this.screens,Ia(this.g,function(a){return!this.contains(a)},this))};
g.Jc=function(){return Ia(this.Z(!0),function(a){return!!this.b.b[a.id]},this)};
function Pk(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.i[b]);var h=a.Z();if(h=(c?gk(h,c):null)||gk(h,b)){h.uuid=b;var k=Qk(a,h);Lk(a.b,k,function(a){e(a?k:null)})}else c?Rk(a,c,w(function(a){var f=Qk(this,new Rj({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Lk(this.b,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Kc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new lk(this.j,a,b,c);f.subscribe("pairingComplete",w(function(a){E(f);d(Qk(this,a))},this));
f.subscribe("pairingFailed",function(a){E(f);e(a)});
f.start();return w(f.stop,f)};
function Sk(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.ye=function(a,b,c,d){Md(ak(this.j,"/pairing/get_screen"),{method:"POST",V:{pairing_code:a},timeout:5E3,ea:w(function(a,d){var h=new Rj(d.screen||{});if(!h.name||Sk(this,h.name)){var k;a:{k=h.name;for(var m=2,n=b(k,m);Sk(this,n);){m++;if(20<m)break a;n=b(k,m)}k=n}h.name=k}c(Qk(this,h))},this),
onError:w(function(a){d(Error("pairing request failed: "+a.status))},this),
Fa:w(function(){d(Error("pairing request timed out."))},this)})};
g.w=function(){E(this.f);E(this.b);V.B.w.call(this)};
function Rk(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={V:{screen_ids:b},method:"POST",context:a,ea:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Md(ak(a.j,"/pairing/get_lounge_token_batch"),e)}
function Tk(a){a.screens=a.f.Z();var b=a.i,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Xj(a.screens))}
g.pd=function(){Tk(this);this.u("screenChange");this.b.update()};
function Ok(a){Uk(a);a.f=new Dk(a.j);a.f.subscribe("screenChange",w(a.pd,a));Tk(a);a.g=Vj(O("yt-remote-automatic-screen-cache")||[]);Uk(a);a.info("Initializing automatic screens: "+Xj(a.g));a.b=new Hk(a.j,w(a.Z,a,!0));a.b.subscribe("screenChange",w(function(){this.u("onlineScreenChange")},a))}
function Qk(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=gk(a.g,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.g.push(b),N("yt-remote-automatic-screen-cache",Ja(a.g,Tj)));Uk(a);a.i[b.uuid]=b.id;N("yt-remote-device-id-map",a.i,31536E3);return b}
function Uk(a){a.i=O("yt-remote-device-id-map")||{}}
V.prototype.dispose=V.prototype.dispose;function Vk(a,b,c){U.call(this);this.O=c;this.G=a;this.b=b;this.g=null}
y(Vk,U);g=Vk.prototype;g.rb=function(a){this.g=a;this.u("sessionScreen",this.g)};
g.$=function(a){this.C()||(a&&Wk(this,""+a),this.g=null,this.u("sessionScreen",null))};
g.info=function(a){Oj(this.O,a)};
function Wk(a,b){Oj(a.O,b)}
g.Mc=function(){return null};
g.Rb=function(a){var b=this.b;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,w(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),w(function(){Wk(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.w=function(){this.Rb("");Vk.B.w.call(this)};function Xk(a,b){Vk.call(this,a,b,"CastSession");this.f=null;this.i=0;this.l=w(this.ze,this);this.j=w(this.$d,this);this.i=H(w(function(){Yk(this,null)},this),12E4)}
y(Xk,Vk);g=Xk.prototype;g.Qb=function(a){if(this.f){if(this.f==a)return;Wk(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.l);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.f=a;this.f.addUpdateListener(this.l);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);Zk(this)};
g.Oa=function(a){this.info("launchWithParams no-op for Cast: "+L(a))};
g.stop=function(){this.f?this.f.stop(w(function(){this.$()},this),w(function(){this.$(Error("Failed to stop receiver app."))},this)):this.$(Error("Stopping cast device witout session."))};
g.Rb=t;g.w=function(){this.info("disposeInternal");I(this.i);this.i=0;this.f&&(this.f.removeUpdateListener(this.l),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.f=null;Xk.B.w.call(this)};
function Zk(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+L(void 0));var b={type:"getMdxSessionStatus"};a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",b,t,w(function(){Wk(this,"Failed to send message: getMdxSessionStatus.")},a)):Wk(a,"Sending yt message without session: "+L(b))}
g.$d=function(a,b){if(!this.C())if(b){var c=ld(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+L(c));switch(d){case "mdxSessionStatus":Yk(this,c.screenId);break;default:Wk(this,"Unknown youtube message: "+d)}}else Wk(this,"Unable to parse message.")}else Wk(this,"No data in message.")};
function Yk(a,b){I(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=w(a.rb,a),d=w(a.$,a);a.hc(b,c,d,5)}}else a.$(Error("Waiting for session status timed out."))}
g.hc=function(a,b,c,d){Pk(this.G,this.b.label,a,this.b.friendlyName,w(function(e){e?b(e):0<=d?(Wk(this,"Screen "+a+" appears to be offline. "+d+" retries left."),H(w(this.hc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Mc=function(){return this.f};
g.ze=function(a){this.C()||a||(Wk(this,"Cast session died."),this.$())};function $k(a,b){Vk.call(this,a,b,"DialSession");this.i=this.F=null;this.K="";this.j=null;this.A=t;this.l=NaN;this.N=w(this.Ce,this);this.f=t}
y($k,Vk);g=$k.prototype;g.Qb=function(a){this.i=a;this.i.addUpdateListener(this.N)};
g.Oa=function(a){this.j=a;this.A()};
g.stop=function(){this.f();this.f=t;I(this.l);this.i?this.i.stop(w(this.$,this,null),w(this.$,this,"Failed to stop DIAL device.")):this.$()};
g.w=function(){this.f();this.f=t;I(this.l);this.i&&this.i.removeUpdateListener(this.N);this.i=null;$k.B.w.call(this)};
function al(a){a.f=a.G.Kc(a.K,a.b.label,a.b.friendlyName,w(function(a){this.f=t;this.rb(a)},a),w(function(a){this.f=t;
this.$(a)},a))}
g.Ce=function(a){this.C()||a||(Wk(this,"DIAL session died."),this.f(),this.f=t,this.$())};
function bl(a){var b={};b.pairingCode=a.K;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}Ck()&&(b.env_useStageMdx=1);return Bd(b)}
g.Mb=function(a){this.K=ck();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,bl(this));a(b);al(this)}else this.A=w(function(){I(this.l);this.A=t;this.l=NaN;var b=new chrome.cast.DialLaunchResponse(!0,bl(this));a(b);al(this)},this),this.l=H(w(function(){this.A()},this),100)};
g.qd=function(a,b){Pk(this.G,this.F.receiver.label,a,this.b.friendlyName,w(function(a){a&&a.token?(this.rb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Mb(b)},this),w(function(a){Wk(this,"Failed to get DIAL screen: "+a);
this.Mb(b)},this))};function cl(a,b){Vk.call(this,a,b,"ManualSession");this.f=H(w(this.Oa,this,null),150)}
y(cl,Vk);cl.prototype.stop=function(){this.$()};
cl.prototype.Qb=t;cl.prototype.Oa=function(){I(this.f);this.f=NaN;var a=gk(this.G.Z(),this.b.label);a?this.rb(a):this.$(Error("No such screen"))};
cl.prototype.w=function(){I(this.f);this.f=NaN;cl.B.w.call(this)};function W(a){U.call(this);this.f=a;this.b=null;this.j=!1;this.g=[];this.i=w(this.Md,this)}
y(W,U);g=W.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,w(this.uc,this),w(this.Nd,this),d,e);c.customDialLaunchCallback=w(this.Bd,this);chrome.cast.initialize(c,w(function(){this.C()||(chrome.cast.addReceiverActionListener(this.i),Kj(),
this.f.subscribe("onlineScreenChange",w(this.Lc,this)),this.g=dl(this),chrome.cast.setCustomReceivers(this.g,t,w(function(a){this.L("Failed to set initial custom receivers: "+L(a))},this)),this.u("yt-remote-cast2-availability-change",el(this)),b(!0))},this),w(function(a){this.L("Failed to initialize API: "+L(a));
b(!1)},this))};
g.ne=function(a,b){X("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)X("Unsetting old screen status: "+this.b.b.friendlyName),E(this.b),this.b=null}if(a&&b){if(!this.b){c=gk(this.f.Z(),a);if(!c){X("setConnectedScreenStatus: Unknown screen.");return}var d=fl(this,c);d||(X("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(d),chrome.cast.setCustomReceivers(this.g,
t,w(function(a){this.L("Failed to set initial custom receivers: "+L(a))},this)));
X("setConnectedScreenStatus: new active receiver: "+d.friendlyName);gl(this,new cl(this.f,d),!0)}this.b.Rb(b)}else X("setConnectedScreenStatus: no screen.")};
function fl(a,b){return b?Ma(a.g,function(a){return Sj(b,a.label)},a):null}
g.oe=function(a){this.C()?this.L("Setting connection data on disposed cast v2"):this.b?this.b.Oa(a):this.L("Setting connection data without a session")};
g.Be=function(){this.C()?this.L("Stopping session on disposed cast v2"):this.b?(this.b.stop(),E(this.b),this.b=null):X("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(w(this.uc,this),w(this.Qd,this))};
g.w=function(){this.f.unsubscribe("onlineScreenChange",w(this.Lc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);var a=Lj,b=r("yt.mdx.remote.debug.handlers_");Pa(b||[],a);E(this.b);W.B.w.call(this)};
function X(a){Oj("Controller",a)}
g.L=function(a){Oj("Controller",a)};
function Lj(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function el(a){return a.j||!!a.g.length||!!a.b}
function gl(a,b,c){E(a.b);(a.b=b)?(c?a.u("yt-remote-cast2-receiver-resumed",b.b):a.u("yt-remote-cast2-receiver-selected",b.b),b.subscribe("sessionScreen",w(a.wc,a,b)),b.g?a.u("yt-remote-cast2-session-change",b.g):c&&a.b.Oa(null)):a.u("yt-remote-cast2-session-change",null)}
g.wc=function(a,b){this.b==a&&(b||gl(this,null),this.u("yt-remote-cast2-session-change",b))};
g.Md=function(a,b){if(!this.C())if(a)switch(X("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.b.label!=a.label)X("onReceiverAction_: Stopping active receiver: "+this.b.b.friendlyName),this.b.stop();else{X("onReceiverAction_: Casting to active receiver.");this.b.g&&this.u("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:gl(this,new cl(this.f,a));break;case chrome.cast.ReceiverType.DIAL:gl(this,
new $k(this.f,a));break;case chrome.cast.ReceiverType.CAST:gl(this,new Xk(this.f,a));break;default:this.L("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.b.label==a.label?this.b.stop():this.L("Stopping receiver w/o session: "+a.friendlyName)}else this.L("onReceiverAction_ called without receiver.")};
g.Bd=function(a){if(this.C())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.L("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.b:null;if(!c||c.label!=b.label)return this.L("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return X("Reselecting dial screen."),
this.u("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.L('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);gl(this,new $k(this.f,b))}b=this.b;b.F=a;return b.F.appState==chrome.cast.DialAppState.RUNNING?new Promise(w(b.qd,b,(b.F.extraData||{}).screenId||null)):new Promise(w(b.Mb,b))};
g.uc=function(a){if(!this.C()){X("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)X("Got resumed cast session before resumed mdx connection."),gl(this,new Xk(this.f,b),!0);else{this.L("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.b,d=gk(this.f.Z(),c.label);d&&Sj(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(X("onSessionEstablished_: manual to cast session change "+b.friendlyName),E(this.b),this.b=new Xk(this.f,b),this.b.subscribe("sessionScreen",w(this.wc,this,this.b)),this.b.Oa(null));this.b.Qb(a)}}};
g.Ae=function(){return this.b?this.b.Mc():null};
g.Qd=function(a){this.C()||(this.L("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&gl(this,null))};
g.Nd=function(a){X("Receiver availability updated: "+a);if(!this.C()){var b=el(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;el(this)!=b&&this.u("yt-remote-cast2-availability-change",el(this))}};
function dl(a){var b=a.f.Jc(),c=a.b&&a.b.b;a=Ja(b,function(a){c&&Sj(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,f=fl(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Lc=function(){if(!this.C()){var a=el(this);this.g=dl(this);X("Updating custom receivers: "+L(this.g));chrome.cast.setCustomReceivers(this.g,t,w(function(){this.L("Failed to set custom receivers.")},this));
var b=el(this);b!=a&&this.u("yt-remote-cast2-availability-change",b)}};
W.prototype.setLaunchParams=W.prototype.oe;W.prototype.setConnectedScreenStatus=W.prototype.ne;W.prototype.stopSession=W.prototype.Be;W.prototype.getCastSession=W.prototype.Ae;W.prototype.requestSession=W.prototype.requestSession;W.prototype.init=W.prototype.init;W.prototype.dispose=W.prototype.dispose;function hl(a,b,c){il()?kl(a)&&(ll(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?ml(b):(window.__onGCastApiAvailable=function(a,c){a?ml(b):(nl("Failed to load cast API: "+c),ol(!1),ll(!1),Bg("yt-remote-cast-available"),Bg("yt-remote-cast-receiver"),pl(),b(!1))},c?nc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Ej())):jl("Cannot initialize because not running Chrome")}
function pl(){jl("dispose");var a=ql();a&&a.dispose();rl=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);sl(!1);jc(tl);tl.length=0}
function ul(){return!!O("yt-remote-cast-installed")}
function vl(){var a=O("yt-remote-cast-receiver");a?(a=a.friendlyName,a=-1!=a.indexOf("&")?"document"in l?za(a):Ba(a):a):a=null;return a}
function wl(){jl("clearCurrentReciever");Bg("yt-remote-cast-receiver")}
function xl(){ul()?ql()?yl()?(jl("Requesting cast selector."),rl.requestSession()):(jl("Wait for cast API to be ready to request the session."),tl.push(hc("yt-remote-cast2-api-ready",xl))):nl("requestCastSelector: Cast is not initialized."):nl("requestCastSelector: Cast API is not installed!")}
function zl(a){yl()?ql().setLaunchParams(a):nl("setLaunchParams called before ready.")}
function Al(a,b){yl()?ql().setConnectedScreenStatus(a,b):nl("setConnectedScreenStatus called before ready.")}
var rl=null;function il(){var a;a=0<=lb.search(/\ (CrMo|Chrome|CriOS)\//);return mf||a}
function kl(a){var b=!1;if(!rl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new W(a),c.subscribe("yt-remote-cast2-availability-change",function(a){N("yt-remote-cast-available",a);J("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){jl("onReceiverSelected: "+a.friendlyName);
N("yt-remote-cast-receiver",a);J("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){jl("onReceiverResumed: "+a.friendlyName);
N("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){jl("onSessionChange: "+Wj(a));
a||Bg("yt-remote-cast-receiver");J("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
rl=c}jl("cloudview.createSingleton_: "+b);return b}
function ql(){rl||(rl=r("yt.mdx.remote.cloudview.instance_"));return rl}
function ml(a){ol(!0);ll(!1);rl.init(!0,function(b){b?(sl(!0),J("yt-remote-cast2-api-ready")):(nl("Failed to initialize cast API."),ol(!1),Bg("yt-remote-cast-available"),Bg("yt-remote-cast-receiver"),pl());a(b)})}
function jl(a){Oj("cloudview",a)}
function nl(a){Oj("cloudview",a)}
function ol(a){jl("setCastInstalled_ "+a);N("yt-remote-cast-installed",a)}
function yl(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function sl(a){jl("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function ll(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var tl=[];function Bl(a,b){this.action=a;this.params=b||null}
;function Cl(){this.b=x()}
new Cl;Cl.prototype.set=function(a){this.b=a};
Cl.prototype.reset=function(){this.set(x())};
Cl.prototype.get=function(){return this.b};function Dl(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=this.f=!1;this.Cc=!0}
Dl.prototype.stopPropagation=function(){this.f=!0};
Dl.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Cc=!1};var El=!K||hd(9),Fl=K&&!gd("9");!Zc||gd("528");Yc&&gd("1.9b")||K&&gd("8")||Wc&&gd("9.5")||Zc&&gd("528");Yc&&!gd("8")||K&&gd("9");function Gl(a,b){Dl.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.charCode=this.keyCode=this.button=this.clientY=this.clientX=0;this.shiftKey=this.altKey=this.ctrlKey=!1;this.g=this.state=null;a&&this.init(a,b)}
y(Gl,Dl);
Gl.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;var e=a.relatedTarget;if(e){if(Yc){var f;a:{try{Tc(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=
void 0!==d.clientY?d.clientY:d.pageY);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Gl.prototype.stopPropagation=function(){Gl.B.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Gl.prototype.preventDefault=function(){Gl.B.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Fl)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Hl="closure_listenable_"+(1E6*Math.random()|0),Il=0;function Jl(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.jb=!!d;this.nb=e;this.key=++Il;this.Qa=this.ib=!1}
function Kl(a){a.Qa=!0;a.listener=null;a.b=null;a.src=null;a.nb=null}
;function Ll(a){this.src=a;this.b={};this.f=0}
function Ml(a,b,c,d,e){var f=b.toString();b=a.b[f];b||(b=a.b[f]=[],a.f++);var h=Nl(b,c,d,e);-1<h?(a=b[h],a.ib=!1):(a=new Jl(c,a.src,f,!!d,e),a.ib=!1,b.push(a));return a}
Ll.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=Nl(e,b,c,d);return-1<b?(Kl(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.f--),!0):!1};
function Ol(a,b){var c=b.type;c in a.b&&Pa(a.b[c],b)&&(Kl(b),0==a.b[c].length&&(delete a.b[c],a.f--))}
function Pl(a,b,c,d,e){a=a.b[b.toString()];b=-1;a&&(b=Nl(a,c,d,e));return-1<b?a[b]:null}
function Nl(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qa&&f.listener==b&&f.jb==!!c&&f.nb==d)return e}return-1}
;var Ql="closure_lm_"+(1E6*Math.random()|0),Rl={},Sl=0;
function Tl(a,b,c,d,e){if(u(b)){for(var f=0;f<b.length;f++)Tl(a,b[f],c,d,e);return null}c=Ul(c);if(a&&a[Hl])a=a.ob(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=Vl(a);h||(a[Ql]=h=new Ll(a));c=Ml(h,b,c,d,e);if(!c.b){d=Wl();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Xl(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Sl++}a=c}return a}
function Wl(){var a=Yl,b=El?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Zl(a,b,c,d,e){if(u(b))for(var f=0;f<b.length;f++)Zl(a,b[f],c,d,e);else c=Ul(c),a&&a[Hl]?a.wb(b,c,d,e):a&&(a=Vl(a))&&(b=Pl(a,b,c,!!d,e))&&$l(b)}
function $l(a){if(!ea(a)&&a&&!a.Qa){var b=a.src;if(b&&b[Hl])Ol(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.jb):b.detachEvent&&b.detachEvent(Xl(c),d);Sl--;(c=Vl(b))?(Ol(c,a),0==c.f&&(c.src=null,b[Ql]=null)):Kl(a)}}}
function Xl(a){return a in Rl?Rl[a]:Rl[a]="on"+a}
function am(a,b,c,d){var e=!0;if(a=Vl(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.jb==c&&!f.Qa&&(f=bm(f,d),e=e&&!1!==f)}return e}
function bm(a,b){var c=a.listener,d=a.nb||a.src;a.ib&&$l(a);return c.call(d,b)}
function Yl(a,b){if(a.Qa)return!0;if(!El){var c=b||r("window.event"),d=new Gl(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.b;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.f&&0<=h;h--){d.b=c[h];var k=am(c[h],f,!0,d),e=e&&k}for(h=0;!d.f&&h<c.length;h++)d.b=c[h],k=am(c[h],f,!1,d),e=e&&k}return e}return bm(a,new Gl(b,this))}
function Vl(a){a=a[Ql];return a instanceof Ll?a:null}
var cm="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ul(a){if(ga(a))return a;a[cm]||(a[cm]=function(b){return a.handleEvent(b)});
return a[cm]}
;function dm(){D.call(this);this.g=new Ll(this);this.sa=this;this.Y=null}
y(dm,D);dm.prototype[Hl]=!0;g=dm.prototype;g.addEventListener=function(a,b,c,d){Tl(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Zl(this,a,b,c,d)};
function em(a,b){var c,d=a.Y;if(d){c=[];for(var e=1;d;d=d.Y)c.push(d),++e}var d=a.sa,e=b,f=e.type||e;if(v(e))e=new Dl(e,d);else if(e instanceof Dl)e.target=e.target||d;else{var h=e,e=new Dl(f,d);kb(e,h)}var h=!0,k;if(c)for(var m=c.length-1;!e.f&&0<=m;m--)k=e.b=c[m],h=fm(k,f,!0,e)&&h;e.f||(k=e.b=d,h=fm(k,f,!0,e)&&h,e.f||(h=fm(k,f,!1,e)&&h));if(c)for(m=0;!e.f&&m<c.length;m++)k=e.b=c[m],h=fm(k,f,!1,e)&&h}
g.w=function(){dm.B.w.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,Kl(d[e]);delete a.b[c];a.f--}}this.Y=null};
g.ob=function(a,b,c,d){return Ml(this.g,String(a),b,c,d)};
g.wb=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};
function fm(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Qa&&h.jb==c){var k=h.listener,m=h.nb||h.src;h.ib&&Ol(a.g,h);e=!1!==k.call(m,d)&&e}}return e&&0!=d.Cc}
;function gm(a,b){this.f=new nd(a);this.b=b?ld:kd}
gm.prototype.stringify=function(a){return md(this.f,a)};
gm.prototype.parse=function(a){return this.b(a)};function hm(a,b){dm.call(this);this.b=a||1;this.f=b||l;this.i=w(this.qe,this);this.j=x()}
y(hm,dm);g=hm.prototype;g.enabled=!1;g.ca=null;function im(a,b){a.b=b;a.ca&&a.enabled?(a.stop(),a.start()):a.ca&&a.stop()}
g.qe=function(){if(this.enabled){var a=x()-this.j;0<a&&a<.8*this.b?this.ca=this.f.setTimeout(this.i,this.b-a):(this.ca&&(this.f.clearTimeout(this.ca),this.ca=null),em(this,"tick"),this.enabled&&(this.ca=this.f.setTimeout(this.i,this.b),this.j=x()))}};
g.start=function(){this.enabled=!0;this.ca||(this.ca=this.f.setTimeout(this.i,this.b),this.j=x())};
g.stop=function(){this.enabled=!1;this.ca&&(this.f.clearTimeout(this.ca),this.ca=null)};
g.w=function(){hm.B.w.call(this);this.stop();delete this.f};
function jm(a,b,c){if(ga(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}
;function km(a,b,c){D.call(this);this.i=null!=c?w(a,c):a;this.g=b;this.f=w(this.Sd,this);this.b=[]}
y(km,D);g=km.prototype;g.Ra=!1;g.eb=0;g.Ba=null;g.gd=function(a){this.b=arguments;this.Ba||this.eb?this.Ra=!0:lm(this)};
g.stop=function(){this.Ba&&(l.clearTimeout(this.Ba),this.Ba=null,this.Ra=!1,this.b=[])};
g.pause=function(){this.eb++};
g.resume=function(){this.eb--;this.eb||!this.Ra||this.Ba||(this.Ra=!1,lm(this))};
g.w=function(){km.B.w.call(this);this.stop()};
g.Sd=function(){this.Ba=null;this.Ra&&!this.eb&&(this.Ra=!1,lm(this))};
function lm(a){a.Ba=jm(a.f,a.g);a.i.apply(null,a.b)}
;function mm(a){D.call(this);this.f=a;this.b={}}
y(mm,D);var nm=[];mm.prototype.ob=function(a,b,c,d){u(b)||(b&&(nm[0]=b.toString()),b=nm);for(var e=0;e<b.length;e++){var f=Tl(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.b[f.key]=f}return this};
mm.prototype.wb=function(a,b,c,d,e){if(u(b))for(var f=0;f<b.length;f++)this.wb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.f||this,c=Ul(c),d=!!d,b=a&&a[Hl]?Pl(a.g,String(b),c,d,e):a?(a=Vl(a))?Pl(a,b,c,d,e):null:null,b&&($l(b),delete this.b[b.key]);return this};
function om(a){Xa(a.b,function(a,c){this.b.hasOwnProperty(c)&&$l(a)},a);
a.b={}}
mm.prototype.w=function(){mm.B.w.call(this);om(this)};
mm.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function pm(){}
pm.prototype.b=null;function qm(a){var b;(b=a.b)||(b={},rm(a)&&(b[0]=!0,b[1]=!0),b=a.b=b);return b}
;var sm;function tm(){}
y(tm,pm);function um(a){return(a=rm(a))?new ActiveXObject(a):new XMLHttpRequest}
function rm(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}
sm=new tm;function vm(a,b,c,d,e){this.b=a;this.g=c;this.A=d;this.l=e||1;this.j=45E3;this.i=new mm(this);this.f=new hm;im(this.f,250)}
g=vm.prototype;g.Ca=null;g.ia=!1;g.Ta=null;g.Tb=null;g.fb=null;g.Sa=null;g.ta=null;g.wa=null;g.Ga=null;g.M=null;g.hb=0;g.ja=null;g.zb=null;g.Da=null;g.bb=-1;g.Dc=!0;g.ya=!1;g.Lb=0;g.tb=null;var wm={},xm={};g=vm.prototype;g.setTimeout=function(a){this.j=a};
function ym(a,b,c){a.Sa=1;a.ta=Ug(b.clone());a.Ga=c;a.o=!0;zm(a,null)}
function Am(a,b,c,d,e){a.Sa=1;a.ta=Ug(b.clone());a.Ga=null;a.o=c;e&&(a.Dc=!1);zm(a,d)}
function zm(a,b){a.fb=x();Bm(a);a.wa=a.ta.clone();Sg(a.wa,"t",a.l);a.hb=0;a.M=a.b.Fb(a.b.gb()?b:null);0<a.Lb&&(a.tb=new km(w(a.Ic,a,a.M),a.Lb));a.i.ob(a.M,"readystatechange",a.ce);var c=a.Ca?hb(a.Ca):{};a.Ga?(a.zb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.M.send(a.wa,a.zb,a.Ga,c)):(a.zb="GET",a.Dc&&!Zc&&(c.Connection="close"),a.M.send(a.wa,a.zb,null,c));a.b.ha(1)}
g.ce=function(a){a=a.target;var b=this.tb;b&&3==Cm(a)?b.gd():this.Ic(a)};
g.Ic=function(a){try{if(a==this.M)a:{var b=Cm(this.M),c=this.M.j,d=this.M.getStatus();if(K&&!hd(10)||Zc&&!gd("420+")){if(4>b)break a}else if(3>b||3==b&&!Wc&&!Dm(this.M))break a;this.ya||4!=b||7==c||(8==c||0>=d?this.b.ha(3):this.b.ha(2));Em(this);var e=this.M.getStatus();this.bb=e;var f=Dm(this.M);(this.ia=200==e)?(4==b&&Fm(this),this.o?(Gm(this,b,f),Wc&&this.ia&&3==b&&(this.i.ob(this.f,"tick",this.ae),this.f.start())):Hm(this,f),this.ia&&!this.ya&&(4==b?this.b.qb(this):(this.ia=!1,Bm(this)))):(this.Da=
400==e&&0<f.indexOf("Unknown SID")?3:0,Y(),Fm(this),Im(this))}}catch(h){}finally{}};
function Gm(a,b,c){for(var d=!0;!a.ya&&a.hb<c.length;){var e=Jm(a,c);if(e==xm){4==b&&(a.Da=4,Y(),d=!1);break}else if(e==wm){a.Da=4;Y();d=!1;break}else Hm(a,e)}4==b&&0==c.length&&(a.Da=1,Y(),d=!1);a.ia=a.ia&&d;d||(Fm(a),Im(a))}
g.ae=function(){var a=Cm(this.M),b=Dm(this.M);this.hb<b.length&&(Em(this),Gm(this,a,b),this.ia&&4!=a&&Bm(this))};
function Jm(a,b){var c=a.hb,d=b.indexOf("\n",c);if(-1==d)return xm;c=Number(b.substring(c,d));if(isNaN(c))return wm;d+=1;if(d+c>b.length)return xm;var e=b.substr(d,c);a.hb=d+c;return e}
function Km(a,b){a.fb=x();Bm(a);var c=b?window.location.hostname:"";a.wa=a.ta.clone();P(a.wa,"DOMAIN",c);P(a.wa,"t",a.l);try{a.ja=new ActiveXObject("htmlfile")}catch(n){Fm(a);a.Da=7;Y();Im(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Da)h=Da[h];else if(h in Ca)h=Da[h]=Ca[h];else{var k,m=h.charCodeAt(0);if(31<m&&127>m)k=h;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");
k+=m.toString(16).toUpperCase()}h=Da[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=yb(d+"</body></html>");a.ja.open();a.ja.write(xb(c));a.ja.close();a.ja.parentWindow.m=w(a.Wd,a);a.ja.parentWindow.d=w(a.zc,a,!0);a.ja.parentWindow.rpcClose=w(a.zc,a,!1);c=a.ja.createElement("DIV");a.ja.parentWindow.document.body.appendChild(c);d=tb(a.wa.toString());d=rb(d);ya.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(sa,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(ta,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(ua,
"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(va,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(wa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(xa,"&#0;")));d=yb('<iframe src="'+d+'"></iframe>');c.innerHTML=xb(d);a.b.ha(1)}
g.Wd=function(a){Lm(w(this.Vd,this,a),0)};
g.Vd=function(a){this.ya||(Em(this),Hm(this,a),Bm(this))};
g.zc=function(a){Lm(w(this.Ud,this,a),0)};
g.Ud=function(a){this.ya||(Fm(this),this.ia=a,this.b.qb(this),this.b.ha(4))};
g.cancel=function(){this.ya=!0;Fm(this)};
function Bm(a){a.Tb=x()+a.j;Mm(a,a.j)}
function Mm(a,b){if(null!=a.Ta)throw Error("WatchDog timer not null");a.Ta=Lm(w(a.Yd,a),b)}
function Em(a){a.Ta&&(l.clearTimeout(a.Ta),a.Ta=null)}
g.Yd=function(){this.Ta=null;var a=x();0<=a-this.Tb?(2!=this.Sa&&this.b.ha(3),Fm(this),this.Da=2,Y(),Im(this)):Mm(this,this.Tb-a)};
function Im(a){a.b.lc()||a.ya||a.b.qb(a)}
function Fm(a){Em(a);E(a.tb);a.tb=null;a.f.stop();om(a.i);if(a.M){var b=a.M;a.M=null;Nm(b);b.dispose()}a.ja&&(a.ja=null)}
function Hm(a,b){try{a.b.tc(a,b),a.b.ha(4)}catch(c){}}
;function Om(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Pm(a,b,function(e){e?c(!0):l.setTimeout(function(){Om(a,b,c,d,f)},f)})}}
function Pm(a,b,c){var d=new Image;d.onload=function(){try{Qm(d),c(!0)}catch(a){}};
d.onerror=function(){try{Qm(d),c(!1)}catch(a){}};
d.onabort=function(){try{Qm(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{Qm(d),c(!1)}catch(a){}};
l.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function Qm(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Rm(a){this.b=a;this.f=new gm(null,!0)}
g=Rm.prototype;g.Jb=null;g.aa=null;g.ub=!1;g.Gc=null;g.kb=null;g.Nb=null;g.Kb=null;g.da=null;g.ra=-1;g.ab=null;g.Xa=null;g.connect=function(a){this.Kb=a;a=Sm(this.b,null,this.Kb);Y();this.Gc=x();var b=this.b.A;null!=b?(this.ab=b[0],(this.Xa=b[1])?(this.da=1,Tm(this)):(this.da=2,Um(this))):(Sg(a,"MODE","init"),this.aa=new vm(this,0,void 0,void 0,void 0),this.aa.Ca=this.Jb,Am(this.aa,a,!1,null,!0),this.da=0)};
function Tm(a){var b=Sm(a.b,a.Xa,"/mail/images/cleardot.gif");Ug(b);Om(b.toString(),5E3,w(a.cd,a),3,2E3);a.ha(1)}
g.cd=function(a){if(a)this.da=2,Um(this);else{Y();var b=this.b;b.ga=b.ua.ra;Vm(b,9)}a&&this.ha(2)};
function Um(a){var b=a.b.R;if(null!=b)Y(),b?(Y(),Wm(a.b,a,!1)):(Y(),Wm(a.b,a,!0));else if(a.aa=new vm(a,0,void 0,void 0,void 0),a.aa.Ca=a.Jb,b=a.b,b=Sm(b,b.gb()?a.ab:null,a.Kb),Y(),!K||hd(10))Sg(b,"TYPE","xmlhttp"),Am(a.aa,b,!1,a.ab,!1);else{Sg(b,"TYPE","html");var c=a.aa;a=!!a.ab;c.Sa=3;c.ta=Ug(b.clone());Km(c,a)}}
g.Fb=function(a){return this.b.Fb(a)};
g.lc=function(){return!1};
g.tc=function(a,b){this.ra=a.bb;if(0==this.da)if(b){try{var c=this.f.parse(b)}catch(d){c=this.b;c.ga=this.ra;Vm(c,2);return}this.ab=c[0];this.Xa=c[1]}else c=this.b,c.ga=this.ra,Vm(c,2);else if(2==this.da)if(this.ub)Y(),this.Nb=x();else if("11111"==b){if(Y(),this.ub=!0,this.kb=x(),c=this.kb-this.Gc,!K||hd(10)||500>c)this.ra=200,this.aa.cancel(),Y(),Wm(this.b,this,!0)}else Y(),this.kb=this.Nb=x(),this.ub=!1};
g.qb=function(){this.ra=this.aa.bb;if(this.aa.ia)0==this.da?this.Xa?(this.da=1,Tm(this)):(this.da=2,Um(this)):2==this.da&&((!K||hd(10)?!this.ub:200>this.Nb-this.kb)?(Y(),Wm(this.b,this,!1)):(Y(),Wm(this.b,this,!0)));else{0==this.da?Y():2==this.da&&Y();var a=this.b;a.ga=this.ra;Vm(a,2)}};
g.gb=function(){return this.b.gb()};
g.isActive=function(){return this.b.isActive()};
g.ha=function(a){this.b.ha(a)};function Xm(a){dm.call(this);this.headers=new Ec;this.K=a||null;this.f=!1;this.G=this.b=null;this.X="";this.j=0;this.o="";this.i=this.O=this.l=this.N=!1;this.F=0;this.A=null;this.na="";this.ba=this.la=!1}
y(Xm,dm);var Ym=/^https?$/i,Zm=["POST","PUT"];g=Xm.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.o="";this.j=0;this.N=!1;this.f=!0;this.b=this.K?um(this.K):um(sm);this.G=this.K?qm(this.K):qm(sm);this.b.onreadystatechange=w(this.sc,this);try{this.getStatus(),this.O=!0,this.b.open(b,String(a),!0),this.O=!1}catch(f){this.getStatus();$m(this,f);return}a=c||"";var e=this.headers.clone();d&&Lc(d,function(a,b){e.set(b,a)});
d=Ma(e.ma(),an);c=l.FormData&&a instanceof l.FormData;!A(Zm,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.na&&(this.b.responseType=this.na);"withCredentials"in this.b&&this.b.withCredentials!==this.la&&(this.b.withCredentials=this.la);try{bn(this),0<this.F&&(this.ba=cn(this.b),this.getStatus(),this.ba?(this.b.timeout=this.F,this.b.ontimeout=w(this.jc,this)):this.A=jm(this.jc,this.F,this)),this.getStatus(),this.l=!0,this.b.send(a),this.l=!1}catch(f){this.getStatus(),$m(this,f)}};
function cn(a){return K&&gd(9)&&ea(a.timeout)&&p(a.ontimeout)}
function an(a){return"content-type"==a.toLowerCase()}
g.jc=function(){"undefined"!=typeof aa&&this.b&&(this.o="Timed out after "+this.F+"ms, aborting",this.j=8,this.getStatus(),em(this,"timeout"),Nm(this,8))};
function $m(a,b){a.f=!1;a.b&&(a.i=!0,a.b.abort(),a.i=!1);a.o=b;a.j=5;dn(a);en(a)}
function dn(a){a.N||(a.N=!0,em(a,"complete"),em(a,"error"))}
function Nm(a,b){a.b&&a.f&&(a.getStatus(),a.f=!1,a.i=!0,a.b.abort(),a.i=!1,a.j=b||7,em(a,"complete"),em(a,"abort"),en(a))}
g.w=function(){this.b&&(this.f&&(this.f=!1,this.i=!0,this.b.abort(),this.i=!1),en(this,!0));Xm.B.w.call(this)};
g.sc=function(){this.C()||(this.O||this.l||this.i?fn(this):this.Kd())};
g.Kd=function(){fn(this)};
function fn(a){if(a.f&&"undefined"!=typeof aa)if(a.G[1]&&4==Cm(a)&&2==a.getStatus())a.getStatus();else if(a.l&&4==Cm(a))jm(a.sc,0,a);else if(em(a,"readystatechange"),4==Cm(a)){a.getStatus();a.f=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=vd(1,String(a.X));if(!f&&l.self&&l.self.location)var h=l.self.location.protocol,f=h.substr(0,h.length-1);e=!Ym.test(f?f.toLowerCase():"")}d=
e}if(d)em(a,"complete"),em(a,"success");else{a.j=6;var k;try{k=2<Cm(a)?a.b.statusText:""}catch(m){k=""}a.o=k+" ["+a.getStatus()+"]";dn(a)}}finally{en(a)}}}
function en(a,b){if(a.b){bn(a);var c=a.b,d=a.G[0]?t:null;a.b=null;a.G=null;b||em(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function bn(a){a.b&&a.ba&&(a.b.ontimeout=null);ea(a.A)&&(l.clearTimeout(a.A),a.A=null)}
g.isActive=function(){return!!this.b};
function Cm(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<Cm(this)?this.b.status:-1}catch(a){return-1}};
function Dm(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
;function gn(a,b,c){this.l=a||null;this.b=1;this.f=[];this.i=[];this.j=new gm(null,!0);this.A=b||null;this.R=null!=c?c:null}
function hn(a,b){this.f=a;this.b=b;this.context=null}
g=gn.prototype;g.Za=null;g.W=null;g.J=null;g.Ib=null;g.lb=null;g.$b=null;g.mb=null;g.cb=0;g.vd=0;g.P=null;g.va=null;g.qa=null;g.Aa=null;g.ua=null;g.yb=null;g.Na=-1;g.mc=-1;g.ga=-1;g.$a=0;g.Ma=0;g.za=8;var jn=new dm;function kn(a){Dl.call(this,"statevent",a)}
y(kn,Dl);function ln(a,b){Dl.call(this,"timingevent",a);this.size=b}
y(ln,Dl);function mn(a){Dl.call(this,"serverreachability",a)}
y(mn,Dl);g=gn.prototype;g.connect=function(a,b,c,d,e){Y();this.Ib=b;this.Za=c||{};d&&p(e)&&(this.Za.OSID=d,this.Za.OAID=e);this.ua=new Rm(this);this.ua.Jb=null;this.ua.f=this.j;this.ua.connect(a)};
function nn(a){on(a);if(3==a.b){var b=a.cb++,c=a.lb.clone();P(c,"SID",a.g);P(c,"RID",b);P(c,"TYPE","terminate");pn(a,c);b=new vm(a,0,a.g,b,void 0);b.Sa=2;b.ta=Ug(c.clone());(new Image).src=b.ta;b.fb=x();Bm(b)}qn(a)}
function on(a){if(a.ua){var b=a.ua;b.aa&&(b.aa.cancel(),b.aa=null);b.ra=-1;a.ua=null}a.J&&(a.J.cancel(),a.J=null);a.qa&&(l.clearTimeout(a.qa),a.qa=null);rn(a);a.W&&(a.W.cancel(),a.W=null);a.va&&(l.clearTimeout(a.va),a.va=null)}
function sn(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new hn(a.vd++,b));2!=a.b&&3!=a.b||tn(a)}
g.lc=function(){return 0==this.b};
function tn(a){a.W||a.va||(a.va=Lm(w(a.yc,a),0),a.$a=0)}
g.yc=function(a){this.va=null;un(this,a)};
function un(a,b){if(1==a.b){if(!b){a.cb=Math.floor(1E5*Math.random());var c=a.cb++,d=new vm(a,0,"",c,void 0);d.Ca=null;var e=vn(a),f=a.lb.clone();P(f,"RID",c);a.l&&P(f,"CVER",a.l);pn(a,f);ym(d,f,e);a.W=d;a.b=2}}else 3==a.b&&(b?wn(a,b):0!=a.f.length&&(a.W||wn(a)))}
function wn(a,b){var c,d;b?6<a.za?(a.f=a.i.concat(a.f),a.i.length=0,c=a.cb-1,d=vn(a)):(c=b.A,d=b.Ga):(c=a.cb++,d=vn(a));var e=a.lb.clone();P(e,"SID",a.g);P(e,"RID",c);P(e,"AID",a.Na);pn(a,e);c=new vm(a,0,a.g,c,a.$a+1);c.Ca=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.W=c;ym(c,e,d)}
function pn(a,b){if(a.P){var c=a.P.gc(a);c&&Xa(c,function(a,c){P(b,c,a)})}}
function vn(a){var b=Math.min(a.f.length,1E3),c=["count="+b],d;6<a.za&&0<b?(d=a.f[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.f[e].f,h=a.f[e].b,f=6>=a.za?e:f-d;try{Lc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.f.splice(0,b));
return c.join("&")}
function xn(a){a.J||a.qa||(a.o=1,a.qa=Lm(w(a.xc,a),0),a.Ma=0)}
function yn(a){if(a.J||a.qa||3<=a.Ma)return!1;a.o++;a.qa=Lm(w(a.xc,a),zn(a,a.Ma));a.Ma++;return!0}
g.xc=function(){this.qa=null;this.J=new vm(this,0,this.g,"rpc",this.o);this.J.Ca=null;this.J.Lb=0;var a=this.$b.clone();P(a,"RID","rpc");P(a,"SID",this.g);P(a,"CI",this.yb?"0":"1");P(a,"AID",this.Na);pn(this,a);if(!K||hd(10))P(a,"TYPE","xmlhttp"),Am(this.J,a,!0,this.mb,!1);else{P(a,"TYPE","html");var b=this.J,c=!!this.mb;b.Sa=3;b.ta=Ug(a.clone());Km(b,c)}};
function Wm(a,b,c){a.yb=c;a.ga=b.ra;a.fd(1,0);a.lb=Sm(a,null,a.Ib);tn(a)}
g.tc=function(a,b){if(0!=this.b&&(this.J==a||this.W==a))if(this.ga=a.bb,this.W==a&&3==this.b)if(7<this.za){var c;try{c=this.j.parse(b)}catch(f){c=null}if(u(c)&&3==c.length)if(0==c[0])a:{if(!this.qa){if(this.J)if(this.J.fb+3E3<this.W.fb)rn(this),this.J.cancel(),this.J=null;else break a;yn(this);Y()}}else this.mc=c[1],0<this.mc-this.Na&&37500>c[2]&&this.yb&&0==this.Ma&&!this.Aa&&(this.Aa=Lm(w(this.wd,this),6E3));else Vm(this,11)}else b!=Ke.He.b&&Vm(this,11);else if(this.J==a&&rn(this),!/^[\s\xa0]*$/.test(b)){c=
this.j.parse(b);u(c);for(var d=0;d<c.length;d++){var e=c[d];this.Na=e[0];e=e[1];2==this.b?"c"==e[0]?(this.g=e[1],this.mb=e[2],e=e[3],null!=e?this.za=e:this.za=6,this.b=3,this.P&&this.P.ec(this),this.$b=Sm(this,this.gb()?this.mb:null,this.Ib),xn(this)):"stop"==e[0]&&Vm(this,7):3==this.b&&("stop"==e[0]?Vm(this,7):"noop"!=e[0]&&this.P&&this.P.dc(this,e),this.Ma=0)}}};
g.wd=function(){null!=this.Aa&&(this.Aa=null,this.J.cancel(),this.J=null,yn(this),Y())};
function rn(a){null!=a.Aa&&(l.clearTimeout(a.Aa),a.Aa=null)}
g.qb=function(a){var b;if(this.J==a)rn(this),this.J=null,b=2;else if(this.W==a)this.W=null,b=1;else return;this.ga=a.bb;if(0!=this.b)if(a.ia)1==b?(x(),em(jn,new ln(jn,a.Ga?a.Ga.length:0)),tn(this),this.i.length=0):xn(this);else{var c=a.Da,d;if(!(d=3==c||7==c||0==c&&0<this.ga)){if(d=1==b)this.W||this.va||1==this.b||2<=this.$a?d=!1:(this.va=Lm(w(this.yc,this,a),zn(this,this.$a)),this.$a++,d=!0);d=!(d||2==b&&yn(this))}if(d)switch(c){case 1:Vm(this,5);break;case 4:Vm(this,10);break;case 3:Vm(this,6);
break;case 7:Vm(this,12);break;default:Vm(this,2)}}};
function zn(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.fd=function(a){if(!A(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function Vm(a,b){if(2==b||9==b){var c=null;a.P&&(c=null);var d=w(a.pe,a);c||(c=new Eg("//www.google.com/images/cleardot.gif"),Ug(c));Pm(c.toString(),1E4,d)}else Y();An(a,b)}
g.pe=function(a){a?Y():(Y(),An(this,8))};
function An(a,b){a.b=0;a.P&&a.P.cc(a,b);qn(a);on(a)}
function qn(a){a.b=0;a.ga=-1;if(a.P)if(0==a.i.length&&0==a.f.length)a.P.Db(a);else{var b=Sa(a.i),c=Sa(a.f);a.i.length=0;a.f.length=0;a.P.Db(a,b,c)}}
function Sm(a,b,c){var d=Vg(c);if(""!=d.f)b&&Gg(d,b+"."+d.f),Hg(d,d.l);else var e=window.location,d=Wg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.Za&&Xa(a.Za,function(a,b){P(d,b,a)});
P(d,"VER",a.za);pn(a,d);return d}
g.Fb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Xm;a.la=!1;return a};
g.isActive=function(){return!!this.P&&this.P.isActive(this)};
function Lm(a,b){if(!ga(a))throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},b)}
g.ha=function(){em(jn,new mn(jn))};
function Y(){em(jn,new kn(jn))}
g.gb=function(){return!(!K||hd(10))};
function Bn(){}
g=Bn.prototype;g.ec=function(){};
g.dc=function(){};
g.cc=function(){};
g.Db=function(){};
g.gc=function(){return{}};
g.isActive=function(){return!0};function Cn(a,b){hm.call(this);this.o=0;if(ga(a))b&&(a=w(a,b));else if(a&&ga(a.handleEvent))a=w(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a;Tl(this,"tick",w(this.l,this));Dn(this)}
y(Cn,hm);Cn.prototype.l=function(){if(500<this.b){var a=this.b;24E4>2*a&&(a*=2);im(this,a)}this.A()};
Cn.prototype.start=function(){Cn.B.start.call(this);this.o=x()+this.b};
Cn.prototype.stop=function(){this.o=0;Cn.B.stop.call(this)};
function Dn(a){a.stop();im(a,5E3+2E4*Math.random())}
;function En(a,b){this.G=a;this.o=b;this.g=new F;this.f=new Cn(this.te,this);this.b=null;this.F=!1;this.j=null;this.R="";this.A=this.i=0;this.l=[]}
y(En,Bn);g=En.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.g.unsubscribe(a,b,c)};
g.ka=function(a){return this.g.ka(a)};
g.u=function(a,b){return this.g.u.apply(this.g,arguments)};
g.dispose=function(){this.F||(this.F=!0,this.g.clear(),Fn(this),E(this.g))};
g.C=function(){return this.F};
function Gn(a){return{firstTestResults:[""],secondTestResults:!a.b.yb,sessionId:a.b.g,arrayId:a.b.Na}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.R="";this.f.stop();this.j=a||null;this.i=b||0;a=this.G+"/test";b=this.G+"/bind";var d=new gn("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.b;e&&(e.P=null);d.P=this;this.b=d;e?this.b.connect(a,b,this.o,e.g,e.Na):c?this.b.connect(a,b,this.o,c.sessionId,c.arrayId):this.b.connect(a,b,this.o)}};
function Fn(a,b){a.A=b||0;a.f.stop();a.b&&(3==a.b.b&&un(a.b),nn(a.b));a.A=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&kb(c,b);this.f.enabled||2==(this.b?this.b.b:0)?this.l.push(c):Hn(this)&&sn(this.b,c)};
g.ec=function(){Dn(this.f);this.j=null;this.i=0;if(this.l.length){var a=this.l;this.l=[];for(var b=0,c=a.length;b<c;++b)sn(this.b,a[b])}this.u("handlerOpened")};
g.cc=function(a,b){var c=2==b&&401==this.b.ga;if(4!=b&&!c){if(6==b||410==this.b.ga)c=this.f,c.stop(),im(c,500);this.f.start()}this.u("handlerError",b)};
g.Db=function(a,b,c){if(!this.f.enabled)this.u("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].b;d&&this.l.push(d)}};
g.gc=function(){var a={v:2};this.R&&(a.gsessionid=this.R);0!=this.i&&(a.ui=""+this.i);0!=this.A&&(a.ui=""+this.A);this.j&&kb(a,this.j);return a};
g.dc=function(a,b){"S"==b[0]?this.R=b[1]:"gracefulReconnect"==b[0]?(Dn(this.f),this.f.start(),nn(this.b)):this.u("handlerMessage",new Bl(b[0],b[1]))};
function Hn(a){return!!a.b&&3==a.b.b}
function In(a,b){(a.o.loungeIdToken=b)||a.f.stop()}
g.te=function(){this.f.stop();var a=this.b,b=0;a.J&&b++;a.W&&b++;0!=b?this.f.start():this.connect(this.j,this.i)};function Jn(a){this.index=-1;this.videoId=this.listId="";this.volume=this.b=-1;this.j=!1;this.audioTrackId=null;this.i=this.f=0;this.g=null;this.reset(a)}
function Kn(a){a.audioTrackId=null;a.g=null;a.b=-1;a.f=0;a.i=x()}
Jn.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";Kn(this);this.volume=-1;this.j=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.j=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.f=a.playerTime,this.i=a.playerTimeAt)};
function Ln(a){switch(a.b){case 1:return(x()-a.i)/1E3+a.f;case -1E3:return 0}return a.f}
function Mn(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.j;b.audioTrackId=a.audioTrackId;b.trackData=ib(a.g);b.playerTime=a.f;b.playerTimeAt=a.i;return b}
Jn.prototype.clone=function(){return new Jn(Mn(this))};function Z(a,b,c){U.call(this);this.i=NaN;this.X=!1;this.K=this.G=this.N=this.O=NaN;this.Y=[];this.A=this.F=this.g=this.D=this.b=null;this.Va=a;this.Y.push(M(window,"beforeunload",w(this.md,this)));this.f=[];this.D=new Jn;this.la=b.id;this.b=Nn(this,c);this.b.subscribe("handlerOpened",this.Ad,this);this.b.subscribe("handlerClosed",this.xd,this);this.b.subscribe("handlerError",this.yd,this);this.b.subscribe("handlerMessage",this.zd,this);In(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.D.videoId;sk()&&N("yt-remote-session-video-id",a)},this)}
y(Z,U);g=Z.prototype;g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.D.listId=c);this.D.videoId=d;this.D.index=e||0;this.D.state=3;c=this.D;c.f=f;c.i=x();this.A="UNSUPPORTED";On("Connecting with setPlaylist and params: "+L(h));this.b.connect({method:"setPlaylist",params:L(h)},a,wk())}else On("Connecting without params"),this.b.connect({},a,wk());Pn(this)};
g.dispose=function(){this.C()||(this.u("beforeDispose"),Qn(this,3));Z.B.dispose.call(this)};
g.w=function(){Rn(this);Sn(this);Tn(this);I(this.G);this.G=NaN;I(this.K);this.K=NaN;this.g=null;Fe(this.Y);this.Y.length=0;this.b.dispose();Z.B.w.call(this);this.A=this.F=this.f=this.D=this.b=null};
function On(a){Oj("conn",a)}
g.md=function(){this.j(2)};
function Nn(a,b){return new En(ak(a.Va,"/bc",void 0,!1),b)}
function Qn(a,b){a.u("proxyStateChange",b)}
function Pn(a){a.i=H(w(function(){On("Connecting timeout");this.j(1)},a),2E4)}
function Rn(a){I(a.i);a.i=NaN}
function Tn(a){I(a.O);a.O=NaN}
function Un(a){Sn(a);a.N=H(w(function(){Vn(this,"getNowPlaying")},a),2E4)}
function Sn(a){I(a.N);a.N=NaN}
g.Ad=function(){On("Channel opened");this.X&&(this.X=!1,Tn(this),this.O=H(w(function(){On("Timing out waiting for a screen.");this.j(1)},this),15E3));
Ak(Gn(this.b),this.la)};
g.xd=function(){On("Channel closed");isNaN(this.i)?Bk(!0):Bk();this.dispose()};
g.yd=function(a){Bk();isNaN(this.l())?(On("Channel error: "+a+" without reconnection"),this.dispose()):(this.X=!0,On("Channel error: "+a+" with reconnection in "+this.l()+" ms"),Qn(this,2))};
function Wn(a,b){b&&(Rn(a),Tn(a));b==(Hn(a.b)&&isNaN(a.i))?b&&(Qn(a,1),Vn(a,"getSubtitlesTrack")):b?(a.ba()&&a.D.reset(),Qn(a,1),Vn(a,"getNowPlaying"),Xn(a)):a.j(1)}
function Yn(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.D.videoId&&(fb(b.params)?a.D.g=null:a.D.g=b.params,a.u("remotePlayerChange"))}
function Zn(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.D.listId=b.params.listId||a.D.listId;var e=a.D,f=e.videoId;e.videoId=c;e.index=d;c!=f&&Kn(e);a.u("remoteQueueChange")}
function $n(a,b){b.params=b.params||{};Zn(a,b);ao(a,b)}
function ao(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.D;d.f=isNaN(c)?0:c;d.i=x();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.D.b&&(c=-1E3);a.D.b=c;1==a.D.b?Un(a):Sn(a);a.u("remotePlayerChange")}
function bo(a,b){var c="true"==b.params.muted;a.D.volume=parseInt(b.params.volume,10);a.D.j=c;a.u("remotePlayerChange")}
g.zd=function(a){a.params?On("Received: action="+a.action+", params="+L(a.params)):On("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=kd(a.params.devices);this.f=Ja(a,function(a){return new nk(a)});
a=!!Ma(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
Wn(this,a);break;case "loungeScreenConnected":Wn(this,!0);break;case "loungeScreenDisconnected":Qa(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
Wn(this,!1);break;case "remoteConnected":var b=new nk(kd(a.params.device));Ma(this.f,function(a){return a.equals(b)})||Oa(this.f,b);
break;case "remoteDisconnected":b=new nk(kd(a.params.device));Qa(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":Zn(this,a);break;case "nowPlaying":$n(this,a);break;case "onStateChange":ao(this,a);break;case "onVolumeChanged":bo(this,a);break;case "onSubtitlesTrackChanged":Yn(this,a);break;case "nowAutoplaying":this.F=a.params.videoId;break;case "autoplayDismissed":break;case "autoplayUpNext":this.F=a.params.videoId;break;case "onAutoplayModeChanged":this.A=a.params.autoplayMode;break;default:On("Unrecognized action: "+a.action)}};
g.fe=function(){if(this.g){var a=this.g;this.g=null;this.D.videoId!=a&&Vn(this,"getNowPlaying")}};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.ka;Z.prototype.Ja=function(){var a=3;this.C()||(a=0,isNaN(this.l())?Hn(this.b)&&isNaN(this.i)&&(a=1):a=2);return a};
Z.prototype.getProxyState=Z.prototype.Ja;Z.prototype.j=function(a){On("Disconnecting with "+a);Rn(this);this.u("beforeDisconnect",a);1==a&&Bk();Fn(this.b,a);this.dispose()};
Z.prototype.disconnect=Z.prototype.j;Z.prototype.Ia=function(){var a=this.D;if(this.g){var b=a=this.D.clone(),c=this.g,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&Kn(b)}return Mn(a)};
Z.prototype.getPlayerContextData=Z.prototype.Ia;Z.prototype.Ua=function(a){var b=new Jn(a);b.videoId&&b.videoId!=this.D.videoId&&(this.g=b.videoId,I(this.G),this.G=H(w(this.fe,this),5E3));var c=[];this.D.listId==b.listId&&this.D.videoId==b.videoId&&this.D.index==b.index||c.push("remoteQueueChange");this.D.b==b.b&&this.D.volume==b.volume&&this.D.j==b.j&&Ln(this.D)==Ln(b)&&L(this.D.g)==L(b.g)||c.push("remotePlayerChange");this.D.reset(a);z(c,function(a){this.u(a)},this)};
Z.prototype.setPlayerContextData=Z.prototype.Ua;Z.prototype.ba=function(){var a=this.b.o.id,b=Ma(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Z.prototype.getOtherConnectedRemoteId=Z.prototype.ba;Z.prototype.l=function(){var a=this.b;return a.f.enabled?a.f.o-x():NaN};
Z.prototype.getReconnectTimeout=Z.prototype.l;Z.prototype.na=function(){return this.A||"UNSUPPORTED"};
Z.prototype.getAutoplayMode=Z.prototype.na;Z.prototype.sa=function(){return this.F||""};
Z.prototype.getAutoplayVideoId=Z.prototype.sa;Z.prototype.Wa=function(){if(!isNaN(this.l())){var a=this.b.f;a.enabled&&(a.stop(),a.start(),a.l())}};
Z.prototype.reconnect=Z.prototype.Wa;function Xn(a){I(a.K);a.K=H(w(a.j,a,1),864E5)}
function Vn(a,b,c){c?On("Sending: action="+b+", params="+L(c)):On("Sending: action="+b);a.b.sendMessage(b,c)}
Z.prototype.Ka=function(a,b){Vn(this,a,b);Xn(this)};
Z.prototype.sendMessage=Z.prototype.Ka;function co(a){hk.call(this,"ScreenServiceProxy");this.U=a;this.b=[];this.b.push(this.U.$_s("screenChange",w(this.xe,this)));this.b.push(this.U.$_s("onlineScreenChange",w(this.Gd,this)))}
y(co,hk);g=co.prototype;g.Z=function(a){return this.U.$_gs(a)};
g.contains=function(a){return!!this.U.$_c(a)};
g.get=function(a){return this.U.$_g(a)};
g.start=function(){this.U.$_st()};
g.Ab=function(a,b,c){this.U.$_a(a,b,c)};
g.remove=function(a,b,c){this.U.$_r(a,b,c)};
g.xb=function(a,b,c,d){this.U.$_un(a,b,c,d)};
g.w=function(){for(var a=0,b=this.b.length;a<b;++a)this.U.$_ubk(this.b[a]);this.b.length=0;this.U=null;co.B.w.call(this)};
g.xe=function(){this.u("screenChange")};
g.Gd=function(){this.u("onlineScreenChange")};
V.prototype.$_st=V.prototype.start;V.prototype.$_gspc=V.prototype.ye;V.prototype.$_gsppc=V.prototype.Kc;V.prototype.$_c=V.prototype.contains;V.prototype.$_g=V.prototype.get;V.prototype.$_a=V.prototype.Ab;V.prototype.$_un=V.prototype.xb;V.prototype.$_r=V.prototype.remove;V.prototype.$_gs=V.prototype.Z;V.prototype.$_gos=V.prototype.Jc;V.prototype.$_s=V.prototype.subscribe;V.prototype.$_ubk=V.prototype.ka;function eo(){var a={device:"Desktop",app:"youtube-desktop"};zg&&yg();pk();fo||(fo=new Zj,Ck()&&(fo.b="/api/loungedev"));go||(go=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",go,void 0));ho();var b=io();if(!b){var c=new V(fo);q("yt.mdx.remote.screenService_",c,void 0);b=io();hl(c,function(a){a?jo()&&Al(jo(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){J("yt-remote-receiver-availability-change")})},!(!a||!a.loadCastApiSetupScript))}if(a&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",
!0,void 0);
ko("Initializing: "+L(a));lo.push(hc("yt-remote-cast2-availability-change",function(){J("yt-remote-receiver-availability-change")}));
lo.push(hc("yt-remote-cast2-receiver-selected",function(){mo(null);J("yt-remote-auto-connect","cast-selector-receiver")}));
lo.push(hc("yt-remote-cast2-session-change",no));lo.push(hc("yt-remote-connection-change",function(a){a?Al(jo(),"YouTube TV"):oo()||(Al(null,null),wl())}));
var d=po();a.isAuto&&(d.id+="#dial");d.name=a.device;d.app=a.app;ko(" -- with channel params: "+L(d));qo(d);b.start();jo()||ro()}}
function so(){jc(lo);lo.length=0;E(to);to=null;go&&(z(go,function(a){a(null)}),go.length=0,go=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
fo=null}
function uo(){if(ul()){var a=[];if(O("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||vo())a.push({key:"cast-selector-receiver",name:wo()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:xo()}
function xo(){var a;a=io().U.$_gos();var b=yo();b&&vo()&&(fk(a,b)||a.push(b));return ek(a)}
function zo(){if(ul()){var a=vl();return a?{key:"cast-selector-receiver",name:a}:null}return Ao()}
function Ao(){var a=xo(),b=yo();b||(b=oo());return Ma(a,function(a){return b&&Sj(b,a.key)?!0:!1})}
function wo(){if(ul())return vl();var a=yo();return a?a.name:null}
function yo(){var a=jo();if(!a)return null;var b=io().Z();return gk(b,a)}
function no(a){ko("remote.onCastSessionChange_: "+Wj(a));if(a){var b=yo();b&&b.id==a.id?Al(b.id,"YouTube TV"):(b&&Bo(),Co(a,1))}else Bo()}
function Do(a,b){ko("Connecting to: "+L(a));if("cast-selector-receiver"==a.key)mo(b||null),zl(b||null);else{Bo();mo(b||null);var c=io().Z();(c=gk(c,a.key))?Co(c,1):H(function(){Eo(null)},0)}}
function Bo(){yl()?ql().stopSession():nl("stopSession called before API ready.");var a=vo();a?a.disconnect(1):(kc("yt-remote-before-disconnect",1),kc("yt-remote-connection-change",!1));Eo(null)}
function ko(a){Oj("remote",a)}
function io(){if(!to){var a=r("yt.mdx.remote.screenService_");to=a?new co(a):null}return to}
function jo(){return r("yt.mdx.remote.currentScreenId_")}
function Fo(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function mo(a){q("yt.mdx.remote.connectData_",a,void 0)}
function vo(){return r("yt.mdx.remote.connection_")}
function Eo(a){var b=vo();mo(null);a?vo():Fo("");q("yt.mdx.remote.connection_",a,void 0);go&&(z(go,function(b){b(a)}),go.length=0);
b&&!a?kc("yt-remote-connection-change",!1):!b&&a&&J("yt-remote-connection-change",!0)}
function oo(){var a=sk();if(!a)return null;var b=io().Z();return gk(b,a)}
function Co(a,b){jo();Fo(a.id);var c=new Z(fo,a,po());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){kc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){vo()&&(vo(),Eo(null))});
Eo(c)}
function ro(){var a=oo();a?(ko("Resume connection to: "+Wj(a)),Co(a,0)):(Bk(),wl(),ko("Skipping connecting because no session screen found."))}
var fo=null,go=null,to=null;function ho(){var a=po();if(fb(a)){var a=rk(),b=O("yt-remote-session-name")||"",c=O("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function po(){return r("yt.mdx.remote.channelParams_")||{}}
function qo(a){a?(N("yt-remote-session-app",a.app),N("yt-remote-session-name",a.name)):(Bg("yt-remote-session-app"),Bg("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var lo=[];var Go=null,Ho=[];function Io(){Jo();if(zo()){var a=Go;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function Ko(a){"cast-selector-receiver"==a?xl():Lo(a)}
function Lo(a){var b=uo();if(a=dk(b,a)){var c=Go;Do(a,{listId:c.getVideoData().list,videoId:c.getVideoData().video_id,currentTime:c.getCurrentTime()});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function Jo(){var a=Go;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(uo(),zo())}
;var Mo=null,No=[];function Oo(a){return{externalChannelId:a.externalChannelId,ud:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Po(a){Qo(Oo(a))}
function Qo(a){Ki()?(S(xi,new ri(a.externalChannelId,a.ud?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Bd({event:"subscribe",source:a.source}))&&gh(a)):Ro(a)}
function Ro(a){Ji(function(b){b.subscription_ajax&&Qo(a)},null)}
function So(a){a=Oo(a);S(Ci,new ti(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Bd({event:"unsubscribe",source:a.source}))&&gh(a)}
function To(a){Mo&&Mo.channelSubscribed(a.b,a.subscriptionId)}
function Uo(a){Mo&&Mo.channelUnsubscribed(a.b)}
;function Vo(a){D.call(this);this.f=a;this.f.subscribe("command",this.Bc,this);this.g={};this.i=!1}
y(Vo,D);g=Vo.prototype;g.start=function(){this.i||this.C()||(this.i=!0,Wo(this.f,"RECEIVING"))};
g.Bc=function(a,b){if(this.i&&!this.C()){var c=b||{};switch(a){case "addEventListener":if(v(c.event)&&(c=c.event,!(c in this.g))){var d=w(this.he,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":v(c.event)&&Xo(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Yo(a,b||{}),c=this.b[a].apply(this.b,c),(c=Zo(a,c))&&this.i&&!this.C()&&Wo(this.f,a,c))}}};
g.he=function(a,b){this.i&&!this.C()&&Wo(this.f,a,this.Gb(a,b))};
g.Gb=function(a,b){if(null!=b)return{value:b}};
function Xo(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
g.w=function(){this.f.unsubscribe("command",this.Bc,this);this.f=null;for(var a in this.g)Xo(this,a);Vo.B.w.call(this)};function $o(a,b){Vo.call(this,b);this.b=a;this.start()}
y($o,Vo);$o.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
$o.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Yo(a,b){switch(a){case "loadVideoById":return b=oj(b),qj(b),[b];case "cueVideoById":return b=oj(b),qj(b),[b];case "loadVideoByPlayerVars":return qj(b),[b];case "cueVideoByPlayerVars":return qj(b),[b];case "loadPlaylist":return b=pj(b),qj(b),[b];case "cuePlaylist":return b=pj(b),qj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Zo(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
$o.prototype.Gb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return $o.B.Gb.call(this,a,b)};
$o.prototype.w=function(){$o.B.w.call(this);delete this.b};function ap(){var a=this.f=new lj,b=w(this.de,this);a.f=b;a.g=null;this.f.channel="widget";if(a=G("WIDGET_ID"))this.f.i=a;this.i=[];this.o=!1;this.j={}}
g=ap.prototype;g.de=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,bp(this,c)),this.j[c]=!0)}else this.Nc(a,b)};
g.Nc=function(){};
function bp(a,b){return w(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.hd=function(){this.o=!0;this.sendMessage("initialDelivery",this.Hb());this.sendMessage("onReady");z(this.i,this.Oc,this);this.i=[]};
g.Hb=function(){return null};
function cp(a,b){a.sendMessage("infoDelivery",b)}
g.Oc=function(a){this.o?this.f.sendMessage(a):this.i.push(a)};
g.sendMessage=function(a,b){this.Oc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.f=null};function dp(a){ap.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Ld,this));this.addEventListener("onVideoProgress",w(this.le,this));this.addEventListener("onVolumeChange",w(this.me,this));this.addEventListener("onApiChange",w(this.ge,this));this.addEventListener("onPlaybackQualityChange",w(this.ie,this));this.addEventListener("onPlaybackRateChange",w(this.je,this));this.addEventListener("onStateChange",w(this.ke,this))}
y(dp,ap);g=dp.prototype;g.Nc=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&mj(a)){var c;c=b;if(ha(c[0])&&!u(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=oj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=nj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=pj.apply(window,c)}c=d}qj(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);mj(a)&&cp(this,this.Hb())}};
g.Ld=function(){var a=w(this.hd,this);this.f.b=a};
g.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
g.Hb=function(){if(!this.b)return null;var a=this.b.getApiInterface();Pa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.b[e]();b[f]=k}catch(m){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
g.ke=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate()};
this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());cp(this,a)};
g.ie=function(a){cp(this,{playbackQuality:a})};
g.je=function(a){cp(this,{playbackRate:a})};
g.ge=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var m=f[h],n=this.b.getOption(e,m);b[e][m]=n}}this.sendMessage("apiInfoDelivery",b)};
g.me=function(){cp(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
g.le=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());cp(this,a)};
g.dispose=function(){dp.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function ep(a,b,c){U.call(this);this.b=a;this.f=b;this.g=c}
y(ep,U);function Wo(a,b,c){if(!a.C()){var d=a.b;d.C()||a.f!=d.b||(a={id:a.g,command:b},c&&(a.data=c),d.b.postMessage(L(a),d.g))}}
ep.prototype.w=function(){this.f=this.b=null;ep.B.w.call(this)};function fp(a,b,c){D.call(this);this.b=a;this.g=c;this.i=M(window,"message",w(this.j,this));this.f=new ep(this,a,b);Sb(this,na(E,this.f))}
y(fp,D);fp.prototype.j=function(a){var b;if(b=!this.C())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,v(a))){try{a=kd(a)}catch(d){return}a.command&&(b=this.f,b.C()||b.u("command",a.command,a.data))}};
fp.prototype.w=function(){Fe(this.i);this.b=null;fp.B.w.call(this)};var gp=!1;function hp(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(gp=!0,a.description)){hp(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){gp=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],gp=!(!a||!a.enabledPlugin))){hp(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");gp=!0;hp(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");gp=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),gp=!0,hp(b.GetVariable("$version"))}catch(c){}})();function ip(a){return(a=a.exec(lb))?a[1]:""}
(function(){if(hf)return ip(/Firefox\/([0-9.]+)/);if(K||Xc||Wc)return fd;if(mf)return ip(/Chrome\/([0-9.]+)/);if(nf&&!(Sc()||B("iPad")||B("iPod")))return ip(/Version\/([0-9.]+)/);if(jf||kf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(lb);if(a)return a[1]+"."+a[2]}else if(lf)return(a=ip(/Android\s+([0-9.]+)/))?a:ip(/Version\/([0-9.]+)/);return""})();function jp(){var a=kp;return new Gf(function(b,c){a.ea=function(a){Hd(a)?b(a):c(a)};
a.onError=c;a.Fa=c;Md("//googleads.g.doubleclick.net/pagead/id",a)})}
;function lp(a,b){this.f=a;this.b=b}
lp.prototype.then=function(a,b,c){try{if(p(this.f))return a?Lf(a.call(c,this.f)):Lf(this.f);if(p(this.b)){if(!b)return Mf(this.b);var d=b.call(c,this.b);return!p(d)&&this.b instanceof Of?Mf(this.b):Lf(d)}throw Error("Invalid Result_ state");}catch(e){return Mf(e)}};
Ff(lp);var kp={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},mp=null;function np(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return op(""),mp=new lp(""),"";a=JSON.parse(a.substr(4)).id;op(a);mp=new lp(a);pp(18E5,2);return a}
function qp(a){var b=Error("Unable to load /pagead/id");op("");mp=new lp(void 0,b);0<a&&pp(12E4,a-1);throw b;}
function pp(a,b){H(function(){var a=w(qp,l,b),a=jp().then(np,a);Nf(a,null,t,void 0)},a)}
function op(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function rp(){}
;function sp(){var a;if(a=Oe.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(tp[d]=c.toString())}}}
ba(sp);var tp=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",tp,void 0);function up(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function vp(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function wp(a){a=void 0!==tp[a]?tp[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
sp.prototype.get=function(a,b){vp(a);up(a);var c=void 0!==tp[a]?tp[a].toString():null;return null!=c?c:b?b:""};
sp.prototype.set=function(a,b){vp(a);up(a);if(null==b)throw"ExpectedNotNull";tp[a]=b.toString()};
sp.prototype.remove=function(a){vp(a);up(a);delete tp[a]};
sp.prototype.clear=function(){tp={}};function xp(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&gh(c)}}
;function yp(a){Q.call(this,1,arguments);this.Cb=a}
y(yp,Q);function zp(a,b){Q.call(this,2,arguments);this.f=a;this.b=b}
y(zp,Q);function Ap(a,b,c,d){Q.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(Ap,Q);function Bp(a,b){Q.call(this,1,arguments);this.f=a;this.b=b||null}
y(Bp,Q);function Cp(a){Q.call(this,1,arguments)}
y(Cp,Q);var Dp=new R("ypc-core-load",yp),Ep=new R("ypc-guide-sync-success",zp),Fp=new R("ypc-purchase-success",Ap),Gp=new R("ypc-subscription-cancel",Cp),Hp=new R("ypc-subscription-cancel-success",Bp),Ip=new R("ypc-init-subscription",Cp);var Jp=!1,Kp=[],Lp=[];function Mp(a){a.b?Jp?S(Bi,a):S(Dp,new yp(function(){S(Ip,new Cp(a.b))})):Np(a.f,a.i,a.g,a.source)}
function Op(a){a.b?Jp?S(Gi,a):S(Dp,new yp(function(){S(Gp,new Cp(a.b))})):Pp(a.f,a.subscriptionId,a.i,a.g,a.source)}
function Qp(a){Rp(Sa(a.b))}
function Sp(a){Tp(Sa(a.b))}
function Up(a){Vp(a.g,a,null)}
function Wp(a,b,c){Vp(a,b,c)}
function Xp(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&S(Ai,new si(b,c,a.b.channelInfo))}
function Yp(a){var b=a.b;Xa(a.f,function(a,d){S(Ai,new si(d,a,b[d]))})}
function Zp(a){S(Fi,new pi(a.f.itemId));a.b&&a.b.length&&($p(a.b,Fi),$p(a.b,Hi))}
function Np(a,b,c,d){var e=new pi(a);S(yi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=G("PLAYBACK_ID"))&&(c.plid=d);(d=G("EVENT_ID"))&&(c.ei=d);b&&aq(b,c);Md("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Sb:f,V:c,ea:function(b,c){var d=c.response;S(Ai,new si(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&J("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&xp(d.actions)},
Ob:function(){S(zi,e)}})}
function Pp(a,b,c,d,e){var f=new pi(a);S(Di,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=G("PLAYBACK_ID"))&&(d.plid=a);(a=G("EVENT_ID"))&&(d.ei=a);c&&aq(c,d);Md("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Sb:h,V:d,ea:function(a,b){var c=b.response;S(Fi,f);c.actions&&xp(c.actions)},
Ob:function(){S(Ei,f)}})}
function Vp(a,b,c){if(null!==b&&(null!==b.b||null!==b.receivePostUpdates||null!==b.f)){var d={};a&&(d.channel_id=a);null!==b.b&&(d.receive_all_updates=b.b);null!==b.receivePostUpdates&&(d.receive_post_updates=b.receivePostUpdates);null!==b.f&&(d.receive_no_updates=b.f);Md("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",V:d,onError:function(){c&&c()}})}}
function Rp(a){if(a.length){var b=Ua(a,0,40);S("subscription-batch-subscribe-loading");$p(b,yi);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");$p(b,zi)};
Md("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",V:c,ea:function(c,f){d();var h=f.response,k=h.id;if(u(k)&&k.length==b.length){var m=h.channel_info_map;z(k,function(a,c){var d=b[c];S(Ai,new si(d,a,m[d]))});
a.length?Rp(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function Tp(a){if(a.length){var b=Ua(a,0,40);S("subscription-batch-unsubscribe-loading");$p(b,Di);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");$p(b,Ei)};
Md("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",V:c,ea:function(){d();$p(b,Fi);a.length&&Tp(a)},
onError:function(){d()}})}}
function $p(a,b){z(a,function(a){S(b,new pi(a))})}
function aq(a,b){var c=Ed(a),d;for(d in c)b[d]=c[d]}
;var bq,cq=null,dq=null,eq=null,fq=!1;
function gq(){var a=G("PLAYER_CONFIG",void 0);if("1"!=a.privembed)try{var b;try{var c=r("yt.www.ads.biscotti.getId_"),d;if(c)d=c();else{if(!mp){var e=w(qp,l,2);mp=jp().then(np,e)}d=mp}b=d}catch(f){b=Mf(f)}Nf(b,null,rp,void 0)}catch(f){$b(f)}if(G("REQUEST_POST_MESSAGE_ORIGIN")){if(!bq){bq=new lj;bq.b=gq;return}bq.origin&&"*"!=bq.origin&&(a.args.post_message_origin=bq.origin)}d=document.referrer;b=G("POST_MESSAGE_ORIGIN");c=!1;sd("legacy_cast2")&&v(d)&&v(b)&&-1<d.indexOf(b)&&dh(b)&&dh(d)&&(c=!0);window!=
window.top&&d&&d!=document.URL&&(a.args.loaderUrl=d);G("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&qj(a.args);cq=ci("player",a);d=G("POST_MESSAGE_ID","player");G("ENABLE_JS_API")?eq=new dp(cq):G("ENABLE_POST_API")&&v(d)&&v(b)&&(dq=new fp(window.parent,d,b),eq=new $o(cq,dq.f));sd("legacy_cast2")&&((fq=c&&!G("ENABLE_CAST_API"))?a.args.disableCast="1":(a=cq,eo(),Go=a,Go.addEventListener("onReady",Io),Go.addEventListener("onRemoteReceiverSelected",Ko),Ho.push(hc("yt-remote-receiver-availability-change",
Jo)),Ho.push(hc("yt-remote-auto-connect",Lo))));G("BG_P")&&(G("BG_I")||G("BG_IU"))&&wc();Wd();Mo=cq;Mo.addEventListener("SUBSCRIBE",Po);Mo.addEventListener("UNSUBSCRIBE",So);No.push(oh(Ai,To),oh(Fi,Uo))}
;q("yt.setConfig",Xb,void 0);q("yt.setMsg",function(a){Yb(Wb,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),version:d||G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Sd)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(v(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,m=!1;try{h=a.lineNumber||a.Ue||"Not available"}catch(Pc){h="Not available",m=!0}try{k=a.fileName||a.filename||a.sourceURL||
l.$googDebugFname||f}catch(Pc){k="Not available",m=!0}a=!m&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(Rd[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Sb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},V:{url:G("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.V.stack=e);for(var n in c)b.V["client."+n]=c[n];if(n=G("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var fa in n)b.V[fa]=n[fa];Md("/error_204",b);Rd[a.message]=!0;Sd++}}},void 0);
q("writeEmbed",gq,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&gh(a);return!0},void 0);
var hq=Zb(function(){zh("ol");Jp=!0;Lp.push(oh(xi,Mp),oh(Ci,Op));Jp||(Lp.push(oh(Bi,Mp),oh(Gi,Op),oh(ui,Qp),oh(vi,Sp),oh(wi,Up)),Kp.push(hc("subscription-prefs",Wp)),Lp.push(oh(Fp,Xp),oh(Hp,Zp),oh(Ep,Yp)));sp.getInstance();var a=1<window.devicePixelRatio;if(!!((wp("f"+(Math.floor(119/31)+1))||0)&67108864)!=a){var b="f"+(Math.floor(119/31)+1),c=wp(b)||0,c=a?c|67108864:c&-67108865;0==c?delete tp[b]:(a=c.toString(16),tp[b]=a.toString());var b=[],d;for(d in tp)b.push(d+"="+escape(tp[d]));Pe("PREF",b.join("&"),
63072E3)}}),iq=Zb(function(){var a=cq;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();G("PL_ATT")&&(vc=null);for(var a=0,b=Ud.length;a<b;a++){var c=Ud[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):I(c)}}Ud.length=0;a=rc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))mc(a),b.parentNode.removeChild(b);Vd=!1;Xb("DCLKSTAT",0);jc(Kp);Kp.length=0;ph(Lp);Lp.length=0;Jp=!1;Mo&&(Mo.removeEventListener("SUBSCRIBE",Qo),Mo.removeEventListener("UNSUBSCRIBE",So));Mo=null;ph(No);No.length=0;
sd("legacy_cast2")&&!fq&&(jc(Ho),Ho.length=0,Go&&(Go.removeEventListener("onRemoteReceiverSelected",Ko),Go.removeEventListener("onReady",Io),Go=null),so());Tb(eq,dq);cq&&cq.destroy()});
window.addEventListener?(window.addEventListener("load",hq),window.addEventListener("unload",iq)):window.attachEvent&&(window.attachEvent("onload",hq),window.attachEvent("onunload",iq));var jq=fj.getInstance(),kq=T(jq);kq in kj||(jq.register(),jq.sb.push(hc("yt-uix-init-"+kq,jq.init,jq)),jq.sb.push(hc("yt-uix-dispose-"+kq,jq.dispose,jq)),kj[kq]=jq);})();
