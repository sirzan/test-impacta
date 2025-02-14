// Inicializar Swiper
// Inicialización de Swiper
const swiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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