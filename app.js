!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./src/js/main.js":function(e,t){document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("load",(e=>{document.querySelector(".preload").classList.add("preload-finished")}));const e=document.getElementById("btnScrollToTop");e&&e.addEventListener("click",(e=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}))}))},"./src/js/nav.js":function(e,t){document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("header-container"),t=document.getElementById("menu-btn");document.getElementById("nav-list");window.addEventListener("scroll",(t=>{document.documentElement.scrollTop>0?e.classList.add("sticky"):e.classList.remove("sticky")})),t.addEventListener("click",(e=>{t.classList.toggle("clicked")}))}))},0:function(e,t,n){n("./src/js/main.js"),e.exports=n("./src/js/nav.js")}});