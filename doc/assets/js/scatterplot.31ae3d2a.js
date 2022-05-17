!function(){"use strict";var e,t={2449:function(e,t,n){n(4100),n(3741),n(4594),n(5614),n(6965),n(3960),n(3979),n(8124),n(1329),n(6774),n(7467),n(3091),n(963),n(8002);var r,a=n(6036),l=n(7132),c=n(7757),o=n(7173);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u,s,f,m,d,p=(0,c.ZP)((function(e){var t=e.className,n=e.xScale,r=e.yScale,l=e.data,c=e.xValue,o=e.yValue,i=e.colorScale,u=e.colorValue;return l.map((function(e,l){return a.createElement("g",{className:t,key:l},a.createElement("circle",{cx:n(c(e)),cy:r(o(e)),style:{fill:i(u(e))},r:"10"}))}))}))(r||(u=["\n  circle {\n    fill: #137b80;\n  }\n"],s||(s=u.slice(0)),r=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(s)}})))),y=(0,c.ZP)((function(e){var t=e.className,n=e.xScale,r=e.innerHeight;return n.ticks().map((function(e,l){return a.createElement("g",{key:l,className:t,transform:"translate(".concat(n(e),", 0)")},a.createElement("line",{x1:"0",y1:"0",x2:"0",y2:r}),a.createElement("text",{textAnchor:"middle",y:r+20},e))}))}))(f||(f=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  line {\n    stroke: #c0c0bb;\n  }\n  text {\n    stroke: #c0c0bb;\n  }\n"]))),h=(0,c.ZP)((function(e){var t=e.yScale,n=e.className,r=e.innerWidth;return t.ticks().map((function(e,l){return a.createElement("g",{key:l,className:n,transform:"translate(0, ".concat(t(e),")")},a.createElement("line",{x2:r}),a.createElement("text",{x:"-20",textAnchor:"end",dy:"0.4em"},e))}))}))(m||(m=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  stroke: #BDBDBD;\n"]))),v=function(e){var t=e.options,n=e.selectValue,r=e.onSelectValueChange;return a.createElement("select",{value:n,onChange:function(e){r(e.target.value)}},t.map((function(e,t){return a.createElement("option",{key:e.value,value:e.value},e.text)})))},b=function(e){var t=e.colorScale;return t.domain().map((function(e,n){return a.createElement("g",{key:e,transform:"translate(0, ".concat(25*n,")")},a.createElement("circle",{r:"7",fill:t(e)}),a.createElement("text",{dx:12,dy:5},e))}))};function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=400,S=660,w=(0,c.ZP)((function(e){var t=e.className,n=function(){var e,t,n=(e=(0,a.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=n[0],l=n[1],c=function(e){return e.petal_length=+e.petal_length,e.petal_width=+e.petal_width,e.sepal_length=+e.sepal_length,e.sepal_width=+e.sepal_width,e};return(0,a.useEffect)((function(){(0,o.gyn)("https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv",c).then(l)}),[]),r}(),r=g((0,a.useState)("sepal_length"),2),l=r[0],c=r[1],u=g((0,a.useState)("sepal_width"),2),s=u[0],f=u[1];if(!n)return a.createElement(a.Fragment,null);var m=n.columns.map((function(e){return{text:e,value:e}})),d=function(e){return e[l]},x=function(e){return e[s]},w=function(e){return e.species},O=(0,o.BYU)().domain((0,o.Wem)(n,d)).range([0,S]).nice(),j=(0,o.BYU)().domain((0,o.Wem)(n,x)).range([0,E]),k=(0,o.PKp)().domain(n.map(w)).range(["#e6842a","#137B80","#8e6c8a"]);return a.createElement("div",{className:t},a.createElement("div",null,a.createElement("div",{class:"select"},a.createElement("h3",null,"x 軸"),a.createElement(v,{options:m,selectValue:l,onSelectValueChange:c})),a.createElement("div",{class:"select"},a.createElement("h3",null,"y 軸"),a.createElement(v,{options:m,selectValue:s,onSelectValueChange:f}))),a.createElement("svg",{width:960,height:500},a.createElement("g",{transform:"translate(".concat(100,", ").concat(20,")")},a.createElement(y,{xScale:O,innerHeight:E}),a.createElement(h,{yScale:j,innerWidth:S}),a.createElement(p,{data:n,xScale:O,yScale:j,colorScale:k,xValue:d,yValue:x,colorValue:w}),a.createElement("g",{transform:"translate(".concat(690,", 0)")},a.createElement(b,{colorScale:k})),a.createElement("text",{x:330,y:460,textAnchor:"middle",style:{fontSize:"30px"}},l),a.createElement("text",{x:0,y:200,style:{fontSize:"30px"},textAnchor:"middle",transform:"translate(-".concat(65,", 0), rotate(-90, 0, ").concat(200,")")},s))))}))(d||(d=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  h3 {\n    font-size: 14px;\n    margin-bottom: 0px;\n  }\n  .select {\n    display: inline-block;\n    padding: 0 10px;\n  }\n"])));l.render(a.createElement(w,null),document.getElementById("app"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,a,l){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],l=e[s][2];for(var o=!0,i=0;i<n.length;i++)(!1&l||c>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(o=!1,l<c&&(c=l));if(o){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,a,l]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.j=953,function(){var e={953:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,c=n[0],o=n[1],i=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(i)var s=i(r)}for(t&&t(n);u<c.length;u++)l=c[u],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[216],(function(){return r(2449)}));a=r.O(a)}();