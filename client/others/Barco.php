<?php
class Barco {
    // Vacio -> 00
    // Barco -> 01
    // S Mina     -> 11
    // S Mina 2.0 -> 12
    // S Botiquin -> 13
    // S Radar    -> 14
    protected $mapa;
    protected $x = 0;
    protected $y = 4;
    protected $vida = 10;

    function __construct(&$mapa) {
        $this->mapa = &$mapa;
    }

    public function Generar(): void {
        echo "generando barco";
        $this->mapa[$this->x][$this->y] = 1;
        echo "vida: $this->vida";
    }

    private function Colision(): void {
        echo "colision";
        if ($this->mapa[$this->x][$this->y] == 11) {
            $this->vida -= 5;
            echo "mina: damage 5point";
        }
        if ($this->mapa[$this->x][$this->y] == 12) {
            $this->vida -= 5;
            echo "mina 2.0: damage 10point";
        } 
    }

    private function ComprobarVida(): void {
        if ($this->vida < 1) {
            $this->mapa[$this->x][$this->y] = 0;
        }
        echo "vida $this->vida";
    }

    public function Avanzar(): void {
        if ($this->mapa[$this->x][$this->y] == 0) {
            $this->mapa[$this->x][$this->y] = 0; //vaciamos la posicion actual
            $this->x++;
            $this->mapa[$this->x][$this->y] = 1; //asignamos a la nueva posicion
        }else {
            $this->Colision();
        }
        $this->ComprobarVida();
    }

    public function DesplazarDerecha(): void {
        if ($this->mapa[$this->x][$this->y] == 0) {
            $this->mapa[$this->x][$this->y] = 0; //vaciamos la posicion actual
            $this->y++;
            $this->mapa[$this->x][$this->y] = 1; //asignamos a la nueva posicion
        }else {
            $this->Colision();
        }
        $this->ComprobarVida();
    }

    public function DesplazarIzquierda(): void {
        if ($this->mapa[$this->x][$this->y] == 0) {
            $this->mapa[$this->x][$this->y] = 0; //vaciamos la posicion actual
            $this->y--;
            $this->mapa[$this->x][$this->y] = 1; //asignamos a la nueva posicion
        }else {
            $this->Colision();
        }
        $this->ComprobarVida();
    }
}

?>