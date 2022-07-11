#Escribe una función que pueda decirte si un año (número entero) es bisiesto o no.
"""
- Los años bisiestos son los divisibles entre 4
- excepto si es divisible entre 100, entonces no es bisiesto
- excepto si es divisible entre 400, entonces sí 
"""

def esBisiesto(anio):
    return anio%4==0 and (anio%100 != 0 or anio%400==0)
    # if anio%4==0 and (anio%100 != 0 or anio%400==0):
    #     return True
    # else:
    #     return False

print("Introduce un año: ")
anio = int(input())
print("Bisiesto" if esBisiesto(anio) else "No es bisiesto")

