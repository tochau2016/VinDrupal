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
    if ($('.homeSwiper').find('.swiper-slide-active').hasClass('cars')) {
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
    } else if (
      $('.homeSwiper').find('.swiper-slide-active').hasClass('battery-deposit')
    ) {
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
  }

  var swiper = new Swiper('.homeSwiper', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    speed: 1000,
    on: {
      init: onAnimationText,
      slideChangeTransitionStart: onAnimationText,
    },
  });
});
