package org.example;

/**
 * Clase Coche
 */
public class Coche {
    private int puertas;

    public Coche(){
        puertas=3;
    }

    /**
     * Añade una puerta al vehículo
     */
    public void addPuerta(){
        this.puertas++;
    }

    /**
     * Obtiene el número de puertas del vehículo
     * @return Número de puertas
     */
    public int getPuertas() {
        return puertas;
    }

    /**
     * Establece el número de puertas del vehículo
     * @param puertas
     */
    public void setPuertas(int puertas) {
        this.puertas = puertas;
    }
}
