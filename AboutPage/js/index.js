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

const items = document.querySelectorAll('.global-footprint .global-footprint__wrap .global-footprint__item');

items.forEach( (item)=> {
  item.addEventListener('click', ()=> {
      item.parentElement.style.flexDirection = "row-reverse";
      item.children.src = "../img/VF-91.jpg";
  })
});
