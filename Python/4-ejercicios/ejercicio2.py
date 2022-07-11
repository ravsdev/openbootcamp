"""
Escribe un programa capaz de mostrar todos los números impares
desde un número de inicio y otro final.

Por ejemplo: teniendo numero_inicial = 2 y numero_final = 8,
el programa debe imprimir por consola: [3, 5, 7]
"""
print("Número inicial: ")
numStart=input()

print("Número final: ")
numEnd=input()

print("Números impares en ese rango: ")
contador = int(numStart)

while contador <= int(numEnd):
    if contador % 2 != 0:
        print(contador)
    contador+=1