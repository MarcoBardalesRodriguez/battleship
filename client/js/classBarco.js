export default class Barco {
    // Vacio . 00
    // Barco . 01
    // S Mina     . 11
    // S Mina 2.0 . 12
    // S Botiquin . 13
    // S Radar    . 14    

    constructor(mapa) {
        this.mapa = mapa;
        this.x = 0;
        this.y = 4;
        this.vida = 10;
    }

    Generar() {
        console.log("generando barco");
        this.mapa[this.x][this.y] = 1;
        console.log(`vida: ${this.vida}`);
    }

    ComprobarColision() {
        console.log("Comprobando colision");
        if (this.mapa[this.x][this.y] == 11) {
            this.vida -= 5;
            console.log("mina: damage 5point");
        }
        if (this.mapa[this.x][this.y] == 12) {
            this.vida -= 10;
            console.log("mina 2.0: damage 10point");
        } 
    }

    ComprobarVida() {
        if (this.vida < 1) {
            this.mapa[this.x][this.y] = 0;
        }
        console.log(`vida ${this.vida}`);
    }

    Avanzar() {
        // let nextPosition = this.mapa[this.x + 1][this.y];
        if (this.x < 9 && typeof this.mapa[this.x + 1][this.y]  === 'number') {
            console.log('barco avanza');
            this.mapa[this.x][this.y] = 0; //vaciamos la posicion actual
            this.x++;
            this.ComprobarColision();
            this.mapa[this.x][this.y] = 1; //asignamos a la nueva posicion
        }
        this.ComprobarVida();
    }

    Retroceder() {
        if (this.x > 0 && typeof this.mapa[this.x - 1][this.y] === 'number') {
            this.mapa[this.x][this.y] = 0; //vaciamos la posicion actual
            this.x--;
            this.ComprobarColision();
            this.mapa[this.x][this.y] = 1; //asignamos a la nueva posicion
        }
        this.ComprobarVida();
    }

    DesplazarDerecha() {
        if (typeof this.mapa[this.x][this.y + 1] === 'number') {
            this.mapa[this.x][this.y] = 0; //vaciamos la posicion actual
            this.y++;
            this.ComprobarColision();
            this.mapa[this.x][this.y] = 1; //asignamos a la nueva posicion
        }
        this.ComprobarVida();
    }

    DesplazarIzquierda(){
        if (typeof this.mapa[this.x][this.y - 1] === 'number') {
            this.mapa[this.x][this.y] = 0; //vaciamos la posicion actual
            this.y--;
            this.ComprobarColision();
            this.mapa[this.x][this.y] = 1; //asignamos a la nueva posicion
        }
        this.ComprobarVida();
    }
}