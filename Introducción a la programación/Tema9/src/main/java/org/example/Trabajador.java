package org.example;

/**
 * Clase Trabajador hereda de la clase Persona
 * y añade la propiedad salario
 */
public class Trabajador extends Persona{
    private double salario;

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }
}
