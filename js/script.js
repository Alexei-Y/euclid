"use strict"

document.addEventListener("DOMContentLoaded", () => {

  (function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
    });
  }());
  
  const slider = document.querySelector('.swiper-container');
  
  let mySwiper = new Swiper(slider, {
    loop: true,
    spaceBetween: 10,
    speed: 550, 
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
  })

  $( function() {
    $( ".accordion" ).accordion({
      active: false,
      collapsible: true,
      animate: 400,
      heightStyle: "content",
      header: ".faq__body",
    });
  } );

  $('.faq__body').prop("tabindex", -1); //fix
  $('.ui-icon').remove(); // delete span el (arrow)
});

