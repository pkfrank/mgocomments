(function(){(function(){function a(a){this.t={};this.tick=function(a,b,c){c=void 0!=c?c:(new Date).getTime();this.t[a]=[c,b]};this.tick("start",null,a)}var b,c;window.performance&&(c=(b=window.performance.timing)&&b.responseStart);var d=0<c?new a(c):new a;window.GA_jstiming={Timer:a,load:d};b&&(b=b.navigationStart,0<b&&c>=b&&(window.GA_jstiming.srt=c-b))})();if(window.GA_jstiming){window.GA_jstiming.c={};window.GA_jstiming.j=1;var l=function(a,b,c){var d=a.t[b],e=a.t.start;if(d&&(e||c))return d=a.t[b][0],e=void 0!=c?c:e[0],a=d-e,Math.round(a)},m=function(a,b,c){var d="";window.GA_jstiming.srt&&(d+="&srt="+window.GA_jstiming.srt,delete window.GA_jstiming.srt);var e=a.t,h=e.start,g=[],f=[],k;for(k in e)if("start"!=k&&0!=k.indexOf("_")){var t=e[k][1];t?e[t]&&f.push(k+"."+l(a,k,e[t][0])):h&&g.push(k+"."+l(a,k))}delete e.start;if(b)for(var G in b)d+="&"+G+
"="+b[G];(b=c)||(b="https://csi.gstatic.com/csi");return a=[b,"?v=3","&s="+(window.GA_jstiming.sn||"gam")+"&action=",a.name,f.length?"&it="+f.join(","):"",d,"&rt=",g.join(",")].join("")},n=function(a,b,c){a=m(a,b,c);if(!a)return"";b=new Image;var d=window.GA_jstiming.j++;window.GA_jstiming.c[d]=b;b.onload=b.onerror=function(){window.GA_jstiming&&delete window.GA_jstiming.c[d]};b.src=a;b=null;return a};window.GA_jstiming.report=function(a,b,c){return n(a,b,c)}};var p=this,q=function(a,b){var c,d=b,e=a.split(".");c=c||p;e[0]in c||!c.execScript||c.execScript("var "+e[0]);for(var h;e.length&&(h=e.shift());)e.length||void 0===d?c=c[h]?c[h]:c[h]={}:c[h]=d},u=function(a){var b=r;function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.m=function(a,c,h){for(var g=Array(arguments.length-2),f=2;f<arguments.length;f++)g[f-2]=arguments[f];return b.prototype[c].apply(a,g)}};var v=function(a){var b=!1;return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},w=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,x=function(a,b){if(!a)return b;var c=a.match(w);return c?c[0]:b};var aa=v("false"),y=v("false"),z=y||!aa;var A=function(){return x("","pubads.g.doubleclick.net")};var B=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},C=function(a,b){return a<b?-1:a>b?1:0};var D;a:{var E=p.navigator;if(E){var F=E.userAgent;if(F){D=F;break a}}D=""}var H=function(a){var b=D;return-1!=b.indexOf(a)},I=function(){var a="WebKit",b=D;return-1!=b.toLowerCase().indexOf(a.toLowerCase())};var ca=function(a,b){var c,d=ba;c=c?c(a):a;Object.prototype.hasOwnProperty.call(d,c)||(d[c]=b(a))};var da=H("Opera"),J=H("Trident")||H("MSIE"),ea=H("Edge"),K=H("Gecko")&&!(I()&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),fa=I()&&!H("Edge"),ga=function(){var a=D;if(K)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ea)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fa)return/WebKit\/(\S+)/.exec(a);if(da)return/(?:Version)[ \/]?(\S+)/.exec(a)},L=function(){var a=p.document;return a?a.documentMode:void 0},M;
a:{var N="",O=ga();O&&(N=O?O[1]:"");if(J){var P=L();if(null!=P&&P>parseFloat(N)){M=String(P);break a}}M=N}
var Q=M,ba={},R=function(a){ca(a,function(){var b,c=a;b=Q;var d=0;b=B(String(b)).split(".");for(var c=B(String(c)).split("."),e=Math.max(b.length,c.length),h=0;0==d&&h<e;h++){var g=b[h]||"",f=c[h]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];if(0==g[0].length&&0==f[0].length)break;var d=0==g[1].length?0:parseInt(g[1],10),k=0==f[1].length?0:parseInt(f[1],10),d=C(d,k)||C(0==g[2].length,0==f[2].length)||C(g[2],f[2]),g=g[3],f=f[3]}while(0==d)}b=d;return 0<=
b})},ha,S=p.document,ia=L(),ja=ha=S&&J?ia||("CSS1Compat"==S.compatMode?parseInt(Q,10):5):void 0;var T;if(!(T=!K&&!J)){var U;if(U=J){var ka=9;U=Number(ja)>=ka}T=U}T||K&&R("1.9.1");J&&R("9");var V=function(a,b){var c,d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var W=function(a){this.h={};this.f={};a=a||[];for(var b=0,c=a.length;b<c;++b)this.f[a[b]]=""};W.prototype.b=function(){var a=[];V(this.h,function(b,d){a.push(d)});var b=function(b){""!=b&&a.push(b)};V(this.f,b);return a};function la(a){var b="adsense";if(a&&"string"==typeof a&&0<a.length&&null!=b){var c=window.GS_googleServiceIds_[b];null==c&&(c="adsense"==b?new X:new Y,window.GS_googleServiceIds_[b]=c);b:{for(b=0;b<c.a.length;b++)if(a==c.a[b])break b;c.a[c.a.length]=a}a=c}else a=null;return a}q("GS_googleAddAdSenseService",la);function ma(){for(var a in window.GS_googleServiceIds_){var b=window.GS_googleServiceIds_[a];"function"!=typeof b&&b.enable()}}q("GS_googleEnableAllServices",ma);
function na(){window.GS_googleServiceIds_={}}q("GS_googleResetAllServices",na);function oa(){var a;a="adsense";a=null==a?null:window.GS_googleServiceIds_[a];return a=null==a?"":a.a.join()}q("GS_googleGetIdsForAdSenseService",oa);function pa(a){return Z(a)}q("GS_googleFindService",pa);function qa(){var a=Z("adsense");return a?a.b():""}q("GS_googleGetExpIdsForAdSense",qa);function r(a){this.l=a;this.a=[];this.i=new W}
r.prototype.toString=function(){for(var a="["+this.l+" ids: ",b=0;b<this.a.length;b++)0<b&&(a+=","),a+=this.a[b];return a+="]"};r.prototype.b=function(){return this.i.b().join()};var Z=function(a){return a=null==a?null:window.GS_googleServiceIds_[a]};function Y(){r.call(this,"unknown")}u(Y);Y.prototype.enable=function(){};function X(){r.call(this,"adsense");this.g=!1}u(X);
X.prototype.enable=function(){z=y;if(!this.g){var a;a=document.URL;var b;if(b=a){var c;a:{if(a){b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var d=b.exec(decodeURIComponent(a));if(d){c=d[1]&&1<d[1].length?d[1].substring(1):"true";break a}}catch(e){}}c=""}b=0<c.length}a=b?"google_ads_dbg.js":"google_ads.js";c="http://"+x("","partner.googleadservices.com");z&&(c="https://"+x("","securepubads.g.doubleclick.net"));d="";b=A();(b="pubads.g.doubleclick.net"==
b)||(d="?prodhost="+A());a=c+"/gampad/"+a+d;document.write('<script src="'+a+'">\x3c/script>');this.g=!0;window.GA_jstiming&&window.GA_jstiming.Timer&&(window.GA_jstiming.load.name="load",window.GA_jstiming.load.tick("start"))}};window.GS_googleServiceIds_||(window.GS_googleServiceIds_={});})()
