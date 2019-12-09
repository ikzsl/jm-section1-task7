import '../scss/style.scss';
import './swiper.js';

let brands = document.querySelector('.brands');
let brandsList = brands.querySelector('.brands__list');
let brandsUnrollButton = brands.querySelector('.unroll');
let toggleList = function () {
  brandsList.classList.toggle('brands__list--rolled');

  brandsUnrollButton.classList.toggle('unroll--rolled');
  if (brands.querySelector('.brands__list--rolled')) {
    brandsUnrollButton.textContent = 'Показать все';

  } else {
    brandsUnrollButton.textContent = 'Скрыть';
  }
};
brandsUnrollButton.addEventListener('click', toggleList);

// Показ-скрытие меню
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

//-------------------------------------------------



