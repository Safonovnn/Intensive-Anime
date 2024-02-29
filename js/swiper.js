const sliderSwipper = () => {
  //создание объекта слайдера
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
};

sliderSwipper();
