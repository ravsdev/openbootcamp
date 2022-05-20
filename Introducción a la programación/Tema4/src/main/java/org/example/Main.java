package org.example;

/**
 * Ejercicios Tema 4
 * Curso de Introducción a la programación
 * open-Bootcamp.com
 */
public class Main {
    public static void main(String[] args) {
        //Condición if
        //Comprobar si el valor de la variable numeroIf es positivo, negativo o 0
        int numeroIf=5;

        if(numeroIf>0) System.out.println(numeroIf+" es positivo.");
        else if(numeroIf<0) System.out.println(numeroIf+" es negativo.");
        else System.out.println(numeroIf+" es 0.");

        //Bucle While
        int numeroWhile=0;

        while(numeroWhile<3){
            numeroWhile++;
            System.out.println("El valor de la variable numeroWhile es (bucle while): "+numeroWhile);
        }

        //Bucle do while
        do {
            numeroWhile++;
            System.out.println("El valor de la variable numeroWhile es (bucle do...while):"+numeroWhile);
        }while(numeroWhile<3);

        //Bucle for
        int numeroFor;
        for(numeroFor=0;numeroFor<=3;numeroFor++){
            System.out.println("El valor de la variable numeroFor es (bucle for):"+numeroFor);
        }

        //Switch
        String estacion="primavera";
        switch(estacion){
            case "invierno":
                System.out.println("Estamos en invierno.");
                break;
            case "primavera":
                System.out.println("Estamos en primavera.");
                break;
            case "verano":
                System.out.println("Estamos en verano.");
                break;
            case "otoño":
                System.out.println("Estamos en otoño.");
                break;
            default:
                System.out.println("No es ninguna estación.");
        }

    }
}