(function () {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
      burger.classList.toggle('burger__active');
  });
}());







// document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
//   item.addEventListener('click', () => {

//     const parent = item.parentNode;

//     parent.classList.toggle('accordion-item__active');
//   })
// )

// .accordion-item {
//   margin-top: 20px;
// }

// .accordion-item__trigger {
//   padding: 20px;
//   border: 1px solid #000;
//   user-select: none;
// }

// .accordion-item__content {
//   display: none;
//   padding: 20px;
//   border: 1px solid #000;
//   border-top: none;
// }

// .accordion-item__active .accordion-item__trigger {
//   background-color: #ccc;
// }

// .accordion-item__active .accordion-item__content {
//   display: block;
// }