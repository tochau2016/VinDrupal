var swiper = new Swiper('.carSwiper', {
  slidesPerView: 4,
  spaceBetween: 30,
});
var swiper = new Swiper('.chargingSwiper', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  function onAnimationText() {
    $('#gasoline-car-tab').click(function () {
      $('#gasoline-car .car-item')
        .delay(170)
        .each(function (i) {
          $(this)
            .delay(275 * i)
            .queue(function () {
              $(this).addClass('show');
            });
        });
    });
    $('#batteryDeposit .battery-deposit-item')
      .delay(500)
      .each(function (i) {
        $(this)
          .delay(100 * i)
          .queue(function () {
            $(this).addClass('show-text');
          });
      });
  }

  var homeSwiper = new Swiper('.homeSwiper', {
    direction: 'vertical',
    parallax: false,
    slidesPerView: 1,
    mousewheel: true,
    noSwiping: false,
    speed: 1000,
    simulateTouch: false,
    on: {
      init: onAnimationText,
      slideChangeTransitionStart: onAnimationText,
    },
  });
  homeSwiper.disableTouchControl();
});
