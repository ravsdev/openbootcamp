package org.example;

/**
 * Ejercicios Tema 9
 * Curso de Introducción a la programación
 * open-Bootcamp.com
 */

/*
Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad,
 el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona,
 y con una variable salario que solo tenga la clase Trabajador.
 */
public class Main {
    public static void main(String[] args) {
        //Creamos un nuevo objeto de la clase Cliente
        Cliente cliente=new Cliente();

        //Creamos un nuevo objeto de la clase Trabajador
        Trabajador trabajador=new Trabajador();

        //Damos valores a las propiedades del objeto cliente
        cliente.setNombre("Alfredo");
        cliente.setEdad(30);
        cliente.setTelefono(123456789);
        cliente.setCredito(1500.20);

        //Mostramos por pantalla los valores del objeto cliente
        System.out.printf("Datos del cliente:\n" +
                "Nombre: %s" +
                "\n" +
                "Edad: %d" +
                "\n" +
                "Telefono: %d" +
                "\n" +
                "Crédito: %.2f" +
                "\n",cliente.getNombre(),cliente.getEdad(),cliente.getTelefono(),cliente.getCredito());

        //Damos valores a las propiedades del objeto trabajador
        trabajador.setNombre("Felipe");
        trabajador.setEdad(45);
        trabajador.setTelefono(987654321);
        trabajador.setSalario(2500);

        //Mostramos por pantalla los valores del objeto trabajador
        System.out.printf("Datos del trabajador:\n" +
                "Nombre: %s" +
                "\n" +
                "Edad: %d" +
                "\n" +
                "Telefono: %d" +
                "\n" +
                "Salario: %.2f" +
                "\n",trabajador.getNombre(),trabajador.getEdad(),trabajador.getTelefono(),trabajador.getSalario());
    }
}