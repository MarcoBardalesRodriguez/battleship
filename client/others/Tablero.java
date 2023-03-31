/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package proyecto;

public class Tablero {
    /**
    * Vacio = 00
    * Barco = 01
    * Suministro Municion = 11
    * Suministro Botiquin = 12
    */
    public int mapa[][] = new int[10][10];   
    Barco barco = new Barco(mapa);
    
    public void CrearSuministro() { 
       Suministro suministro = new Suministro(mapa);
       suministro.Generar();
    }
    
    public void CrearBarco() {
        this.barco.Generar();
    }
    
    public void AvanzarBarco() {
        this.barco.Avanzar();
    }
    
    public void DesplazarDerechaBarco (){
        this.barco.DesplazarDerecha();
    }
    
    public void DesplazarIzquierdaBarco (){
        this.barco.DesplazarIzquierda();
    }
    
    public void MostrarTablero() {
        for (int i = 0; i<10; i++) {
            for (int j = 0; j<10; j++) {
                if (i == 5) {
                    System.out.print(mapa[i][j] + " ");
//                    if (mapa[i][j] == 1) {
//                        System.out.print(mapa[i][j] + " ");
//                    }else{
//                       System.out.print("* ");   
//                    } 
                       
                }
                else{
                    System.out.print(mapa[i][j] + " ");
                }
            }
            System.out.println("");
        }
    }

    
}
