!function(){"use strict";var e,t={7650:function(e,t,n){n(8002);var r=n(6036),a=n(7132),c=n(7173);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(4100),n(3741),n(4594),n(5614),n(6965),n(3960),n(3979),n(8124),n(1329),n(6774),n(7467),n(3091),n(963);var i,u,l,f,s,m=n(7757),d=(0,m.ZP)((function(e){var t=e.className,n=e.xScale,a=e.yScale,o=e.xValue,i=e.yValue,u=e.data;return r.createElement("g",{className:t},r.createElement("path",{d:(0,c.jvg)().curve(c.SxZ).x((function(e){return n(o(e))})).y((function(e){return a(i(e))}))(u)}),u.map((function(e,t){return r.createElement("g",{key:t},r.createElement("circle",{cx:n(o(e)),cy:a(i(e)),r:"3"}))})))}))(i||(u=["\n  circle {\n    stroke: #25B33D;\n    fill: #ccc;\n  }\n  path {\n    fill: none;\n    stroke: #25B33D;\n    stroke-width: 5;\n    stroke-linejoin: round;\n    stroke-linecap: round; // 線條最 2 邊的端點樣式\n  }\n"],l||(l=u.slice(0)),i=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(l)}})))),p=(0,m.ZP)((function(e){var t=e.className,n=e.yScale,a=e.innerWidth;return n.ticks().map((function(e){return r.createElement("g",{className:t,key:e,transform:"translate(0, ".concat(n(e),")")},r.createElement("line",{x2:a}),r.createElement("text",{textAnchor:"middle",dy:"0.2em",x:"-20"},e))}))}))(f||(f=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  line {\n    stroke: #ddd;\n  }\n"]))),y=(0,m.ZP)((function(e){var t=e.className,n=e.xScale,a=e.innerHeight,o=e.formatWeek;return n.ticks(c.rr1.every(1)).map((function(e,c){return r.createElement("g",{className:t,key:c,transform:"translate(".concat(n(e),", 0)")},r.createElement("line",{y2:a}),r.createElement("text",{y:a+20},o(e)))}))}))(s||(s=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  line {\n    stroke: #ddd;\n  }\n"]))),b=function(e){return e.timestamp},v=function(e){return e.temperature},h=(0,c.i$Z)("%a"),g=function(){var e=function(){var e,t,n=(e=(0,r.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],i=n[1];return(0,r.useEffect)((function(){(0,c.gyn)("https://gist.githubusercontent.com/wen0720/5dcb55651feb24b409bd266baa381e01/raw/b2d63d2b1b2f1c526e5826e0a1811647394d706b/tempture",(function(e){return e.temperature=+e.temperature,e.timestamp=new Date(e.timestamp),e})).then(i)}),[]),a}();if(!e)return r.createElement("h1",null,"Loading");console.log(e);var t=(0,c.Xf)().domain((0,c.Wem)(e,b)).range([0,880]).nice(),n=(0,c.BYU)().domain((0,c.Wem)(e,v)).range([460,0]).nice();return r.createElement("svg",{width:960,height:500},r.createElement("g",{transform:"translate(".concat(60,", ").concat(20,")")},r.createElement(p,{yScale:n,innerWidth:880}),r.createElement(y,{xScale:t,innerHeight:460,formatWeek:h}),r.createElement(d,{xScale:t,yScale:n,xValue:b,yValue:v,data:e})))};a.render(r.createElement(g,null),document.getElementById("app"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,a,c){if(!n){var o=1/0;for(f=0;f<e.length;f++){n=e[f][0],a=e[f][1],c=e[f][2];for(var i=!0,u=0;u<n.length;u++)(!1&c||o>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,c<o&&(o=c));if(i){e.splice(f--,1);var l=a();void 0!==l&&(t=l)}}return t}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[n,a,c]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.j=560,function(){var e={560:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,c,o=n[0],i=n[1],u=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var f=u(r)}for(t&&t(n);l<o.length;l++)c=o[l],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(f)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[216],(function(){return r(7650)}));a=r.O(a)}();