'use strict';

var firstSlider = document.querySelector('.first-slider');
var secondSlider = document.querySelector('.second-slider');
var slidesOfFirstSlider = firstSlider.querySelectorAll('.first-slider__img');
var slidesOfSecondSlider = secondSlider.querySelectorAll('.second-slider__img');
var sliderRigthBtn = secondSlider.querySelector('.second-slider__right-button');
var sliderLeftBtn = secondSlider.querySelector('.second-slider__left-button');
var typeSlider = ['first-slider', 'second-slider'];

var onBtnClick = function (evt) {
  evt.preventDefault();
  var btnId = evt.target.id;

  var firstSliderCurrentImg = firstSlider.querySelector('.first-slider__img--current');
  var firstSliderRightImg = firstSlider.querySelector('.first-slider__img--right');
  var firstSliderLeftImg = firstSlider.querySelector('.first-slider__img--left');

  var secondSliderCurrentImg = secondSlider.querySelector('.second-slider__img--current');
  var secondSliderRightImg = secondSlider.querySelector('.second-slider__img--right');
  var secondSliderLeftImg =secondSlider.querySelector('.second-slider__img--left');

  var changeCurrentSlide = function (newCurrentSlide, typeSlider, src) {
      if (newCurrentSlide.classList.contains(typeSlider +'__img--left')) {
        newCurrentSlide.classList.remove(typeSlider +'__img--left');
      }
      if (newCurrentSlide.classList.contains(typeSlider +'__img--right')) {
        newCurrentSlide.classList.remove(typeSlider +'__img--right');
      }
      if (typeSlider === 'first-slider') {
        newCurrentSlide.src = src;
      }
      newCurrentSlide.classList.add(typeSlider +'__img--current', typeSlider +'__img--animation');
  };

  var changeRightSlide = function (newRightSlide, btnId, typeSlider) {
      switch (btnId) {
        case 'rightBtn':
          newRightSlide.classList.remove(typeSlider +'__img--left');
          if (newRightSlide.classList.contains(typeSlider +'__img--animation')) {
            newRightSlide.classList.remove(typeSlider +'__img--animation');
          }
          newRightSlide.classList.add(typeSlider +'__img--right');
          break;
        case 'leftBtn':
          newRightSlide.classList.remove(typeSlider +'__img--current');
          newRightSlide.classList.add(typeSlider +'__img--right', typeSlider +'__img--animation');
          break;
      };
  };

  var changeLeftSlide = function (newLeftSlide, btnId, typeSlider) {
      switch (btnId) {
        case 'rightBtn':
          newLeftSlide.classList.remove(typeSlider +'__img--current');
          newLeftSlide.classList.add(typeSlider +'__img--left', typeSlider +'__img--animation');
          break;
        case 'leftBtn':
          newLeftSlide.classList.remove(typeSlider +'__img--right');
          if (newLeftSlide.classList.contains(typeSlider +'__img--animation')) {
            newLeftSlide.classList.remove(typeSlider +'__img--animation');
          }
          newLeftSlide.classList.add(typeSlider +'__img--left');
          break;
      };
  };

  switch (btnId) {
    case 'rightBtn':
      var srcForFirstSlider = secondSliderCurrentImg.src;
      changeCurrentSlide(secondSliderRightImg, typeSlider[1]);
      changeRightSlide(secondSliderLeftImg, btnId, typeSlider[1]);
      changeLeftSlide(secondSliderCurrentImg, btnId, typeSlider[1]);

      setTimeout(function () {
        changeCurrentSlide(firstSliderRightImg, typeSlider[0], srcForFirstSlider);
        changeRightSlide(firstSliderLeftImg, btnId, typeSlider[0]);
        changeLeftSlide(firstSliderCurrentImg, btnId, typeSlider[0], srcForFirstSlider);
      }, 500);

      break;
    case 'leftBtn':
      srcForFirstSlider = secondSliderCurrentImg.src;
      changeCurrentSlide(secondSliderLeftImg, typeSlider[1]);
      changeRightSlide(secondSliderCurrentImg, btnId, typeSlider[1]);
      changeLeftSlide(secondSliderRightImg, btnId, typeSlider[1]);

      setTimeout(function () {
        changeCurrentSlide(firstSliderLeftImg, typeSlider[0], srcForFirstSlider);
        changeRightSlide(firstSliderCurrentImg, btnId, typeSlider[0]);
        changeLeftSlide(firstSliderRightImg, btnId, typeSlider[0]);
      }, 500);
  }
};

var sliderControl = secondSlider.querySelector('.second-slider__control');
sliderControl.addEventListener('click', onBtnClick);
