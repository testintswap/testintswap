"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[8592],{61859:($,h,s)=>{s.r(h),s.d(h,{detectEnv:()=>O,detectOS:()=>x,formatIOSMobile:()=>ie,formatMobileRegistry:()=>he,formatMobileRegistryEntry:()=>le,getClientMeta:()=>u,getCrypto:()=>re,getCryptoOrThrow:()=>oe,getDappRegistryUrl:()=>ge,getDocument:()=>ee,getDocumentOrThrow:()=>Y,getFromWindow:()=>C,getFromWindowOrThrow:()=>G,getLocal:()=>b,getLocalStorage:()=>Q,getLocalStorageOrThrow:()=>F,getLocation:()=>q,getLocationOrThrow:()=>ne,getMobileLinkRegistry:()=>ue,getMobileRegistryEntry:()=>se,getNavigator:()=>V,getNavigatorOrThrow:()=>te,getWalletRegistryUrl:()=>de,isAndroid:()=>j,isBrowser:()=>p,isIOS:()=>l,isMobile:()=>z,isNode:()=>r,mobileLinkChoiceKey:()=>H,removeLocal:()=>Z,safeJsonParse:()=>g,safeJsonStringify:()=>w,saveMobileLinkInfo:()=>ce,setLocal:()=>M});var n=s(78359),v=s(37167),T=function o(a,_,k){this.name=a,this.version=_,this.os=k,this.type="browser"},S=function o(a){this.version=a,this.type="node",this.name="node",this.os=process.platform},y=function o(a,_,k,B){this.name=a,this.version=_,this.os=k,this.bot=B,this.type="bot-device"},m=function o(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},t=function o(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},I=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,R=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],W=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function f(o){var a=function P(o){return""!==o&&R.reduce(function(a,_){var k=_[0];if(a)return a;var K=_[1].exec(o);return!!K&&[k,K]},!1)}(o);if(!a)return null;var _=a[0],k=a[1];if("searchbot"===_)return new m;var B=k[1]&&k[1].split(/[._]/).slice(0,3);B?B.length<3&&(B=function(){for(var o=0,a=0,_=arguments.length;a<_;a++)o+=arguments[a].length;var k=Array(o),B=0;for(a=0;a<_;a++)for(var K=arguments[a],J=0,X=K.length;J<X;J++,B++)k[B]=K[J];return k}(B,function c(o){for(var a=[],_=0;_<o;_++)a.push("0");return a}(3-B.length))):B=[];var K=B.join("."),J=function E(o){for(var a=0,_=W.length;a<_;a++){var k=W[a],B=k[0];if(k[1].exec(o))return B}return null}(o),X=I.exec(o);return X&&X[1]?new y(_,K,J,X[1]):new T(_,K,J)}function O(o){return function L(o){return o?f(o):typeof document>"u"&&typeof navigator<"u"&&"ReactNative"===navigator.product?new t:typeof navigator<"u"?f(navigator.userAgent):function d(){return typeof process<"u"&&process.version?new S(process.version.slice(1)):null}()}(o)}function x(){const o=O();return o&&o.os?o.os:void 0}function j(){const o=x();return!!o&&o.toLowerCase().includes("android")}function l(){const o=x();return!!o&&(o.toLowerCase().includes("ios")||o.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1)}function z(){return!!x()&&(j()||l())}function r(){const o=O();return!(!o||!o.name)&&"node"===o.name.toLowerCase()}function p(){return!r()&&!!V()}const C=v.getFromWindow,G=v.getFromWindowOrThrow,Y=v.getDocumentOrThrow,ee=v.getDocument,te=v.getNavigatorOrThrow,V=v.getNavigator,ne=v.getLocationOrThrow,q=v.getLocation,oe=v.getCryptoOrThrow,re=v.getCrypto,F=v.getLocalStorageOrThrow,Q=v.getLocalStorage;function u(){return n.D()}const g=function e(o){if("string"!=typeof o)throw new Error("Cannot safe json parse value of type "+typeof o);try{return JSON.parse(o)}catch{return o}},w=function i(o){return"string"==typeof o?o:JSON.stringify(o)};function M(o,a){const _=w(a),k=Q();k&&k.setItem(o,_)}function b(o){let a=null,_=null;const k=Q();return k&&(_=k.getItem(o)),a=_&&g(_),a}function Z(o){const a=Q();a&&a.removeItem(o)}const H="WALLETCONNECT_DEEPLINK_CHOICE";function ie(o,a){const _=encodeURIComponent(o);return a.universalLink?`${a.universalLink}/wc?uri=${_}`:a.deepLink?`${a.deepLink}${a.deepLink.endsWith(":")?"//":"/"}wc?uri=${_}`:""}function ce(o){const a=o.href.split("?")[0];M(H,Object.assign(Object.assign({},o),{href:a}))}function se(o,a){return o.filter(_=>_.name.toLowerCase().includes(a.toLowerCase()))[0]}function ue(o,a){let _=o;return a&&(_=a.map(k=>se(o,k)).filter(Boolean)),_}const ae="https://registry.walletconnect.com";function de(){return ae+"/api/v2/wallets"}function ge(){return ae+"/api/v2/dapps"}function le(o,a="mobile"){var _;return{name:o.name||"",shortName:o.metadata.shortName||"",color:o.metadata.colors.primary||"",logo:null!==(_=o.image_url.sm)&&void 0!==_?_:"",universalLink:o[a].universal||"",deepLink:o[a].native||""}}function he(o,a="mobile"){return Object.values(o).filter(_=>!!_[a].universal||!!_[a].native).map(_=>le(_,a))}},37167:($,h)=>{function s(R){let W;return typeof window<"u"&&typeof window[R]<"u"&&(W=window[R]),W}function n(R){const W=s(R);if(!W)throw new Error(`${R} is not defined in Window`);return W}Object.defineProperty(h,"__esModule",{value:!0}),h.getLocalStorage=h.getLocalStorageOrThrow=h.getCrypto=h.getCryptoOrThrow=h.getLocation=h.getLocationOrThrow=h.getNavigator=h.getNavigatorOrThrow=h.getDocument=h.getDocumentOrThrow=h.getFromWindowOrThrow=h.getFromWindow=void 0,h.getFromWindow=s,h.getFromWindowOrThrow=n,h.getDocumentOrThrow=function v(){return n("document")},h.getDocument=function D(){return s("document")},h.getNavigatorOrThrow=function T(){return n("navigator")},h.getNavigator=function S(){return s("navigator")},h.getLocationOrThrow=function y(){return n("location")},h.getLocation=function m(){return s("location")},h.getCryptoOrThrow=function t(){return n("crypto")},h.getCrypto=function A(){return s("crypto")},h.getLocalStorageOrThrow=function I(){return n("localStorage")},h.getLocalStorage=function N(){return s("localStorage")}},78359:($,h,s)=>{h.D=void 0;const v=s(37167);h.D=function D(){let T,S;try{T=v.getDocumentOrThrow(),S=v.getLocationOrThrow()}catch{return null}function m(...P){const U=T.getElementsByTagName("meta");for(let f=0;f<U.length;f++){const E=U[f],d=["itemprop","property","name"].map(c=>E.getAttribute(c)).filter(c=>!!c&&P.includes(c));if(d.length&&d){const c=E.getAttribute("content");if(c)return c}}return""}const I=function t(){let P=m("name","og:site_name","og:title","twitter:title");return P||(P=T.title),P}();return{description:function A(){return m("description","og:description","twitter:description","keywords")}(),url:S.origin,icons:function y(){const P=T.getElementsByTagName("link"),U=[];for(let f=0;f<P.length;f++){const E=P[f],d=E.getAttribute("rel");if(d&&d.toLowerCase().indexOf("icon")>-1){const c=E.getAttribute("href");if(c)if(-1===c.toLowerCase().indexOf("https:")&&-1===c.toLowerCase().indexOf("http:")&&0!==c.indexOf("//")){let O=S.protocol+"//"+S.host;if(0===c.indexOf("/"))O+=c;else{const x=S.pathname.split("/");x.pop(),O+=x.join("/")+"/"+c}U.push(O)}else 0===c.indexOf("//")?U.push(S.protocol+c):U.push(c)}}return U}(),name:I}}},41781:($,h,s)=>{s.d(h,{_b:()=>S,lR:()=>y,oC:()=>D,yb:()=>T});var n=s(2024),v=s(93287);function D(m){const t=parseInt(m+""),A=3600*Math.floor((new Date).getTime()/36e5),I=[];let N=t;for(;N<A;)I.push(N),N+=3600;return I}const T=n.O$.from("1000000000000000000");function S(m){return n.O$.from(new v.Z(m.toString()).sqrt().toFixed().split(".")[0])}function y(m){return m>0?[parseInt(m/864e5+"")+"d",parseInt(m%864e5/36e5+"")+"h",parseInt(m%36e5/6e4+"")+"m",parseInt(m%6e4/1e3+"")+"s"].join(":"):[" -- d"," -- h"," -- m"," -- s"].join(":")}},92928:($,h,s)=>{s.r(h),s.d(h,{SearchTokenDialogComponent:()=>P,SearchTokenDialogModule:()=>U});var n=s(8239),v=s(88692),D=s(9638),T=s(88696),S=s(83331),y=s(99369),m=s(57445),t=s(64537),A=s(19376),I=s(96195);function N(f,E){1&f&&(t.TgZ(0,"div",14)(1,"mat-icon",15),t._uU(2,"autorenew"),t.qZA()())}function R(f,E){if(1&f){const d=t.EpF();t.TgZ(0,"div",17),t.NdJ("click",function(){const x=t.CHM(d).$implicit,j=t.oxw(2);return t.KtG(j.selectToken(x))}),t.TgZ(1,"div",18),t._UZ(2,"img",19),t.qZA(),t.TgZ(3,"div",20),t._uU(4),t.qZA(),t.TgZ(5,"div",21),t._uU(6),t.qZA()()}if(2&f){const d=E.$implicit,c=t.oxw(2);t.xp6(2),t.Q6J("src",c.getTokenIcon(d.address),t.LSH),t.xp6(2),t.Oqu(d.name),t.xp6(2),t.Oqu(d.symbol)}}function W(f,E){if(1&f&&(t.ynx(0),t.YNc(1,R,7,3,"div",16),t.BQk()),2&f){const d=t.oxw();t.xp6(1),t.Q6J("ngForOf",d.searchResult)}}function L(f,E){if(1&f&&(t.TgZ(0,"div",22),t._uU(1),t.qZA()),2&f){const d=t.oxw();t.xp6(1),t.hij("No ",0==d.tokenType?"ERC20 token":"NFT"," results found.")}}let P=(()=>{class f{constructor(d,c,O){this.dialogRef=d,this.cacheService=c,this.web3Service=O,this.tokenType=0,this.searchResult=[],this.isLoading=!1}ngOnInit(){this.filter("")}selectToken(d){this.dialogRef.close(d)}filter(d){var c=this;return(0,n.Z)(function*(){if(c.isLoading=!0,d.startsWith("0x")&&42==d.length)try{c.searchResult=(yield c.web3Service.isERC721(d))&&1==c.tokenType||!(yield c.web3Service.isERC721(d))&&0==c.tokenType?[{address:d.toLowerCase(),name:(yield c.web3Service.getTokenName(d))[0],symbol:(yield c.web3Service.getTokenSymbol(d))[0]}]:[]}catch{c.searchResult=[]}else yield(0,m.z)(c.cacheService.searchToken(d,c.tokenType)).then(O=>c.searchResult=O);c.isLoading=!1})()}applyFilter(d){var c=this;return(0,n.Z)(function*(){const O=d.target.value.trim();c.filter(O)})()}getTokenIcon(d){return this.cacheService.getTokenIcon(d)}}return f.\u0275fac=function(d){return new(d||f)(t.Y36(T.so),t.Y36(A.Q),t.Y36(I.U))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-search-token-dialog"]],decls:19,vars:6,consts:[[1,"search-token-wrapper"],[1,"header"],[1,"title"],[1,"spacer"],["color","primary","mat-dialog-close","",2,"cursor","pointer"],[1,"search"],[1,"search-icon"],["color","primary"],["type","text","placeholder","search name, symbol or paste address....",1,"search-input",3,"keyup"],[3,"nzIndicator","nzDelay","nzSpinning"],["indicatorTemplate",""],[1,"search-result"],[4,"ngIf","ngIfElse"],["noData",""],[2,"display","flex","width","100%","height","100%","align-items","center","justify-content","center"],["color","primary",1,"spin-icon"],["class","search-result-item",3,"click",4,"ngFor","ngForOf"],[1,"search-result-item",3,"click"],[1,"token-icon"],["alt","name",3,"src"],[1,"token-name"],[1,"token-symbol"],[2,"text-align","center","color","rgb(185, 185, 185)","font-size","18px"]],template:function(d,c){if(1&d&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA(),t._UZ(4,"span",3),t.TgZ(5,"mat-icon",4),t._uU(6,"cancel"),t.qZA()(),t.TgZ(7,"div",5)(8,"div",6)(9,"mat-icon",7),t._uU(10,"search"),t.qZA()(),t.TgZ(11,"input",8),t.NdJ("keyup",function(x){return c.applyFilter(x)}),t.qZA()(),t.TgZ(12,"nz-spin",9),t.YNc(13,N,3,0,"ng-template",null,10,t.W1O),t.TgZ(15,"div",11),t.YNc(16,W,2,1,"ng-container",12),t.YNc(17,L,2,1,"ng-template",null,13,t.W1O),t.qZA()()()),2&d){const O=t.MAs(14),x=t.MAs(18);t.xp6(3),t.hij("Select a ",0==c.tokenType?"token":"NFT",""),t.xp6(9),t.Q6J("nzIndicator",O)("nzDelay",200)("nzSpinning",c.isLoading),t.xp6(4),t.Q6J("ngIf",c.searchResult.length>0)("ngIfElse",x)}},dependencies:[v.sg,v.O5,S.Hw,T.ZT,y.W],styles:[".search-token-wrapper[_ngcontent-%COMP%]{margin:24px 0;width:540px;padding:12px;box-sizing:border-box;border-radius:16px;transition:all .2s;background:#fff;border:2px solid rgb(228,178,201)}.header[_ngcontent-%COMP%]{height:48px;width:100%;display:flex;justify-content:center}.title[_ngcontent-%COMP%]{font-size:18px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.search[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:8px;border:2px solid rgb(255,226,236);background:rgb(255,255,255);display:grid;grid-template-columns:40px auto;justify-items:center;align-items:center;box-sizing:border-box;padding:0 0 0 12px;overflow:hidden;margin-bottom:12px}.search-input[_ngcontent-%COMP%]{width:100%;height:80%;background:none;border:none;-webkit-appearance:none;appearance:none;outline:0;color:#000;font-size:14px}.search-icon[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.search-result[_ngcontent-%COMP%]{width:100%;height:276px;overflow-x:hidden;overflow-y:auto;background:rgb(255,255,255);padding-right:8px}.search-result-item[_ngcontent-%COMP%]{width:100%;height:60px;border-radius:12px;padding:6px 12px;display:grid;align-items:center;grid-template-columns:40px 1fr 1fr;grid-template-rows:24px 24px;border:1px solid rgb(255,236,244);cursor:pointer;transition:all .2s;margin-bottom:12px}.search-result-item[_ngcontent-%COMP%]:hover{background:rgb(255,247,250);border:1px solid rgb(255,226,236)}.token-icon[_ngcontent-%COMP%]{grid-column-start:span 1;grid-row-start:span 2;justify-self:start}.token-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:24px;width:24px;border-radius:50%;overflow:hidden;background:#fff}.token-name[_ngcontent-%COMP%]{grid-column-start:span 2;grid-row-start:span 1;font-size:24px;line-height:24px}.token-symbol[_ngcontent-%COMP%]{grid-column-start:span 1;grid-row-start:span 1;align-self:center;color:#d3d2d2}.token-balance[_ngcontent-%COMP%]{grid-column-start:span 1;grid-row-start:span 2;justify-self:end}.spin-icon[_ngcontent-%COMP%]{transform:rotate(45deg);animation:rotate 1.2s infinite linear}@keyframes rotate{to{transform:rotate(405deg)}}"]}),f})(),U=(()=>{class f{}return f.\u0275fac=function(d){return new(d||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[v.ez,S.Ps,D.ot,T.Is,y.j]}),f})()},53863:($,h,s)=>{s.d(h,{mZ:()=>re,z1:()=>oe});var n=s(9779),v=s(84945),D=s(87241),T=s(5557),S=s(83933),y=s(74970),m=s(98168),t=s(65598),A=s(65619),I=s(27969),N=s(33568),R=s(61528),W=s(88692),L=s(64537);function U(u){return Boolean(u.parentElement&&"picture"===u.parentElement.nodeName.toLowerCase())}function f(u){return"img"===u.nodeName.toLowerCase()}function E(u,e,i){return f(u)?i&&"srcset"in u?u.srcset=e:u.src=e:u.style.backgroundImage=`url('${e}')`,u}function d(u){return e=>{const i=e.parentElement.getElementsByTagName("source");for(let g=0;g<i.length;g++){const w=i[g].getAttribute(u);w&&("srcset"in i[g]?i[g].srcset=w:i[g].src=w)}}}const c=d("defaultImage"),O=d("lazyLoad"),x=d("errorImage");function j(u){return(e,i,g)=>{f(e)&&U(e)&&u(e),i&&E(e,i,g)}}const l=j(c),z=j(O),r=j(x);function G(u,e){u.className=u.className.replace(e,"")}function Y(u,e){u.className.includes(e)||(u.className+=` ${e}`)}class V extends class te extends class p{constructor(){this.navigator=function P(){return typeof window<"u"?window.navigator:void 0}()}setPlatformId(e){this.platformId=e}onDestroy(e){}onAttributeChange(e){}}{setup(e){l(e.element,e.defaultImagePath,e.useSrcset),e.imagePath&&Y(e.element,"ng-lazyloading"),function ee(u,e){return u.className&&u.className.includes(e)}(e.element,"ng-lazyloaded")&&G(e.element,"ng-lazyloaded")}finally(e){Y(e.element,"ng-lazyloaded"),G(e.element,"ng-lazyloading")}loadImage(e){if(this.skipLazyLoading(e))return[e.imagePath];const{element:i,useSrcset:g,imagePath:w,decode:M}=e;let b;return f(i)&&U(i)?(b=i.parentNode.cloneNode(!0).getElementsByTagName("img")[0],O(b),E(b,w,g)):(b=new Image,f(i)&&i.referrerPolicy&&(b.referrerPolicy=i.referrerPolicy),f(i)&&i.sizes&&(b.sizes=i.sizes),g&&"srcset"in b?b.srcset=w:b.src=w),M&&b.decode?b.decode().then(()=>w):new Promise((Z,H)=>{b.onload=()=>Z(w),b.onerror=()=>H(null)})}setErrorImage(e,i){const{element:g,useSrcset:w,errorImagePath:M}=i;r(g,M,w),Y(g,"ng-failed-lazyloaded")}setLoadedImage(e,i){const{element:g,useSrcset:w}=i;z(g,e,w)}isDisabled(){return(0,W.PM)(this.platformId)&&!this.isBot()}skipLazyLoading(e){return this.isBot(e)}isBot(e){return!!this.navigator?.userAgent&&/googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot|prerender/i.test(this.navigator.userAgent)}}{constructor(){super(...arguments),this.observers=new WeakMap,this.intersectionSubject=new n.x,this.uniqKey={}}getObservable(e){if(this.skipLazyLoading(e))return(0,v.of)({isIntersecting:!0});if(e.customObservable)return e.customObservable;const i=e.scrollContainer||this.uniqKey,g={root:e.scrollContainer||null};e.offset&&(g.rootMargin=`${e.offset}px`);let w=this.observers.get(i);return w||(w=new IntersectionObserver(M=>this.loadingCallback(M),g),this.observers.set(i,w)),w.observe(e.element),D.y.create(M=>{const b=this.intersectionSubject.pipe((0,y.h)(Z=>Z.target===e.element)).subscribe(M);return()=>{b.unsubscribe(),w.unobserve(e.element)}})}isVisible(e){return e.isIntersecting}loadingCallback(e){e.forEach(i=>this.intersectionSubject.next(i))}}const q=new L.OlP("LazyLoadImageHooks");let oe=(()=>{class u{constructor(i,g,w,M){this.onStateChange=new L.vpe,this.elementRef=i,this.ngZone=g,this.propertyChanges$=new T.t,this.hooks=M,this.hooks.setPlatformId(w),this.uid=Math.random().toString(36).substr(2,9)}ngOnChanges(){!0===this.debug&&!this.debugSubscription&&(this.debugSubscription=this.onStateChange.subscribe(i=>console.log(i))),this.propertyChanges$.next({element:this.elementRef.nativeElement,imagePath:this.lazyImage,defaultImagePath:this.defaultImage,errorImagePath:this.errorImage,useSrcset:this.useSrcset,offset:this.offset?0|this.offset:0,scrollContainer:this.scrollTarget,customObservable:this.customObservable,decode:this.decode,onStateChange:this.onStateChange,id:this.uid})}ngAfterContentInit(){if(this.hooks.isDisabled())return null;this.ngZone.runOutsideAngular(()=>{this.loadSubscription=this.propertyChanges$.pipe((0,m.b)(i=>this.hooks.onAttributeChange(i)),(0,m.b)(i=>i.onStateChange.emit({reason:"setup"})),(0,m.b)(i=>this.hooks.setup(i)),(0,R.w)(i=>i.imagePath?this.hooks.getObservable(i).pipe(function ne(u,e){return i=>i.pipe((0,m.b)(g=>e.onStateChange.emit({reason:"observer-emit",data:g})),(0,y.h)(g=>u.isVisible(g,e)),(0,t.q)(1),(0,m.b)(()=>e.onStateChange.emit({reason:"start-loading"})),(0,A.z)(()=>u.loadImage(e)),(0,m.b)(()=>e.onStateChange.emit({reason:"mount-image"})),(0,m.b)(g=>u.setLoadedImage(g,e)),(0,m.b)(()=>e.onStateChange.emit({reason:"loading-succeeded"})),(0,I.U)(()=>!0),(0,N.K)(g=>(e.onStateChange.emit({reason:"loading-failed",data:g}),u.setErrorImage(g,e),(0,v.of)(!1))),(0,m.b)(()=>{e.onStateChange.emit({reason:"finally"}),u.finally(e)}))}(this.hooks,i)):(0,S.F)())).subscribe({next:()=>null})})}ngOnDestroy(){this.propertyChanges$.pipe((0,t.q)(1)).subscribe({next:i=>this.hooks.onDestroy(i)}).unsubscribe(),this.loadSubscription?.unsubscribe(),this.debugSubscription?.unsubscribe()}}return u.\u0275fac=function(i){return new(i||u)(L.Y36(L.SBq),L.Y36(L.R0b),L.Y36(L.Lbi),L.Y36(q))},u.\u0275dir=L.lG2({type:u,selectors:[["","lazyLoad",""]],inputs:{lazyImage:["lazyLoad","lazyImage"],defaultImage:"defaultImage",errorImage:"errorImage",scrollTarget:"scrollTarget",customObservable:"customObservable",offset:"offset",useSrcset:"useSrcset",decode:"decode",debug:"debug"},outputs:{onStateChange:"onStateChange"},features:[L.TTD]}),u})(),re=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=L.oAB({type:u}),u.\u0275inj=L.cJS({providers:[{provide:q,useClass:V}]}),u})();class F{constructor(e,i,g,w){this.left=e,this.top=i,this.right=g,this.bottom=w}static fromElement(e){const{left:i,top:g,right:w,bottom:M}=e.getBoundingClientRect();return 0===i&&0===g&&0===w&&0===M?F.empty:new F(i,g,w,M)}static fromWindow(e){return new F(0,0,e.innerWidth,e.innerHeight)}inflate(e){this.left-=e,this.top-=e,this.right+=e,this.bottom+=e}intersectsWith(e){return e.left<this.right&&this.left<e.right&&e.top<this.bottom&&this.top<e.bottom}getIntersectionWith(e){const i=Math.max(this.left,e.left),g=Math.max(this.top,e.top),w=Math.min(this.right,e.right),M=Math.min(this.bottom,e.bottom);return w>=i&&M>=g?new F(i,g,w,M):F.empty}}F.empty=new F(0,0,0,0)},3322:($,h,s)=>{s.d(h,{e:()=>S,h:()=>T});const n=["moz","ms","webkit"];function T(y){if(typeof window>"u")return null;if(window.cancelAnimationFrame)return window.cancelAnimationFrame(y);const m=n.filter(t=>`${t}CancelAnimationFrame`in window||`${t}CancelRequestAnimationFrame`in window)[0];return m?(window[`${m}CancelAnimationFrame`]||window[`${m}CancelRequestAnimationFrame`]).call(this,y):clearTimeout(y)}const S=function D(){if(typeof window>"u")return()=>0;if(window.requestAnimationFrame)return window.requestAnimationFrame.bind(window);const y=n.filter(m=>`${m}RequestAnimationFrame`in window)[0];return y?window[`${y}RequestAnimationFrame`]:function v(){let y=0;return function(m){const t=(new Date).getTime(),A=Math.max(0,16-(t-y)),I=setTimeout(()=>{m(t+A)},A);return y=t+A,I}}()}()},2550:($,h,s)=>{s.d(h,{a:()=>T,w:()=>D});var n=s(56673),v=s(64537);let D=(()=>{class S{constructor(m,t){this.elementRef=m,this.renderer=t,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}setHiddenAttribute(){this.hidden?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","string"==typeof this.hidden?this.hidden:""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}}return S.\u0275fac=function(m){return new(m||S)(v.Y36(v.SBq),v.Y36(v.Qsj))},S.\u0275dir=v.lG2({type:S,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},features:[v.TTD]}),S})(),T=(()=>{class S{}return S.\u0275fac=function(m){return new(m||S)},S.\u0275mod=v.oAB({type:S}),S.\u0275inj=v.cJS({imports:[n.ud]}),S})()},83114:($,h,s)=>{s.d(h,{H0:()=>j,Xw:()=>f,ng:()=>x,yg:()=>c,yx:()=>d});var n=s(64537),v=s(66792),D=s(88692),T=s(64762),S=s(35076);const m=["nzType","avatar"],t=["nzType","input"];function I(l,z){if(1&l&&(n.TgZ(0,"div",5),n._UZ(1,"nz-skeleton-element",6),n.qZA()),2&l){const r=n.oxw(2);n.xp6(1),n.Q6J("nzSize",r.avatar.size||"default")("nzShape",r.avatar.shape||"circle")}}function N(l,z){if(1&l&&n._UZ(0,"h3",7),2&l){const r=n.oxw(2);n.Udp("width",r.toCSSUnit(r.title.width))}}function R(l,z){if(1&l&&n._UZ(0,"li"),2&l){const r=z.index,p=n.oxw(3);n.Udp("width",p.toCSSUnit(p.widthList[r]))}}function W(l,z){if(1&l&&(n.TgZ(0,"ul",8),n.YNc(1,R,1,2,"li",9),n.qZA()),2&l){const r=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",r.rowsList)}}function L(l,z){if(1&l&&(n.ynx(0),n.YNc(1,I,2,2,"div",1),n.TgZ(2,"div",2),n.YNc(3,N,1,2,"h3",3),n.YNc(4,W,2,1,"ul",4),n.qZA(),n.BQk()),2&l){const r=n.oxw();n.xp6(1),n.Q6J("ngIf",!!r.nzAvatar),n.xp6(2),n.Q6J("ngIf",!!r.nzTitle),n.xp6(1),n.Q6J("ngIf",!!r.nzParagraph)}}function P(l,z){1&l&&(n.ynx(0),n.Hsn(1),n.BQk())}const U=["*"];let f=(()=>{class l{constructor(){this.nzActive=!1,this.nzBlock=!1}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275dir=n.lG2({type:l,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(r,p){2&r&&n.ekj("ant-skeleton-active",p.nzActive)("ant-skeleton-block",p.nzBlock)},inputs:{nzActive:"nzActive",nzType:"nzType",nzBlock:"nzBlock"}}),(0,T.gn)([(0,v.yF)()],l.prototype,"nzBlock",void 0),l})(),d=(()=>{class l{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(r){if(r.nzSize&&"number"==typeof this.nzSize){const p=`${this.nzSize}px`;this.styleMap={width:p,height:p,"line-height":p}}else this.styleMap={}}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},features:[n.TTD],attrs:m,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(r,p){1&r&&n._UZ(0,"span",0),2&r&&(n.ekj("ant-skeleton-avatar-square","square"===p.nzShape)("ant-skeleton-avatar-circle","circle"===p.nzShape)("ant-skeleton-avatar-lg","large"===p.nzSize)("ant-skeleton-avatar-sm","small"===p.nzSize),n.Q6J("ngStyle",p.styleMap))},dependencies:[D.PC],encapsulation:2,changeDetection:0}),l})(),c=(()=>{class l{constructor(){this.nzSize="default"}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["nz-skeleton-element","nzType","input"]],inputs:{nzSize:"nzSize"},attrs:t,decls:1,vars:4,consts:[[1,"ant-skeleton-input"]],template:function(r,p){1&r&&n._UZ(0,"span",0),2&r&&n.ekj("ant-skeleton-input-lg","large"===p.nzSize)("ant-skeleton-input-sm","small"===p.nzSize)},encapsulation:2,changeDetection:0}),l})(),x=(()=>{class l{constructor(r,p,C){this.cdr=r,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[],p.addClass(C.nativeElement,"ant-skeleton")}toCSSUnit(r=""){return(0,v.WX)(r)}getTitleProps(){const r=!!this.nzAvatar,p=!!this.nzParagraph;let C="";return!r&&p?C="38%":r&&p&&(C="50%"),{width:C,...this.getProps(this.nzTitle)}}getAvatarProps(){return{shape:this.nzTitle&&!this.nzParagraph?"square":"circle",size:"large",...this.getProps(this.nzAvatar)}}getParagraphProps(){const r=!!this.nzAvatar,p=!!this.nzTitle,C={};return(!r||!p)&&(C.width="61%"),C.rows=!r&&p?3:2,{...C,...this.getProps(this.nzParagraph)}}getProps(r){return r&&"object"==typeof r?r:{}}getWidthList(){const{width:r,rows:p}=this.paragraph;let C=[];return r&&Array.isArray(r)?C=r:r&&!Array.isArray(r)&&(C=[],C[p-1]=r),C}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(r){(r.nzTitle||r.nzAvatar||r.nzParagraph)&&this.updateProps()}}return l.\u0275fac=function(r){return new(r||l)(n.Y36(n.sBO),n.Y36(n.Qsj),n.Y36(n.SBq))},l.\u0275cmp=n.Xpm({type:l,selectors:[["nz-skeleton"]],hostVars:6,hostBindings:function(r,p){2&r&&n.ekj("ant-skeleton-with-avatar",!!p.nzAvatar)("ant-skeleton-active",p.nzActive)("ant-skeleton-round",!!p.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],features:[n.TTD],ngContentSelectors:U,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(r,p){1&r&&(n.F$t(),n.YNc(0,L,5,3,"ng-container",0),n.YNc(1,P,2,0,"ng-container",0)),2&r&&(n.Q6J("ngIf",p.nzLoading),n.xp6(1),n.Q6J("ngIf",!p.nzLoading))},dependencies:[D.sg,D.O5,f,d],encapsulation:2,changeDetection:0}),l})(),j=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[S.vT,D.ez]}),l})()}}]);