const boto = document.getElementById('botonako'); // Asegúrate que este ID es correcto
const fons = document.getElementById('fons');
const hud = document.getElementById('recorre');

    // Agregar un event listener para el clic
     boto.addEventListener('click', function() {
      // Alternar la clase para mover el botón
      boto.classList.toggle('translate-x-48'); // Cambia la clase para mover el botón

      fons.classList.toggle('bg-white');

      hud.classList.toggle('bg-gray-200');

      boto.classList.toggle('bg-white');
    });