"""
En este ejercicio vais a crear la clase Vehículo la cual tendrá los siguientes atributos:
    Color
    Ruedas
    Puertas

Por otro lado crearéis la clase Coche la cual heredará de Vehículo y
tendrá los siguientes atributos:
    Velocidad
    Cilindrada
Por último, tendrás que crear un objeto de la clase Coche y mostrarlo por consola.
"""

class Vehiculo:
    #Atributos
    color=None
    ruedas=4
    puertas=3

    #Constructor
    def __init__ (self,color,ruedas,puertas):
        self.color = color
        self.ruedas = ruedas
        self.puertas = puertas

    #ToString
    def __str__(self):
        return f'Color:{self.color} Ruedas:{self.ruedas} Puertas:{self.puertas}'

class Coche(Vehiculo):
    #Atributos
    velocidad=0
    cilindrada=0

    #Constructor
    def __init__ (self,color,ruedas,puertas,velocidad,cilindrada):
        super().__init__(color,ruedas,puertas)
        self.velocidad = velocidad
        self.cilindrada = cilindrada

    #ToString
    def __str__(self):
        return super().__str__()+f' Velocidad:{self.velocidad} Cilindrada:{self.cilindrada}'

miCoche=Coche("Rojo",4,3,180,1300)

print(miCoche)