<?php
require_once 'Suministro.php';
require_once 'Barco.php';

class Tablero {
    // Vacio -> 00
    // Barco -> 01
    // S Mina     -> 11
    // S Mina 2.0 -> 12
    // S Botiquin -> 13
    // S Radar    -> 14

    protected SplFixedArray $mapa; // Iterable de 10 x 10, valor por defecto 0
    protected $barco;
    
    function __construct() {
        $this->mapa = $this->IniciarMapa();
    }

    private function IniciarMapa(): SplFixedArray {
        $array = new SplFixedArray(10);
        $array->setSize(10); // Establecer el tamaño del arreglo a 10
    
        for ($i = 0; $i < 10; $i++) {
            $fila = new SplFixedArray(10);
            $fila->setSize(10); // Establecer el tamaño de cada fila a 10
    
            for ($j = 0; $j < 10; $j++) {
                $fila[$j] = 0; // Establecer el valor de cada elemento en 0
            }
    
            $array[$i] = $fila;
        }
    
        return $array;
    }

    public function CrearSuministro() {
        $suministro = new Suministro($this->mapa);
        $suministro->Generar();
    }

    public function CrearBarco() {
        $this->barco = new Barco($this->mapa);
        $this->barco->Generar();
    }
    
    public function AvanzarBarco() {
        $this->barco->Avanzar();
    }
    
    public function DesplazarDerechaBarco (){
        $this->barco->DesplazarDerecha();
    }
    
    public function DesplazarIzquierdaBarco (){
        $this->barco->DesplazarIzquierda();
    }

    public function MostrarTablero() {
        foreach ($this->mapa as $row ) {
            foreach ($row as $cell ) {
                echo $cell . " ";
            }
            echo "<br>";
        }
    }
}

// $mapa = new Tablero();
// $mapa->MostrarTablero();
// $mapa->CrearSuministro();
// $mapa->MostrarTablero();

?>