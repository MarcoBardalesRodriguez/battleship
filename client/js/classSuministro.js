export default class Suministro {
    // Vacio . 00
    // Barco . 01
    // S Mina     . 11
    // S Mina 2.0 . 12
    // S Botiquin . 13
    // S Radar    . 14

    constructor(mapa) {
        this.mapa = mapa;
    }

    GenerarTipo() {
        let tipo = Math.floor(Math.random()*2)+11;
        return tipo;
    }

    GenerarPosicion () {
        let x = Math.floor(Math.random()*10);
        let y = Math.floor(Math.random()*10);
        let posicion = [x, y];
        return posicion;
    }

    Generar() {
        console.log("Generando suministros");
        let mina = 0;
        let mina2 = 0;
        while (true) {
            // Obtener una posicion aleatoria
            let x;
            let y;
            [x, y] = this.GenerarPosicion();
        
            // Comprueba que el lugar este 'vacio'
            if (this.mapa[x][y] == 0) {
               // Si el tipo es 11 y existen de este tipo menos de 3 se asigna al mapa
               if (mina <2){
                 this.mapa[x][y] = 11;
                 mina++;
                 console.log("entra al bucle 11 y genera un tipo 11 cuando hay de este tipo mina");
                 continue;
               }
               // Si el tipo es 12 y existen de este tipo menos de 3 se asigna al mapa
               if (mina2 < 2) {
                   this.mapa[x][y] = 12; 
                   mina2++;
                   console.log("entra al bucle 12 y genera un tipo 12 cuando hay de este tipo mina2");
                   continue;
               } 
            }
            if (mina == 2 && mina2 == 2){
             break;
            }
           
        }
        
        // Comprabar el numero de cada tipo de Suministro en el mapa
        // this.mapa.foreach((value, xx) => {
        //     value.foreach((value, yy) => {
        //         if (value == 11) {console.log(`mina en ${xx}, ${yy}`);}
        //         if (value == 12) {console.log(`mina 2.0 en ${xx}, ${yy}`);}
        //     })
        // })
        console.log(`Generados exitosamente ${mina} minas y ${mina2} minas 2.0`);
    }

}