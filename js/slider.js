//배너 슬라이더
const swiper = new Swiper('.banner-swiper', {
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000, // 3000ms = 3초
    disableOnInteraction: false, // 사용자가 조작해도 자동재생 유지
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//카드뉴스
const cardSwiper = new Swiper('.card-swiper', {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  speed: 600,
  loopAdditionalSlides: 8, // 데스크탑에서 여유롭게

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { 
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopAdditionalSlides: 2
    },
    768: { 
      slidesPerView: 2,
      slidesPerGroup: 2,
      loopAdditionalSlides: 4
    },
    1025: { 
      slidesPerView: 3,
      slidesPerGroup: 3,
      loopAdditionalSlides: 6
    },
    1400: { 
      slidesPerView: 4,
      slidesPerGroup: 4,
      loopAdditionalSlides: 8
    }
  }
});
