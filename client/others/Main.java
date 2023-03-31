/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

package proyecto;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Tablero tablero = new Tablero();
        tablero.CrearBarco();
        tablero.CrearSuministro();
        
        tablero.MostrarTablero();
        
        Scanner entrada = new Scanner(System.in);
        while(true){
            System.out.println("\n[1] Avanzar");
            System.out.println("[2] Derecha");
            System.out.println("[3] Izquierda");
            int input = entrada.nextInt();
        
            if (input == 1){
                tablero.AvanzarBarco();
                tablero.MostrarTablero();
            }
            if (input == 2){
                tablero.DesplazarDerechaBarco();
                tablero.MostrarTablero();
            }
            if (input == 3){
                tablero.DesplazarIzquierdaBarco();
                tablero.MostrarTablero();
            }
        }
        
        
    }
}
