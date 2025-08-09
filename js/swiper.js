const cardSwiper = new Swiper('.card-swiper', {
  loop: true,
  spaceBetween: 20,
  speed: 600,

  breakpoints: {
    0: { slidesPerView: 1, slidesPerGroup: 1, loopAdditionalSlides: 2 },
    768: { slidesPerView: 2, slidesPerGroup: 2, loopAdditionalSlides: 4 },
    1025: { slidesPerView: 3, slidesPerGroup: 3, loopAdditionalSlides: 6 },
    1400: { slidesPerView: 4, slidesPerGroup: 4, loopAdditionalSlides: 8 }
  }
});
