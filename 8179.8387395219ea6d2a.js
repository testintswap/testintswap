"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[8179],{18179:(we,z,k)=>{k.r(z),k.d(z,{default:()=>_e});var E=k(8239),e=k(16161),j=k(30111),W=k(51927),U=k(66466),F=k(296);function N(o,{from:t,to:n},i={}){const r=getComputedStyle(o),l="none"===r.transform?"":r.transform,[c,d]=r.transformOrigin.split(" ").map(parseFloat),s=t.left+t.width*c/n.width-(n.left+c),a=t.top+t.height*d/n.height-(n.top+d),{delay:f=0,duration:u=(v=>120*Math.sqrt(v)),easing:m=e.am}=i;return{delay:f,duration:(0,e.Z)(u)?u(Math.sqrt(s*s+a*a)):u,easing:m,css:(v,b)=>`transform: ${l} translate(${b*s}px, ${b*a}px) scale(${v+b*t.width/n.width}, ${v+b*t.height/n.height});`}}function H(o){(0,e.a)(o,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function V(o){let t,n;return{c(){t=(0,e.j)("div"),(0,e.k)(t,"class","border svelte-13cuwwo"),(0,e.k)(t,"style",n=`\n    width: ${o[2]-2*o[3]}px; \n    height: ${o[2]-2*o[3]}px; \n    border-color: var(${o[1]}); \n    padding: ${o[3]}px; \n    background-color: ${o[4]};\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  `)},m(i,r){(0,e.b)(i,t,r),t.innerHTML=o[0]},p(i,[r]){1&r&&(t.innerHTML=i[0]),30&r&&n!==(n=`\n    width: ${i[2]-2*i[3]}px; \n    height: ${i[2]-2*i[3]}px; \n    border-color: var(${i[1]}); \n    padding: ${i[3]}px; \n    background-color: ${i[4]};\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  `)&&(0,e.k)(t,"style",n)},i:e.n,o:e.n,d(i){i&&(0,e.d)(t)}}}function Z(o,t,n){let{icon:i}=t,{borderColorVar:r}=t,{size:l}=t,{padding:c=0}=t,{background:d="transparent"}=t;return o.$$set=s=>{"icon"in s&&n(0,i=s.icon),"borderColorVar"in s&&n(1,r=s.borderColorVar),"size"in s&&n(2,l=s.size),"padding"in s&&n(3,c=s.padding),"background"in s&&n(4,d=s.background)},[i,r,l,c,d]}k(23845),k(18560),k(14696),k(93287),k(5544),k(17522),k(41413),k(42624);class $ extends e.S{constructor(t){super(),(0,e.i)(this,t,Z,V,e.s,{icon:0,borderColorVar:1,size:2,padding:3,background:4},H)}}function J(o){(0,e.a)(o,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function L(o){let t,n,i,r,c,d,s,f,l=e.an[o[1].type].eventIcon+"",a=!o[1].id.includes("customNotification")&&!o[1].id.includes("preflight"),u="pending"===o[1].type&&x(),m=a&&T(o);return{c(){t=(0,e.j)("div"),u&&u.c(),n=(0,e.G)(),i=(0,e.j)("div"),r=(0,e.j)("div"),s=(0,e.G)(),m&&m.c(),(0,e.k)(r,"class",c=(0,e.l)("notification-icon flex items-center justify-center "+("pending"===o[1].type?"pending-icon":""))+" svelte-jvic9v"),(0,e.k)(i,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),(0,e.k)(i,"style",d=`background:${e.an[o[1].type].backgroundColor}; color: ${e.an[o[1].type].iconColor||""}; ${"pending"===o[1].type?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${e.an[o[1].type].borderColor}`}; `),(0,e.k)(t,"class","relative")},m(v,b){(0,e.b)(v,t,b),u&&u.m(t,null),(0,e.m)(t,n),(0,e.m)(t,i),(0,e.m)(i,r),r.innerHTML=l,(0,e.m)(t,s),m&&m.m(t,null),f=!0},p(v,b){"pending"===v[1].type?u||(u=x(),u.c(),u.m(t,n)):u&&(u.d(1),u=null),(!f||2&b)&&l!==(l=e.an[v[1].type].eventIcon+"")&&(r.innerHTML=l),(!f||2&b&&c!==(c=(0,e.l)("notification-icon flex items-center justify-center "+("pending"===v[1].type?"pending-icon":""))+" svelte-jvic9v"))&&(0,e.k)(r,"class",c),(!f||2&b&&d!==(d=`background:${e.an[v[1].type].backgroundColor}; color: ${e.an[v[1].type].iconColor||""}; ${"pending"===v[1].type?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${e.an[v[1].type].borderColor}`}; `))&&(0,e.k)(i,"style",d),2&b&&(a=!v[1].id.includes("customNotification")&&!v[1].id.includes("preflight")),a?m?(m.p(v,b),2&b&&(0,e.x)(m,1)):(m=T(v),m.c(),(0,e.x)(m,1),m.m(t,null)):m&&((0,e.y)(),(0,e.A)(m,1,1,()=>{m=null}),(0,e.z)())},i(v){f||((0,e.x)(m),f=!0)},o(v){(0,e.A)(m),f=!1},d(v){v&&(0,e.d)(t),u&&u.d(),m&&m.d()}}}function x(o){let t;return{c(){t=(0,e.j)("div"),(0,e.k)(t,"class","border-action absolute svelte-jvic9v")},m(n,i){(0,e.b)(n,t,i)},d(n){n&&(0,e.d)(t)}}}function T(o){let t,n,i;return n=new $({props:{icon:o[0].icon,size:16,background:o[0].color,borderColorVar:"--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",padding:3}}),{c(){t=(0,e.j)("div"),(0,e.F)(n.$$.fragment),(0,e.k)(t,"class","absolute chain-icon-container svelte-jvic9v")},m(r,l){(0,e.b)(r,t,l),(0,e.I)(n,t,null),i=!0},p(r,l){const c={};1&l&&(c.icon=r[0].icon),1&l&&(c.background=r[0].color),n.$set(c)},i(r){i||((0,e.x)(n.$$.fragment,r),i=!0)},o(r){(0,e.A)(n.$$.fragment,r),i=!1},d(r){r&&(0,e.d)(t),(0,e.K)(n)}}}function Y(o){let t,n,i=o[1].type&&L(o);return{c(){i&&i.c(),t=(0,e.e)()},m(r,l){i&&i.m(r,l),(0,e.b)(r,t,l),n=!0},p(r,[l]){r[1].type?i?(i.p(r,l),2&l&&(0,e.x)(i,1)):(i=L(r),i.c(),(0,e.x)(i,1),i.m(t.parentNode,t)):i&&((0,e.y)(),(0,e.A)(i,1,1,()=>{i=null}),(0,e.z)())},i(r){n||((0,e.x)(i),n=!0)},o(r){(0,e.A)(i),n=!1},d(r){i&&i.d(r),r&&(0,e.d)(t)}}}function X(o,t,n){let{chainStyles:i=e.a5}=t,{notification:r}=t;return o.$$set=l=>{"chainStyles"in l&&n(0,i=l.chainStyles),"notification"in l&&n(1,r=l.notification)},[i,r]}class Q extends e.S{constructor(t){super(),(0,e.i)(this,t,X,Y,e.s,{chainStyles:0,notification:1},J)}}function q(o){(0,e.a)(o,"svelte-pm7idu","div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(\n      --notify-onboard-timer-color,\n      var(--onboard-gray-300, var(--gray-300))\n    );margin-left:4px}")}function M(o){let t,n,r,l,i=o[2](o[1]-o[0])+"";return{c(){t=(0,e.t)("-\n    "),n=(0,e.j)("span"),r=(0,e.t)(i),l=(0,e.t)("\n    ago"),(0,e.k)(n,"class","svelte-pm7idu")},m(c,d){(0,e.b)(c,t,d),(0,e.b)(c,n,d),(0,e.m)(n,r),(0,e.b)(c,l,d)},p(c,d){3&d&&i!==(i=c[2](c[1]-c[0])+"")&&(0,e.v)(r,i)},d(c){c&&(0,e.d)(t),c&&(0,e.d)(n),c&&(0,e.d)(l)}}}function ee(o){let t,n=o[0]&&M(o);return{c(){t=(0,e.j)("div"),n&&n.c(),(0,e.k)(t,"class","time svelte-pm7idu")},m(i,r){(0,e.b)(i,t,r),n&&n.m(t,null)},p(i,[r]){i[0]?n?n.p(i,r):(n=M(i),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i:e.n,o:e.n,d(i){i&&(0,e.d)(t),n&&n.d()}}}function te(o,t,n){let i,r;(0,e.c)(o,j._,a=>n(3,i=a)),(0,e.c)(o,j.SP,a=>n(4,r=a));let{startTime:l}=t,d=Date.now();const s=setInterval(()=>{n(1,d=Date.now())},1e3);return(0,e.ak)(()=>{clearInterval(s)}),o.$$set=a=>{"startTime"in a&&n(0,l=a.startTime)},[l,d,function c(a){const f=Math.floor(a/1e3),u=f<0?0:f;return u>=60?`${Math.floor(u/60).toLocaleString(r)} ${i("notify.time.minutes")}`:`${u.toLocaleString(r)} ${i("notify.time.seconds")}`}]}class ne extends e.S{constructor(t){super(),(0,e.i)(this,t,te,ee,e.s,{startTime:0},q)}}function ie(o){(0,e.a)(o,"svelte-1otz6tt","div.notify-transaction-data.svelte-1otz6tt{font-size:var(\n      --notify-onboard-transaction-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(\n      --notify-onboard-hash-time-font-size,\n      var(--onboard-font-size-7, var(--font-size-7))\n    );line-height:var(\n      --notify-onboard-hash-time-font-line-height,\n      var(--onboard-font-line-height-4, var(--font-line-height-4))\n    )}.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-address-hash-color,\n      var(--onboard-primary-200, var(--primary-200))\n    )}a.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-anchor-color,\n      var(--onboard-primary-400, var(--primary-400))\n    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(\n      --notify-onboard-font-size-5,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}")}function O(o){let t,n,i,r;function l(s,a){return s[0].link?re:oe}let c=l(o),d=c(o);return i=new ne({props:{startTime:o[0].startTime}}),{c(){t=(0,e.j)("span"),d.c(),n=(0,e.G)(),(0,e.F)(i.$$.fragment),(0,e.k)(t,"class","hash-time svelte-1otz6tt")},m(s,a){(0,e.b)(s,t,a),d.m(t,null),(0,e.m)(t,n),(0,e.I)(i,t,null),r=!0},p(s,a){c===(c=l(s))&&d?d.p(s,a):(d.d(1),d=c(s),d&&(d.c(),d.m(t,n)));const f={};1&a&&(f.startTime=s[0].startTime),i.$set(f)},i(s){r||((0,e.x)(i.$$.fragment,s),r=!0)},o(s){(0,e.A)(i.$$.fragment,s),r=!1},d(s){s&&(0,e.d)(t),d.d(),(0,e.K)(i)}}}function oe(o){let t,i,n=(0,e.E)(o[0].id)+"";return{c(){t=(0,e.j)("div"),i=(0,e.t)(n),(0,e.k)(t,"class","address-hash svelte-1otz6tt")},m(r,l){(0,e.b)(r,t,l),(0,e.m)(t,i)},p(r,l){1&l&&n!==(n=(0,e.E)(r[0].id)+"")&&(0,e.v)(i,n)},d(r){r&&(0,e.d)(t)}}}function re(o){let t,i,r,n=(0,e.E)(o[0].id)+"";return{c(){t=(0,e.j)("a"),i=(0,e.t)(n),(0,e.k)(t,"class","address-hash svelte-1otz6tt"),(0,e.k)(t,"href",r=o[0].link),(0,e.k)(t,"target","_blank"),(0,e.k)(t,"rel","noreferrer noopener")},m(l,c){(0,e.b)(l,t,c),(0,e.m)(t,i)},p(l,c){1&c&&n!==(n=(0,e.E)(l[0].id)+"")&&(0,e.v)(i,n),1&c&&r!==(r=l[0].link)&&(0,e.k)(t,"href",r)},d(l){l&&(0,e.d)(t)}}}function le(o){let t,n,r,l,d,i=o[0].message+"",c=o[0].id&&!o[0].id.includes("customNotification")&&!o[0].id.includes("preflight"),s=c&&O(o);return{c(){t=(0,e.j)("div"),n=(0,e.j)("span"),r=(0,e.t)(i),l=(0,e.G)(),s&&s.c(),(0,e.k)(n,"class","transaction-status svelte-1otz6tt"),(0,e.k)(t,"class","flex flex-column notify-transaction-data svelte-1otz6tt")},m(a,f){(0,e.b)(a,t,f),(0,e.m)(t,n),(0,e.m)(n,r),(0,e.m)(t,l),s&&s.m(t,null),d=!0},p(a,[f]){(!d||1&f)&&i!==(i=a[0].message+"")&&(0,e.v)(r,i),1&f&&(c=a[0].id&&!a[0].id.includes("customNotification")&&!a[0].id.includes("preflight")),c?s?(s.p(a,f),1&f&&(0,e.x)(s,1)):(s=O(a),s.c(),(0,e.x)(s,1),s.m(t,null)):s&&((0,e.y)(),(0,e.A)(s,1,1,()=>{s=null}),(0,e.z)())},i(a){d||((0,e.x)(s),d=!0)},o(a){(0,e.A)(s),d=!1},d(a){a&&(0,e.d)(t),s&&s.d()}}}function ae(o,t,n){let{notification:i}=t;return o.$$set=r=>{"notification"in r&&n(0,i=r.notification)},[i]}class se extends e.S{constructor(t){super(),(0,e.i)(this,t,ae,le,e.s,{notification:0},ie)}}const fe=["txPool"],ce=["main","matic-main"],ue=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],D=o=>fe.includes(o),A=o=>ce.includes(o),I=o=>o&&ue.includes(o.label);function R(o){return P.apply(this,arguments)}function P(){return(P=(0,E.Z)(function*({type:o,wallet:t,transaction:n}){const{from:i,input:r,value:l,to:c,nonce:d,gas:s,network:a}=n,f=e.ao[a],{gasPriceProbability:u}=e.a3.get().notify.replacement,{gas:m,apiKey:v}=e.ae,[b]=yield m.get({chains:[e.ao[a]],endpoint:"blockPrices",apiKey:v}),{maxFeePerGas:p,maxPriorityFeePerGas:y}=b.blockPrices[0].estimatedPrices.find(({confidence:w})=>w===("speedup"===o?u.speedup:u.cancel)),g=(0,e.ap)(p),_=(0,e.ap)(y),h="0x"===r?{}:{data:r};return t.provider.request({method:"eth_sendTransaction",params:[{type:"0x2",from:i,to:"cancel"===o?i:c,chainId:parseInt(f),value:`${F.O$.from(l).toHexString()}`,nonce:(0,e.aq)(d),gasLimit:(0,e.aq)(s),maxFeePerGas:g,maxPriorityFeePerGas:_,...h}]})})).apply(this,arguments)}function ve(o){(0,e.a)(o,"svelte-ftkynd",".bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(\n      --notify-onboard-border-radius,\n      var(--onboard-border-radius-4, var(--border-radius-4))\n    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(\n      --notify-onboard-transaction-status-color,\n      var(--onboard-primary-100, var(--primary-100))\n    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(\n      --notify-onboard-dropdown-background,\n      var(--onboard-gray-700, var(--gray-700))\n    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(\n      --notify-onboard-dropdown-border-radius,\n      var(--onboard-border-radius-5, var(--border-radius-5))\n    );background-color:transparent;font-size:var(\n      --notify-onboard-dropdown-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );color:var(\n      --notify-onboard-dropdown-text-color,\n      var(--onboard-primary-400, var(--primary-400))\n    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(\n      --notify-onboard-dropdown-btn-hover-background,\n      rgba(146, 155, 237, 0.2)\n    )}")}function S(o){let t,n,i,r,l,c;return{c(){t=(0,e.j)("div"),n=(0,e.j)("button"),n.textContent="Cancel",i=(0,e.G)(),r=(0,e.j)("button"),r.textContent="Speed-up",(0,e.k)(n,"class","dropdown-button svelte-ftkynd"),(0,e.k)(r,"class","dropdown-button svelte-ftkynd"),(0,e.k)(t,"class","dropdown-buttons flex items-center justify-end svelte-ftkynd")},m(d,s){(0,e.b)(d,t,s),(0,e.m)(t,n),(0,e.m)(t,i),(0,e.m)(t,r),l||(c=[(0,e.p)(n,"click",o[9]),(0,e.p)(r,"click",o[10])],l=!0)},p:e.n,d(d){d&&(0,e.d)(t),l=!1,(0,e.L)(c)}}}function me(o){let t,n,i,r,l,c,d,s,a,f,u,m,v,b;i=new Q({props:{notification:o[0],chainStyles:e.ar[e.ao[o[0].network]]}}),l=new se({props:{notification:o[0]}});let p="txPool"===o[0].eventCode&&S(o);return{c(){t=(0,e.j)("div"),n=(0,e.j)("div"),(0,e.F)(i.$$.fragment),r=(0,e.G)(),(0,e.F)(l.$$.fragment),c=(0,e.G)(),d=(0,e.j)("div"),s=(0,e.j)("div"),a=(0,e.G)(),f=(0,e.j)("div"),p&&p.c(),(0,e.k)(s,"class","flex items-center close-icon svelte-ftkynd"),(0,e.k)(d,"class","notify-close-btn notify-close-btn-"+o[4].type+" pointer flex svelte-ftkynd"),(0,e.k)(n,"class","flex bn-notify-notification-inner svelte-ftkynd"),(0,e.k)(f,"class","dropdown svelte-ftkynd"),(0,e.H)(f,"dropdown-visible",o[2]&&o[5]&&D(o[0].eventCode)&&A(o[0].network)&&I(o[7])),(0,e.k)(t,"class",u="bn-notify-notification bn-notify-notification-"+o[0].type+"} svelte-ftkynd"),(0,e.H)(t,"bn-notify-clickable",o[0].onClick)},m(y,g){(0,e.b)(y,t,g),(0,e.m)(t,n),(0,e.I)(i,n,null),(0,e.m)(n,r),(0,e.I)(l,n,null),(0,e.m)(n,c),(0,e.m)(n,d),(0,e.m)(d,s),s.innerHTML='\n<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n',(0,e.m)(t,a),(0,e.m)(t,f),p&&p.m(f,null),m=!0,v||(b=[(0,e.p)(d,"click",(0,e.J)(o[8])),(0,e.p)(t,"mouseenter",o[11]),(0,e.p)(t,"mouseleave",o[12]),(0,e.p)(t,"click",o[13])],v=!0)},p(y,[g]){const _={};1&g&&(_.notification=y[0]),1&g&&(_.chainStyles=e.ar[e.ao[y[0].network]]),i.$set(_);const h={};1&g&&(h.notification=y[0]),l.$set(h),"txPool"===y[0].eventCode?p?p.p(y,g):(p=S(y),p.c(),p.m(f,null)):p&&(p.d(1),p=null),(!m||165&g)&&(0,e.H)(f,"dropdown-visible",y[2]&&y[5]&&D(y[0].eventCode)&&A(y[0].network)&&I(y[7])),(!m||1&g&&u!==(u="bn-notify-notification bn-notify-notification-"+y[0].type+"} svelte-ftkynd"))&&(0,e.k)(t,"class",u),(!m||1&g)&&(0,e.H)(t,"bn-notify-clickable",y[0].onClick)},i(y){m||((0,e.x)(i.$$.fragment,y),(0,e.x)(l.$$.fragment,y),m=!0)},o(y){(0,e.A)(i.$$.fragment,y),(0,e.A)(l.$$.fragment,y),m=!1},d(y){y&&(0,e.d)(t),(0,e.K)(i),(0,e.K)(l),p&&p.d(),v=!1,(0,e.L)(b)}}}function pe(o,t,n){let i,r;(0,e.c)(o,e.w,h=>n(15,i=h)),(0,e.c)(o,j._,h=>n(3,r=h));const{device:l,gas:c}=e.ae;let a,{notification:d}=t,{updateParentOnRemove:s}=t,f=!1;const u=e.as.getValue().find(({hash:h})=>h===d.id),m=u&&i.find(({accounts:h})=>!!h.find(({address:w})=>w.toLowerCase()===u.from.toLowerCase()));(0,e.ak)(()=>{clearTimeout(a)});const b=function(){var h=(0,E.Z)(function*(){try{yield R({type:"cancel",wallet:m,transaction:u})}catch{const C=`${u.hash.slice(0,9)}:txReplaceError${u.hash.slice(-5)}`;(0,e.av)({id:C,type:"hint",eventCode:"txError",message:r("notify.transaction.txReplaceError"),key:C,autoDismiss:4e3})}});return function(){return h.apply(this,arguments)}}(),p=function(){var h=(0,E.Z)(function*(){try{yield R({type:"speedup",wallet:m,transaction:u})}catch{const C=`${u.hash.slice(0,9)}:txReplaceError${u.hash.slice(-5)}`;(0,e.av)({id:C,type:"hint",eventCode:"txError",message:r("notify.transaction.txReplaceError"),key:C,autoDismiss:4e3})}});return function(){return h.apply(this,arguments)}}();return o.$$set=h=>{"notification"in h&&n(0,d=h.notification),"updateParentOnRemove"in h&&n(1,s=h.updateParentOnRemove)},o.$$.update=()=>{1&o.$$.dirty&&d.autoDismiss&&(a=setTimeout(()=>{(0,e.at)(d.id),(0,e.au)(d.id)},d.autoDismiss))},[d,s,f,r,l,c,u,m,()=>{(0,e.at)(d.id),(0,e.au)(d.id),s()},b,p,()=>n(2,f=!0),()=>n(2,f=!1),h=>d.onClick&&d.onClick(h)]}class ye extends e.S{constructor(t){super(),(0,e.i)(this,t,pe,me,e.s,{notification:0,updateParentOnRemove:1},ve)}}function be(o){(0,e.a)(o,"svelte-1h8mmo3","ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(\n      --notify-onboard-font-size,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(\n      --notify-onboard-font-family,\n      var(--onboard-font-family-normal, inherit)\n    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}")}function K(o,t,n){const i=o.slice();return i[12]=t[n],i}function B(o){let t,r,l,c,n=[],i=new Map,d=o[2];const s=a=>a[12].key;for(let a=0;a<d.length;a+=1){let f=K(o,d,a),u=s(f);i.set(u,n[a]=G(u,f))}return{c(){t=(0,e.j)("ul");for(let a=0;a<n.length;a+=1)n[a].c();(0,e.k)(t,"class",r="bn-notify-"+o[0]+" "+o[5]+" svelte-1h8mmo3"),(0,e.k)(t,"style",l=`${o[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${o[6].expanded?"412px":o[1]&&"mobile"!==o[7].type?"82px":o[1]||"mobile"!==o[7].type?"24px":"108px"})`)},m(a,f){(0,e.b)(a,t,f);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);c=!0},p(a,f){if(517&f){d=a[2],(0,e.y)();for(let u=0;u<n.length;u+=1)n[u].r();n=(0,e.u)(n,f,s,1,a,d,i,t,e.az,G,null,K);for(let u=0;u<n.length;u+=1)n[u].a();(0,e.z)()}(!c||33&f&&r!==(r="bn-notify-"+a[0]+" "+a[5]+" svelte-1h8mmo3"))&&(0,e.k)(t,"class",r),(!c||67&f&&l!==(l=`${a[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${a[6].expanded?"412px":a[1]&&"mobile"!==a[7].type?"82px":a[1]||"mobile"!==a[7].type?"24px":"108px"})`))&&(0,e.k)(t,"style",l)},i(a){if(!c){for(let f=0;f<d.length;f+=1)(0,e.x)(n[f]);c=!0}},o(a){for(let f=0;f<n.length;f+=1)(0,e.A)(n[f]);c=!1},d(a){a&&(0,e.d)(t);for(let f=0;f<n.length;f+=1)n[f].d()}}}function G(o,t){let n,i,r,l,c,d,s,f,u,m,a=e.n;return i=new ye({props:{notification:t[12],updateParentOnRemove:t[9]}}),{key:o,first:null,c(){n=(0,e.j)("li"),(0,e.F)(i.$$.fragment),r=(0,e.G)(),(0,e.k)(n,"class",l=(0,e.l)(`bn-notify-li-${t[0]} ${t[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"),this.first=n},m(v,b){(0,e.b)(v,n,b),(0,e.I)(i,n,null),(0,e.m)(n,r),f=!0,u||(m=(0,e.p)(n,"click",(0,e.J)(t[10])),u=!0)},p(v,b){t=v;const p={};4&b&&(p.notification=t[12]),i.$set(p),(!f||1&b&&l!==(l=(0,e.l)(`bn-notify-li-${t[0]} ${t[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"))&&(0,e.k)(n,"class",l)},r(){s=n.getBoundingClientRect()},f(){(0,e.aw)(n),a(),(0,e.ax)(n,s)},a(){a(),a=(0,e.ay)(n,s,N,{duration:500})},i(v){f||((0,e.x)(i.$$.fragment,v),v&&(0,e.U)(()=>{!f||(d&&d.end(1),c=(0,e.V)(n,e.aa,{duration:1200,delay:300,x:t[3],y:t[4],easing:ge}),c.start())}),f=!0)},o(v){(0,e.A)(i.$$.fragment,v),c&&c.invalidate(),d=(0,e.aj)(n,e.X,{duration:300,easing:e.am}),f=!1},d(v){v&&(0,e.d)(n),(0,e.K)(i),v&&d&&d.end(),u=!1,m()}}}function he(o){let t,n,i=o[2].length&&B(o);return{c(){i&&i.c(),t=(0,e.e)()},m(r,l){i&&i.m(r,l),(0,e.b)(r,t,l),n=!0},p(r,[l]){r[2].length?i?(i.p(r,l),4&l&&(0,e.x)(i,1)):(i=B(r),i.c(),(0,e.x)(i,1),i.m(t.parentNode,t)):i&&((0,e.y)(),(0,e.A)(i,1,1,()=>{i=null}),(0,e.z)())},i(r){n||((0,e.x)(i),n=!0)},o(r){(0,e.A)(i),n=!1},d(r){i&&i.d(r),r&&(0,e.d)(t)}}}function ge(o){return Math.sin(-13*(o+1)*Math.PI/2)*Math.pow(2,-35*o)+1}function ke(o,t,n){let i;const{device:r}=e.ae,l=e.a3.select("accountCenter").pipe((0,W.O)(e.a3.get().accountCenter),(0,U.d)(1));(0,e.c)(o,l,p=>n(6,i=p));let a,f,{position:c}=t,{sharedContainer:d}=t,{notifications:s}=t;a=0,f=0;let u="y-scroll";const v=function(){let p=null;return(y,g)=>{clearTimeout(p),p=setTimeout(y,g)}}();return o.$$set=p=>{"position"in p&&n(0,c=p.position),"sharedContainer"in p&&n(1,d=p.sharedContainer),"notifications"in p&&n(2,s=p.notifications)},o.$$.update=()=>{1&o.$$.dirty&&(c.includes("top")?n(4,f=-50):n(4,f=50))},[c,d,s,0,f,u,i,r,l,()=>{"y-visible"!==u&&n(5,u="y-visible"),v(function(){n(5,u="y-scroll")},1e3)},function b(p){e.ah.call(this,o,p)}]}class _e extends e.S{constructor(t){super(),(0,e.i)(this,t,ke,he,e.s,{position:0,sharedContainer:1,notifications:2},be)}}}}]);