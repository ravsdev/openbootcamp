package org.example;

/**
 * Clase Cliente hereda de la clase Persona
 * y añade la propiedad crédito
 */
public class Cliente extends Persona{
    private double credito;

    public double getCredito() {
        return credito;
    }

    public void setCredito(double credito) {
        this.credito = credito;
    }
}
