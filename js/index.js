var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    520: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    918: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
