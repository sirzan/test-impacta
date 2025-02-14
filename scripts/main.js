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



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-send');
  const modal = document.createElement('div');
  
  // Crear estructura del modal
  modal.innerHTML = `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-content">
        <svg class="modal-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
        </svg>
        <h2>¡Mensaje enviado!</h2>
        <p>Tu mensaje ha sido enviado con éxito</p>
        <button class="modal-close">Aceptar</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  const rest = document.getElementById('modal-overlay');
  // Evento de envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    rest.classList.add('active');
  });

  // Eventos para cerrar el modal
  modal.querySelector('.modal-close').addEventListener('click', () => {
    rest.classList.remove('active');
  });

  modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if(e.target === modal.querySelector('.modal-overlay')) {
      rest.classList.remove('active');
    }
  });
});