import '../scss/style.scss';

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



// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 3,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


if (window.matchMedia("(min-width: 768px)").matches) {
  /* the viewport is at least 400 pixels wide */
  var swiper1 = null;

} else {
  /* the viewport is less than 400 pixels wide */

  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
      type: 'bullets',
    },

  });

  var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1.2,
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
      type: 'bullets',
    },
  });

  var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination3',
      clickable: true,
      type: 'bullets',
    },

  });

}


