// // section2
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  //  Responsive breakpoints
      breakpoints: {
    0: {
      slidesPerView: 1,
      },
    640: {
    slidesPerView: 2,
    },
    
    768: {
    slidesPerView: 3,
    },
    908: {
      slidesPerView: 4,
      }
    
  }
    
  });