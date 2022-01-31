Fancybox.bind("#requests_gallery .requests-gallery__item-link", {
  groupAll: true,
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  spaceBetween: 16,
});
