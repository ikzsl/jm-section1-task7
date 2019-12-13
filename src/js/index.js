import '../scss/style.scss';
import Swiper from 'swiper';


// Сворачиваем-разворачиваем блок текста content__desc

let content = document.querySelector('.content__desc');
let contentText = content.querySelector('.content__desc-wrapper');
let contentTextWrapper = content.querySelector('.content__text-wrapper');
let contentUnrollButton = content.querySelector('.content__unroll');
let toggleContent = function () {
  contentText.classList.toggle('content__desc-wrapper--rolled');
  contentTextWrapper.classList.toggle('content__text-wrapper--rolled');

  contentUnrollButton.classList.toggle('unroll--rolled');
  if (content.querySelector('.content__desc-wrapper--rolled')) {
    contentUnrollButton.textContent = 'Читать далее';
  } else {
    contentUnrollButton.textContent = 'Скрыть';
  }
};
contentUnrollButton.addEventListener('click', toggleContent);


// Сворачиваем-разворачиваем блок brands

let brands = document.querySelector('.brands');
let brandsList = brands.querySelector('.brands__list');
let brandsUnrollButton = brands.querySelector('.brands___unroll');
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


// Сворачиваем-разворачиваем блок repair-types

let repairTypes = document.querySelector('.repair-types');
let repairTypesList = repairTypes.querySelector('.repair-types__list');
let repairTypesUnrollButton = repairTypes.querySelector('.repair-types___unroll');
let toggleRepairTypes = function () {
  repairTypesList.classList.toggle('repair-types__list--rolled');

  repairTypesUnrollButton.classList.toggle('unroll--rolled');
  if (repairTypes.querySelector('.repair-types__list--rolled')) {
    repairTypesUnrollButton.textContent = 'Показать все';
  } else {
    repairTypesUnrollButton.textContent = 'Скрыть';
  }
};
repairTypesUnrollButton.addEventListener('click', toggleRepairTypes);

// Показ-скрытие бокового меню
let menuButton = document.querySelector('.main-header__menu-button');
let navBar = document.querySelector('.navbar');
let closeButton = navBar.querySelector('.navbar__close-button');
let popupLayer = document.querySelector('.popup-layer');

let showNavbar = function () {
  navBar.classList.toggle('navbar--on');
  menuButton.removeEventListener('click', showNavbar);
  closeButton.addEventListener('click', hideNavbar);
  popupLayer.classList.remove('popup-layer--off');
}

let hideNavbar = function () {
  navBar.classList.toggle('navbar--on');
  closeButton.removeEventListener('click', hideNavbar);
  menuButton.addEventListener('click', showNavbar);
  popupLayer.classList.add('popup-layer--off');
}

menuButton.addEventListener('click', showNavbar);


// Показ-скрытие модального окна 'Обратная связь'

let feedbackModal = document.querySelector('.feedback');
let closeFeedbackModalButton = feedbackModal.querySelector('.feedback__close');
let feedbackButtons = document.querySelectorAll('.btn--chat');

let showFeedbackModal = function () {
  feedbackModal.classList.toggle('feedback--off');
  for(var i = 0; i < feedbackButtons.length; i++) {
    feedbackButtons[i].removeEventListener('click', showFeedbackModal);
  }

  closeFeedbackModalButton.addEventListener('click', closeFeedbackModal);
  popupLayer.classList.remove('popup-layer--off');
  popupLayer.classList.remove('popup-layer--modal');
}

let closeFeedbackModal = function () {
  feedbackModal.classList.toggle('feedback--off');
for(var i = 0; i < feedbackButtons.length; i++) {
  feedbackButtons[i].removeEventListener('click', closeFeedbackModal);
}
for(var i = 0; i < feedbackButtons.length; i++) {
  feedbackButtons[i].addEventListener('click', showFeedbackModal);
}
popupLayer.classList.add('popup-layer--off');
popupLayer.classList.add('popup-layer--modal');
}

for(var i = 0; i < feedbackButtons.length; i++) {
  feedbackButtons[i].addEventListener('click', showFeedbackModal);
}

// Показ-скрытие модального окна 'Заказать звонок'

let callbackModal = document.querySelector('.callback');
let closeCallbackModalButton = callbackModal.querySelector('.callback__close');
let callbackButtons = document.querySelectorAll('.btn--call');

let showCallbackModal = function () {
  callbackModal.classList.toggle('callback--off');
  for(var i = 0; i < callbackButtons.length; i++) {
    callbackButtons[i].removeEventListener('click', showCallbackModal);
  }

  closeCallbackModalButton.addEventListener('click', closeCallbackModal);
  popupLayer.classList.remove('popup-layer--off');
  popupLayer.classList.remove('popup-layer--modal');
}

let closeCallbackModal = function () {
  callbackModal.classList.toggle('callback--off');
for(var i = 0; i < callbackButtons.length; i++) {
  callbackButtons[i].removeEventListener('click', closeCallbackModal);
}
for(var i = 0; i < callbackButtons.length; i++) {
  callbackButtons[i].addEventListener('click', showCallbackModal);
}
popupLayer.classList.add('popup-layer--off');
popupLayer.classList.add('popup-layer--modal');
}

for(var i = 0; i < callbackButtons.length; i++) {
  callbackButtons[i].addEventListener('click', showCallbackModal);
}







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
