"""
En este segundo ejercicio, tendréis que crear un programa que tenga una
clase llamada Alumno que tenga como atributos su nombre y su nota. 
Deberéis de definir los métodos para inicializar sus atributos,
imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.
"""

class Alumno:
    nombre=""
    nota = None

    #Constructor
    def __init__(self,nombre,nota):
        self.nombre = nombre
        self.nota = nota

    #ToString
    def __str__(self):
        return f'Nombre: {self.nombre} Nota: {self.nota}'

    #Comprobar si el alumno ha aprobado
    def aprobado(self):
        return self.nota >=5

alumnoNuevo = Alumno("Pepito",7)

print(alumnoNuevo, "Aprobado" if alumnoNuevo.aprobado() else "Suspendido")