!function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}({"./src/js/creations.json":function(e){e.exports=JSON.parse('{"boxes":[{"id":1,"title":"Deep earth","image":"./assets/images/desktop/image-deep-earth.jpg","imageMob":"./assets/images/mobile/image-deep-earth.jpg"},{"id":2,"title":"Night arcade","image":"./assets/images/desktop/image-night-arcade.jpg","imageMob":"./assets/images/mobile/image-night-arcade.jpg"},{"id":3,"title":"Soccer Team vr","image":"./assets/images/desktop/image-soccer-team.jpg","imageMob":"./assets/images/mobile/image-soccer-team.jpg"},{"id":4,"title":"the grid","image":"./assets/images/desktop/image-grid.jpg","imageMob":"./assets/images/mobile/image-grid.jpg"},{"id":5,"title":"from up above vr","image":"./assets/images/desktop/image-from-above.jpg","imageMob":"./assets/images/mobile/image-from-above.jpg"},{"id":6,"title":"pocket borealis","image":"./assets/images/desktop/image-pocket-borealis.jpg","imageMob":"./assets/images/mobile/image-pocket-borealis.jpg"},{"id":7,"title":"the curiosity","image":"./assets/images/desktop/image-curiosity.jpg","imageMob":"./assets/images/mobile/image-curiosity.jpg"},{"id":8,"title":"make it fisheye","image":"./assets/images/desktop/image-fisheye.jpg","imageMob":"./assets/images/mobile/image-fisheye.jpg"}]}')},"./src/js/fetchData.js":function(e,t,i){document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("grid-boxes"),t=i("./src/js/creations.json");(async()=>{const i=t.boxes;e.innerHTML=i.map((e=>{const{id:t,title:i,image:s,imageMob:o}=e;return window.onresize=function(){let e=window.innerWidth;return e>600?s:e<600?o:void 0},`\n\t\t\t\t\t<div class="grid__box">\n\t\t\t\t\t\t<img \n\t\t\t\t\t\t\tclass="grid__box-img"\n\t\t\t\t\t\t\tsrc="${window.innerWidth<600?o:s}"\n\t\t\t\t\t\t\talt="${i}"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<h4 class="grid__box-title">${i}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t`})).join("")})()}))},"./src/js/main.js":function(e,t){document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("load",(e=>{document.querySelector(".preload").classList.add("preload-finished")}));const e=document.getElementById("btnScrollToTop");e&&e.addEventListener("click",(e=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}))}))},"./src/js/nav.js":function(e,t){document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("hero-nav"),t=document.getElementById("sticky-header"),i=document.getElementById("menu-btn"),s=document.getElementById("nav-list");window.addEventListener("scroll",(e=>{document.documentElement.scrollTop>0?t.classList.add("sticky"):t.classList.remove("sticky")})),i.addEventListener("click",(t=>{i.classList.toggle("clicked"),e.classList.toggle("overlay"),s.classList.toggle("show")}))}))},0:function(e,t,i){i("./src/js/fetchData.js"),i("./src/js/main.js"),e.exports=i("./src/js/nav.js")}});