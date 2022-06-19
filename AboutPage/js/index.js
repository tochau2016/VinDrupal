var swiper = new Swiper('.aboutSwiper', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  speed: 1000,
  // on: {
  //   init: onAnimationText,
  //   slideChangeTransitionStart: onAnimationText,
  // },
});
var imagesSwiper = new Swiper('.imagesSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
});
