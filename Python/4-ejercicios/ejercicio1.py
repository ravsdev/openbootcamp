"""
Escribe un programa que pregunte al usuario su edad
y muestre por pantalla si es mayor de edad o no.
"""

print("¿Cuál es tu edad? ")
edad = input()
if int(edad) >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")

#Operadores ternarios:

# print("Eres ","mayor" if int(edad)>=18 else "menor", "de edad")

# print("Eres ",("menor","mayor")[int(edad)>=18], "de edad")