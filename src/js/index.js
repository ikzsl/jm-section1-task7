import '../scss/style.scss';
import Swiper from 'swiper';

let brands = document.querySelector('.brands');
let brandsList = brands.querySelector('.brands__list');
let brandsUnrollButton = brands.querySelector('.unroll');
let toggleBrandsList = function () {
  brandsList.classList.toggle('brands__list--rolled');

  brandsUnrollButton.classList.toggle('unroll--rolled');
  if (brands.querySelector('.brands__list--rolled')) {
    brandsUnrollButton.textContent = 'Показать все';
  } else {
    brandsUnrollButton.textContent = 'Скрыть';
  }
};
brandsUnrollButton.addEventListener('click', toggleBrandsList);

// Показ-скрытие бокового меню
let menuButton = document.querySelector('.main-header__menu-button');
let navBar = document.querySelector('.navbar');
let closeButton = navBar.querySelector('.navbar__close-button');

let showNavbar = function () {
  navBar.classList.toggle('navbar--on');
  menuButton.removeEventListener('click', showNavbar);
  closeButton.addEventListener('click', hideNavbar);
}

let hideNavbar = function () {
  navBar.classList.toggle('navbar--on');
  closeButton.removeEventListener('click', hideNavbar);
  menuButton.addEventListener('click', showNavbar);
}

menuButton.addEventListener('click', showNavbar);




// Swiperjs

var mediaQueryList = window.matchMedia("(min-width: 768px)");

if (!mediaQueryList.matches) {

 var swiper1 = new Swiper('.swiper1', {

    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination1',
      type: 'bullets',
    },
  });


  var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
    },
  });

  var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination3',
      type: 'bullets',
    },

  });
}

// swiper1.destroy();
