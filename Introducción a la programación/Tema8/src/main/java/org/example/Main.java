package org.example;

/**
 * Ejercicios Tema 8
 * Curso de Introducción a la programación
 * open-Bootcamp.com
 */
public class Main {
    public static void main(String[] args) {
        //Creamos objeto de la clase Persona
        Persona alumno = new Persona();

        //Utilizamos los sets para darle valores al objeto
        alumno.setNombre("Raúl");
        alumno.setEdad(40);
        alumno.setTelefono(123456789);

        //Mostramos por pantalla los valores con los métodos get
        System.out.printf("Nombre: %s" +
                "\n" +
                "Edad: %d" +
                "\n" +
                "Telefono: %d",alumno.getNombre(),alumno.getEdad(),alumno.getTelefono());
    }
}