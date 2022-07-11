"""
Escribe una función que calcule el área de un triángulo,
recibiendo la altura y la base como parámetros y otra función que calcule el área de un círculo recibiendo el radio del mismo.
"""

def calcArea(altura, base):
    return (base*altura)/2

print("Altura: ")
altura=int(input())
base=int(input())
print(calcArea(altura,base))