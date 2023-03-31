<?php

class Suministro {
    // Vacio -> 00
    // Barco -> 01
    // S Mina     -> 11
    // S Mina 2.0 -> 12
    // S Botiquin -> 13
    // S Radar    -> 14

    protected $mapa;

    function __construct(&$mapa) {
        $this->mapa = &$mapa;
    }

    private function GenerarTipo(): int {
        $tipo = mt_rand(11,12);
        return $tipo;
    }

    public function GenerarPosicion (): array {
        $x = mt_rand(0,9);
        $y = mt_rand(0,9);
        $posicion = [$x, $y];
        return $posicion;
    }

    public function Generar(): void{
        echo "Generando suministros";
        echo "<br>";
        $mina = 0;
        $mina2 = 0;
        while (TRUE) {
            // Obtener una posicion aleatoria
            [$x, $y] = $this->GenerarPosicion();
        
            // Comprueba que el lugar este 'vacio'
            if ($this->mapa[$x][$y] == 0) {
               // Si el tipo es 11 y existen de este tipo menos de 3 se asigna al mapa
               if ($mina <2){
                 $this->mapa[$x][$y] = 11;
                 $mina++;
                 echo "entra al bucle 11 y genera un tipo 11 cuando hay de este tipo $mina <br>  ";
                 continue;
               }
               // Si el tipo es 12 y existen de este tipo menos de 3 se asigna al mapa
               if ($mina2 < 2) {
                   $this->mapa[$x][$y] = 12; 
                   $mina2++;
                   echo "entra al bucle 12 y genera un tipo 12 cuando hay de este tipo $mina2 <br>  ";
                   continue;
               } 
            }
            if ($mina == 2 && $mina2 == 2){
             break;
            }
           
        }
        
        // Comprabar el numero de cada tipo de Suministro en el mapa
        foreach ($this->mapa as $fila) {
            foreach ($fila as $valor) {
                if ($valor == 11) {echo "mina";}
                if ($valor == 12) {echo "mina 2.0";}
            }
        }
        echo "Generados exitosamente " . $mina . " minas y ". $mina2 . " minas 2.0 <br>";
    }

}

?>