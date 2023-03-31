/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package proyecto;
import java.util.Random;

public class Suministro{
    
    public int[][] mapa;
    public int numeromuniciones = 0;
    public int numerobotiquines = 0;
    public Random random = new Random();
    
    public Suministro(int[][] mapa) {
        this.mapa = mapa;
    }
    
    public int GenerarTipo () {
        int tipo = random.nextInt(2)+11;
//        System.out.println(tipo);
        return tipo;
    }
    
    public int[] GenerarPosicion () {
        int x = random.nextInt(10);
        int y = random.nextInt(10);
        int posicion[] = {x, y};
//        System.out.println(x + " " + y);
        
        return posicion;
    }
    
    public void Generar () {
        System.out.println("Generando Suministros");
        while (true) {
            int x = 5;
            int y = GenerarPosicion()[1];
        
            for (int i = 0; i<10; i++) {
                for (int j = 0; j<10; j++) {
                    if (this.mapa[i][j] == 11){
                        this.numeromuniciones++; 
//                        System.out.println(this.numeromuniciones);
                    }
                    if (this.mapa[i][j]== 12){
                        this.numerobotiquines++;
//                        System.out.println(this.numerobotiquines);
                    }
                }
            }
            
           if (this.mapa[x][y] == 0) {
               int tipo = GenerarTipo();
               if ( this.numeromuniciones < 3 && tipo == 11){
                 this.mapa[x][y] = tipo;  
               }
               
               if (this.numerobotiquines < 3 && tipo == 12) {
                   this.mapa[x][y] = tipo; 
               } 
            }
           
           if (this.numeromuniciones > 2 && this.numerobotiquines > 2){
               break;
           }
        }   
    }      
}
