// Este archivo define las configuraciones de AOS

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS

// Función para inicializar AOS, 
// Lo puse en main.jsx para no tener que ponerlo en cada archivo
const initAOS = () => {
  AOS.init({
    // Configuraciones globales
    duration: 800, // duración de las animaciones en ms
    easing: 'ease-in-out', // tipo de efecto
    once: false, // si las animaciones deben ocurrir solo una vez
    mirror: false, // si las animaciones deben repetirse al hacer scroll hacia arriba
    offset: 60, // determina a cuantos px se debe activar la animacion segun el scroll.
  });
};

export default initAOS;
