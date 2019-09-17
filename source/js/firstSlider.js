// 'use strict';

// var firstSlider = document.querySelector('.first-slider');
// var slidesOfFirstSlider = firstSlider.querySelectorAll('.first-slider__img');

// slidesOfFirstSlider.forEach(function (slide) {
//   if (slide.classList.contains('first-slider__img--left')) {
//     slide.style.left = '-884px';
//   }
// });

// var onBtnClick = function (evt) {
//   evt.preventDefault();
//   var btnId = evt.target.id;
//   var currentSlide = secondSlider.querySelector('.second-slider__img--current');
//   var rightSlide = secondSlider.querySelector('.second-slider__img--right');
//   var leftSlide =secondSlider.querySelector('.second-slider__img--left');

//   var changeCurrentSlide = function (newCurrentSlide) {
//       if (newCurrentSlide.classList.contains('second-slider__img--left')) {
//         newCurrentSlide.classList.remove('second-slider__img--left');
//       }
//       if (newCurrentSlide.classList.contains('second-slider__img--right')) {
//         newCurrentSlide.classList.remove('second-slider__img--right');
//       }
//     newCurrentSlide.classList.add('second-slider__img--current', 'second-slider__img--animation');
//     newCurrentSlide.style.left = "-120px";
//   };

//   var changeRightSlide = function (newRightSlide, btnId) {
//     switch (btnId) {
//       case 'rightBtn':
//         newRightSlide.classList.remove('second-slider__img--left');
//         if (newRightSlide.classList.contains('second-slider__img--animation')) {
//           newRightSlide.classList.remove('second-slider__img--animation');
//         }
//         newRightSlide.classList.add('second-slider__img--right');
//         break;
//       case 'leftBtn':
//         newRightSlide.classList.remove('second-slider__img--current');
//         newRightSlide.classList.add('second-slider__img--right', 'second-slider__img--animation');
//         break;
//     };
//     newRightSlide.style.left = "438px";
//   };

//   var changeLeftSlide = function (newLeftSlide, btnId) {
//     switch (btnId) {
//       case 'rightBtn':
//         newLeftSlide.classList.remove('second-slider__img--current');
//         newLeftSlide.classList.add('second-slider__img--left', 'second-slider__img--animation');
//         break;
//       case 'leftBtn':
//         newLeftSlide.classList.remove('second-slider__img--right');
//         if (newLeftSlide.classList.contains('second-slider__img--animation')) {
//           newLeftSlide.classList.remove('second-slider__img--animation');
//         }
//         newLeftSlide.classList.add('second-slider__img--left');
//         break;
//     };
//     newLeftSlide.style.left = '-678px';
//   };

//   switch (btnId) {
//     case 'rightBtn':
//       changeCurrentSlide(rightSlide);
//       changeRightSlide(leftSlide, btnId);
//       changeLeftSlide(currentSlide, btnId);
//       break;
//     case 'leftBtn':
//       changeCurrentSlide(leftSlide);
//       changeRightSlide(currentSlide, btnId);
//       changeLeftSlide(rightSlide, btnId);
//   }
// };

// sliderRigthBtn.addEventListener('click', onBtnClick);
// sliderLeftBtn.addEventListener('click', onBtnClick);
