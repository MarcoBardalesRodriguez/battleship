/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package proyecto;

public class Barco {
    public int[][] mapa;
    public int vida = 10;
    public int x = 0;
    public int y = 4;

    public Barco(int[][] mapa) {
        this.mapa = mapa;
    }

    public void Generar() {
        System.out.println("generando barco");
        this.mapa[this.x][this.y] = 1;
        System.out.println("vida: " + this.vida);
    }
    
    private void Colision() {
        System.out.println("Colision");
        if (this.mapa[this.x][this.y] == 11){
            this.vida -= 5;
        }else{
            this.vida -= 10;
        }
        System.out.println("vida: " + this.vida);
    }
    
    private void ComprobarVida() {
        if (this.vida < 1) {
            this.mapa[this.x][this.y] = 0;
        }
    }
    
    public void Avanzar() {
        this.mapa[this.x][this.y] = 0;
//        System.out.println("barco eliminado");
        this.x++;
        if (this.mapa[this.x][this.y] != 0){
            this.Colision();
        }
        this.mapa[this.x][this.y] = 1;
//        System.out.println("barco movido");
        this.ComprobarVida();
    }
    
    public void DesplazarDerecha (){
        this.mapa[this.x][this.y] = 0;
//        System.out.println("barco eliminado");
        this.y++;
        if (this.mapa[this.x][this.y] != 0){
            this.Colision();
        }
        this.mapa[this.x][this.y] =1;
//        System.out.println("barco movido");
        this.ComprobarVida();
    }
    
    public void DesplazarIzquierda (){
        this.mapa[this.x][this.y] = 0;
//        System.out.println("barco eliminado");
        this.y--;
        if (this.mapa[this.x][this.y] != 0){
            this.Colision();
        }
        this.mapa[this.x][this.y] =1;
//        System.out.println("barco movido");
        this.ComprobarVida();
    }  
            
 
}
