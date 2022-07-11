# En este segundo ejercicio, tendréis que crear un archivo py
# y dentro crearéis una clase Vehículo, haréis un objeto de ella,
# lo guardaréis en un archivo y luego lo cargamos.
import pickle

class Vehiculo:
    ruedas = None
    color = ''
    velocida = None

    def __init__(self,ruedas,color,velocidad):
        self.ruedas = ruedas
        self.color = color
        self.velocidad = velocidad

    def __repr__(self):
        return f'Vehiculo({self.ruedas},{self.color},{self.velocidad})'

def main():
    #Creamos un objeto Vehiculo
    newVehiculo=Vehiculo(4,"rojo",150)
    file = 'datos.bin'
    
    #Escribimos el objeto en un archivo
    f = open(file,'w+b')
    pickle.dump(newVehiculo,f)
    f.close()

    #Leemos el objeto del archivo y lo mostramos
    f = open(file,'rb')
    vehiculoGuardado=pickle.load(f)
    print(vehiculoGuardado)
    f.close()

if __name__ == '__main__':
    main()