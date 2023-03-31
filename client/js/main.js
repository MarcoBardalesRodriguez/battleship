import Tablero from './classTablero.js';

const container = document.getElementById('tablero');

let tablero = new Tablero(container);
tablero.CrearBarco();
tablero.CrearSuministro();
// tablero.MostrarTablero();
tablero.DibujarTablero();

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            tablero.RetrocederBarco();
            // tablero.MostrarTablero();
            tablero.DibujarTablero();
            break;
        case 'ArrowDown':
            tablero.AvanzarBarco();
            // tablero.MostrarTablero();
            tablero.DibujarTablero();
            break;
        case 'ArrowLeft':
            tablero.DesplazarIzquierdaBarco();
            // tablero.MostrarTablero();
            tablero.DibujarTablero();
            break;
        case 'ArrowRight':
            tablero.DesplazarDerechaBarco();
            // tablero.MostrarTablero();
            tablero.DibujarTablero();
            break;
        default:
            break;
    }
});    