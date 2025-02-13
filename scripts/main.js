// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Inicializar AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
  });

  // Menú colapsable
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarContent = document.querySelector('.navbar-content');

  menuToggle.addEventListener('click', () => {
    navbarContent.classList.toggle('active');
  });
});