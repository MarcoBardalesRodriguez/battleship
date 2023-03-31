import Suministro from './classSuministro.js';
import Barco from './classBarco.js';

export default class Tablero {
    // Vacio . 00
    // Barco . 01
    // S Mina     . 11
    // S Mina 2.0 . 12
    // S Botiquin . 13
    // S Radar    . 14

    constructor(container) {
        this.container = container;
        this.mapa = this.IniciarMapa();
        this.barco;
    }

    IniciarMapa() {
        let array = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],];
        return array;
    }

    CrearSuministro() {
        const suministro = new Suministro(this.mapa);
        suministro.Generar();
    }

    CrearBarco() {
        this.barco = new Barco(this.mapa);
        this.barco.Generar();
    }
    
    AvanzarBarco() {
        this.barco.Avanzar();
    }
    
    RetrocederBarco() {
        this.barco.Retroceder();
    }

    DesplazarDerechaBarco (){
        this.barco.DesplazarDerecha();
    }
    
    DesplazarIzquierdaBarco (){
        this.barco.DesplazarIzquierda();
    }

    MostrarTablero() {
        console.table(this.mapa);
        // this.mapa.foreach((value) => {
        //     value.foreach((value) => {
        //         console.log(value);
        //     });
        // });
    }

    DibujarTablero() {
        this.container.innerHTML = '';
        let tabla = document.createElement('table');
        let cuerpoTabla = document.createElement('tbody');

        this.mapa.forEach(function (datosFila) {
            let fila = document.createElement('tr');
            
            datosFila.forEach(function (datosCeldas) {
                let celda = document.createElement('td');
                if (datosCeldas == 1) {
                    celda.classList.add('player');
                }
                celda.appendChild(document.createTextNode(datosCeldas));
                fila.appendChild(celda);
            });
            cuerpoTabla.appendChild(fila);
        });
        tabla.appendChild(cuerpoTabla);

        this.container.appendChild(tabla);
    }
}