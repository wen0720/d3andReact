!function(){"use strict";var e,t={7744:function(e,t,n){n(4208),n(4594),n(1912),n(8002),n(963),n(4100),n(3741),n(5614),n(6965),n(3960),n(3979),n(8124),n(1329),n(6774),n(7467),n(769),n(6814),n(1877),n(3654),n(5565);var r=n(6036),o=n(7132),u=n(7173);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,o,u,c){try{var a=e[u](c),i=a.value}catch(e){return void n(e)}a.done?t(i):Promise.resolve(i).then(r,o)}var s=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.text();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function c(e){f(u,r,o,c,a,"next",e)}function a(e){f(u,r,o,c,a,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),p=window.innerWidth,h=window.innerHeight,v=(u.Nb1().innerRadius(0).outerRadius(p).startAngle(Math.PI/2).endAngle(3*Math.PI/2),function(){var e,t,n=(e=(0,r.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];return(0,r.useEffect)((function(){s("https://gist.githubusercontent.com/ml-paperWen/ace0b4abb5bc6f87845edaefc5941014/raw/csscolor.csv").then((function(e){var t=u.ueB(e);console.log("".concat(Math.round(e.length/1024),"kB")),console.log("".concat(t.length," rows")),console.log("".concat(t.columns.length," columns")),console.log(t),c(t)}))}),[]),o?r.createElement("svg",{width:p,height:h},r.createElement("g",{transform:"translate(".concat(p/2,", ").concat(h/2,")")},u.ve8().value(1)(o).map((function(e,t){return r.createElement("path",{fill:e.data["RGB hex value"],key:"".concat(e.data.Keyword,"-").concat(t),d:u.Nb1()(a({innerRadius:0,outerRadius:p},e))})})))):r.createElement("p",null,"Loading")}),b=document.getElementById("app");o.render(r.createElement(v,null),b)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.m=t,e=[],r.O=function(t,n,o,u){if(!n){var c=1/0;for(f=0;f<e.length;f++){n=e[f][0],o=e[f][1],u=e[f][2];for(var a=!0,i=0;i<n.length;i++)(!1&u||c>=u)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(a=!1,u<c&&(c=u));if(a){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[n,o,u]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.j=141,function(){var e={141:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,u,c=n[0],a=n[1],i=n[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(i)var f=i(r)}for(t&&t(n);l<c.length;l++)u=c[l],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(f)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[216],(function(){return r(7744)}));o=r.O(o)}();