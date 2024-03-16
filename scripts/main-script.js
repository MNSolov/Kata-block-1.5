//import Swiper from "./swiper.js";

/*const swiper = new Swiper('.brands-slider');*/

const swiper = new Swiper('.brands-slider', {
  
   // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    //autoHeight: true,
    spaceBetween: 20,
    slidesPerView: 1.1,
    centeredSlides: false,
    roundLengths: true,
   // height: 100,
    //effect: 'cards',
  //cardsEffect: {
    // ...
  //},
  });

 /* if (document.documentElement.clientWidth >= 768) {
    swiper.destroy();
  }
*/