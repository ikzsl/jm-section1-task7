!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var r=document.querySelector(".brands"),i=r.querySelector(".brands__list"),o=r.querySelector(".unroll");o.addEventListener("click",(function(){i.classList.toggle("brands__list--rolled"),o.classList.toggle("unroll--rolled"),r.querySelector(".brands__list--rolled")?o.textContent="Показать все":o.textContent="Скрыть"}));var a=document.querySelector(".main-header__menu-button"),l=document.querySelector(".navbar"),s=l.querySelector(".navbar__close-button"),u=function e(){l.classList.toggle("navbar--on"),a.removeEventListener("click",e),s.addEventListener("click",c)},c=function e(){l.classList.toggle("navbar--on"),s.removeEventListener("click",e),a.addEventListener("click",u)};a.addEventListener("click",u);var p,d=window.matchMedia("(min-width: 768px)");if(d.matches);else{p=new Swiper(".swiper1",{slidesPerView:"auto",pagination:{el:".swiper-pagination1"}});var w=new Swiper(".swiper2",{slidesPerView:"auto",pagination:{el:".swiper-pagination2",type:"bullets"}}),f=new Swiper(".swiper3",{slidesPerView:"auto",pagination:{el:".swiper-pagination3",type:"bullets"}})}d.addListener((function(e){e.matches&Boolean(p)?(p.destroy(),w.destroy(),f.destroy()):(p=new Swiper(".swiper1",{slidesPerView:"auto",pagination:{el:".swiper-pagination1"}}),w=new Swiper(".swiper2",{slidesPerView:"auto",pagination:{el:".swiper-pagination2"}}),f=new Swiper(".swiper3",{slidesPerView:"auto",pagination:{el:".swiper-pagination3"}}))}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map