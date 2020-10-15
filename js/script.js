"use strict"

document.addEventListener("DOMContentLoaded", () => {

  (function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.navbar');
    const links = document.querySelector('.navbar__item');

    burger.addEventListener('click', (e) => {
      e.preventDefault();

        burger.classList.toggle('burger__active');
        menu.classList.toggle('active');
        document.querySelector('body').classList.toggle('no-scroll');

      // if(burger.classList.contains('burger__active')) {
      //   burger.classList.remove('burger__active');
      //   menu.classList.remove('active');
      //   document.querySelector('body').classList.remove('no-scroll');
      // } else {
      //   burger.classList.add('burger__active');
      //   menu.classList.add('active');
      //   document.querySelector('body').classList.add('no-scroll');
      // }

      links.addEventListener('click', () => {
        burger.classList.remove('burger__active');
        menu.classList.remove('active');
        document.querySelector('body').classList.remove('no-scroll');
      });
      
    })

    // https://issue.life/questions/54786905    (fix ios) !!!!
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

