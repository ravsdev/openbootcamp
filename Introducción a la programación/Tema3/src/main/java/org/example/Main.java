package org.example;

/**
 * Ejercicios del tema 3
 * Curso de Introducción a la programación
 * open-Bootcamp.com
 */
public class Main {
    public static void main(String[] args){
        //Primera parte
        int resultado= suma(2,5,15);
        System.out.println("La suma de los tres números es: "+resultado);

        //Segunda parte (la clase Coche está definida en el archivo Coche.java)
        Coche miCoche=new Coche();
        System.out.println("Puertas del coche:" +miCoche.getPuertas());
        miCoche.addPuerta();
        System.out.println("Puertas del coche después de añadir una puerta:" +miCoche.getPuertas());
    }

    /**
     * Devuelve la suma de 3 números pasados por parámetro.
     * @param a
     * @param b
     * @param c
     * @return suma de los 3 parámetros recibidos
     */
    public static int suma(int a, int b, int c) {
        return a + b + c;
    }
}