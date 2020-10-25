const mySwiper = new Swiper('.swiper-container', {
  speed: 1000,
  loop: true,

  autoplay: {
    delay: 2000
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})